import { useEffect, useState } from 'react';
import ImageModal from 'components/ImageModal';
import IconWrapper from 'components/IconWrapper';

import images from 'assets/images/images';
import icons from 'assets/images/icons';


interface ImageCarouselProps {
    imageNames: Array<string>;
}


/**
 * Builds and renders a carousel of images. Displays three images unless the
 * screen is below Tailwind's small size, in which case displays only one.
 */
function ImageCarousel({ imageNames }: ImageCarouselProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');
    
    const [index, setIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const openImageModal = (imageSrc: string) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
        setModalImageSrc('');
    };


    const nextImage = () => {
        if (isSmallScreen) {
            setIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
        }
        else {
            setIndex((prevIndex) => (prevIndex + 1) % (imageNames.length - 2));
        }
    };

    const prevImage = () => {
        if (isSmallScreen) {
            setIndex((prevIndex) => (prevIndex - 1 + imageNames.length) % imageNames.length);
        }
        else {
            setIndex((prevIndex) => {
                let newIndex = (prevIndex - 1) % imageNames.length;
                return newIndex < 0 ? imageNames.length - 3 : newIndex;
            });
        }
    };


    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSmallScreen]);


    return (
        <div className="relative md:w-full sm:w-3/5 w-full mx-auto">
            <div className="relative overflow-hidden w-full pb-0.5">
                <div 
                    className="flex transition-transform duration-[0.4s] ease-in-out" 
                    style={{ transform: `translateX(-${index * (isSmallScreen ? 100 : 33.33)}%)` }}
                >
                    {imageNames.map((imageName, i) => (
                        <div key={i} className={`${isSmallScreen ? "w-full" : "w-1/3"} flex-shrink-0 ps-4 pe-4`}>
                            <img 
                                src={images[imageName]} 
                                className="w-full h-auto border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal(imageName)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute md:-left-6 -left-4 top-1/2 transform -translate-y-1/2 text-slate-100 p-2 drop-shadow" onClick={prevImage}>
                <IconWrapper icon={icons['backIcon']} transform="grow-24" />
            </button>
            <button className="absolute md:-right-6 -right-4 top-1/2 transform -translate-y-1/2 text-slate-100 p-2 drop-shadow" onClick={nextImage}>
                <IconWrapper icon={icons['backIcon']} transform="grow-24 rotate-180" />
            </button>
            {isModalOpen && <ImageModal imageName={modalImageSrc} closeCallback={closeImageModal} />}
        </div>
    );
}

export default ImageCarousel;