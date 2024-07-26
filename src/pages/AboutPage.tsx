import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconWrapper from 'components/IconWrapper';
import Footer from 'components/Footer';
import ImageModal from 'components/ImageModal';
import ScrollButton from 'components/ScrollButton';
import ScrollIndicator from 'components/ScrollIndicator';
import ImageCarousel from 'components/ImageCarousel';

import icons from 'assets/images/icons';
import images from 'assets/images/images';


/**
 * Builds the about page component.
 */
function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');

    const openImageModal = (imageSrc: string) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
        setModalImageSrc('');
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="min-h-screen font-mono text-slate-200 bg-fixed bg-gradient-to-tr from-gradient-a via-gradient-b to-gradient-c">
            <div className="mx-auto max-w-screen-xl px-6 pb-1 sm:pb-0 md:px-12 lg:px-24">
                <div className="flex flex-wrap flex-row sm:justify-normal justify-between lg:pt-24 lg:pb-4 md:py-12 pt-6 lg:mb-4 md:mb-24 sm:mb-16 mb-10">
                    <img src={images["photo"]} className="rounded-full sm:order-first order-last sm:max-h-40 max-h-36 max-w-48 border-2 border-stone-300 drop-shadow shadow-xl" />
                    <div className="flex flex-col sm:pt-4 pt-1 sm:ps-8 pe-8 sm:pb-0 pb-10">
                        <div className="mb-2">
                            <Link to="/" className="text-base text-slate-200 drop-shadow"><IconWrapper icon={icons['backIcon']} size="sm" /> Home</Link>
                        </div>
                        <div className="text-slate-100 text-3xl font-medium drop-shadow">Benjamin<span className="sm:inline block"></span> Hansson</div>
                        <div className="space-x-2 pt-2 text-slate-300">
                            <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 drop-shadow"><IconWrapper icon={icons['linkedinIcon']} size="xl" /></a>
                            <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50 drop-shadow"><IconWrapper icon={icons['githubIcon']} size="lg" /></a>
                        </div>
                    </div>
                </div>
                
                <div className="md:flex md:h-[28rem] min-h md:space-x-12 md:space-y-0 space-y-8 mb-20">
                    <div className="ps-2 lg:w-1/2 md:w-2/3 flex items-center">
                        <div>
                            <a className="text-lg text-yellow-300 drop-shadow sm:pb-0 pb-2">
                                Who am I?
                            </a>
                            <br/>
                            <span className="text-base drop-shadow">
                                I'm a passionate programmer from Sweden. I enjoy creativity in all its forms, 
                                from coding, to grand-strategy and programming/automation games, as well as the
                                construction of&nbsp;
                                <Link to={`/trees`} className="text-lime-300 inline-flex items-center pe-0.5 animate-customPulse"> 
                                    wire sculpture trees
                                    <IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-4 right-2" />
                                </Link>.
                                Please check them out!
                            </span>
                            <br/><br/>
                            <span className="text-base drop-shadow">
                                When I'm not coding you'll find me out for a stroll in nature with my dog, or 
                                playing racket sports with my friends. I also enjoy exploring different types
                                of music and food. Lately I've been captivated by classical, jazz, and metal.
                                As for food, I often try my hand at various different Asian dishes, mostly
                                Indian and East Asian.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/2 md:w-1/3 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img
                                src={images["treesPotBonsai"]}
                                className="md:max-h-[26rem] max-h-[24rem] lg:max-w-[32rem] md:max-w-[18rem] max-w-full object-contain border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("treesPotBonsai")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {isModalOpen && <ImageModal imageName={modalImageSrc} closeCallback={closeImageModal} />}
        </div>
    );
}

export default AboutPage;