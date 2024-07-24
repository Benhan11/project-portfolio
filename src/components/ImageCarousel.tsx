import { useState } from 'react';
import ImageModal from 'components/ImageModal';
import IconWrapper from 'components/IconWrapper';

import images from 'assets/images/images';
import icons from 'assets/images/icons';


interface ImageCarouselProps {
    imageNames: Array<string>;
}


/**
 * Builds and renders a carousel of images.
 */
function ImageCarousel({ imageNames }: ImageCarouselProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');

    const openImageModal = (imageSrc: string) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
        setModalImageSrc('');
    };


    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % (imageNames.length - 2));
    };

    const prevImage = () => {
        setIndex((prevIndex) => {
            let newIndex = (prevIndex - 1) % imageNames.length;
            return newIndex < 0 ? imageNames.length - 3 : newIndex;
        });
    };


    return (
        <div className="relative w-full mx-auto">
            <div className="relative overflow-hidden w-full">
                <div className="flex transition-transform duration-[0.4s] ease-in-out" style={{ transform: `translateX(-${index * 33.33}%)` }}>
                    {imageNames.map((imageName, i) => (
                        <div key={i} className="w-1/3 flex-shrink-0 ps-4 pe-4">
                            <img 
                                src={images[imageName]} 
                                className="w-full h-auto border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal(imageName)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-slate-100 p-2 drop-shadow" onClick={prevImage}>
                <IconWrapper icon={icons['backIcon']} transform="grow-24" />
            </button>
            <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-slate-100 p-2 drop-shadow" onClick={nextImage}>
                <IconWrapper icon={icons['backIcon']} transform="grow-24 rotate-180" />
            </button>
            {isModalOpen && <ImageModal imageName={modalImageSrc} closeCallback={closeImageModal} />}
        </div>
    );
}

export default ImageCarousel;