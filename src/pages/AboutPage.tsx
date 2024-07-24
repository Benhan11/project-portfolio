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


    const carouselTrees: Array<string> = [
        "aboutFirstTree",
        "aboutWeepingWillow",
        "aboutDragonBonsai",
        "aboutWeepingWillow2",
        "aboutSTree",
        "aboutMapleTree",
        "aboutBlackCherry",
        "aboutOrangeBonsai",
        "aboutPurpleDiscs",
        "aboutAlienTree",
        "aboutSplitColorTree",
        "aboutPurpleRootsTree",
        "aboutSparseFanTree",
        "aboutPinkBonsai",
        "aboutCandleHolderTree",
        "aboutPotBonsaiAlt",
        "aboutGoldOak"
    ];


    return (
        <div className="min-h-screen font-mono text-slate-200 bg-fixed bg-gradient-to-tr from-gradient-a via-gradient-b to-gradient-c">
            <div className="mx-auto max-w-screen-xl px-6 pb-1 sm:pb-0 md:px-12 lg:px-24">
                <div className="flex flex-row lg:pt-24 lg:pb-4 md:py-12 pt-6 pb-12 space-x-8">
                    <img src={images["hueLights"]} className="max-h-40 max-w-48 border-2 border-stone-300 rounded drop-shadow shadow-xl" />
                    <div className="flex flex-col pt-3">
                        <div className="sm:mb-2 mb-8">
                            <Link to="/" className="text-base text-slate-200 drop-shadow"><IconWrapper icon={icons['backIcon']} size="sm" /> Home</Link>
                        </div>
                        <div className="text-slate-100 text-3xl font-medium drop-shadow">Benjamin Hansson</div>
                        <div className="space-x-2 pt-2 text-slate-300">
                            <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 drop-shadow"><IconWrapper icon={icons['linkedinIcon']} size="xl" /></a>
                            <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50 drop-shadow"><IconWrapper icon={icons['githubIcon']} size="lg" /></a>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 space-x-12">
                    <div className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen md:w-1/2 lg:py-24 md:py-12 pt-6 pb-12">
                        <div>
                            <p className="pt-16">
                                <a className="text-lg text-yellow-300 drop-shadow">
                                    Who am I?
                                </a><br/>
                                <span className="drop-shadow text-slate-100">
                                    I'm a passionate programmer from Sweden. I enjoy creativity in all its forms, 
                                    from coding, to grand-strategy and programming/automation games, as well as the
                                    construction of wire sculpture trees. Admittedly, this page is a wire tree showcase. 
                                    Try clicking the pictures!
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:pt-10">
                        <img 
                            src={images["aboutPotBonsai"]} 
                            className="md:float-right md:max-h-[26rem] max-h-[24rem] lg:max-w-[32rem] md:max-w-[24rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                            onClick={() => openImageModal("aboutPotBonsai")}
                        />
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 space-x-12 pt-32">
                    <div className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen md:w-1/3 lg:py-24 md:py-12 pt-6 pb-12">
                        <div>
                            <p className="pt-8">
                                <a className="text-lg text-yellow-300 drop-shadow">
                                    Trees
                                </a><br/>
                                <span className="drop-shadow text-slate-100">
                                    These trees take anywhere from 5 to 20 hours to complete and I've been making them
                                    for over a year at the time of writing. These are the two first two trees I made.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 lg:pt-10">
                        <img 
                            src={images["aboutFirstTree"]}
                            className="md:float-right max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                            onClick={() => openImageModal("aboutFirstTree")}
                        />
                    </div>
                    <div className="md:w-1/3 lg:pt-10">
                        <img 
                            src={images["aboutWeepingWillow"]}
                            className="md:float-right max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                            onClick={() => openImageModal("aboutWeepingWillow")}
                        />
                    </div>
                </div>
                <div>
                    <div className="lg:flex lg:justify-center lg:text-center pt-32">
                        <p className="pt-8 max-w-96">
                            <a className="text-lg text-yellow-300 drop-shadow">
                                My favorites
                            </a><br/>
                            <span className="drop-shadow text-slate-100">
                                While the first of the three was actually only the third tree I made, it remains one 
                                of my favorites.
                            </span>
                        </p>
                    </div>
                    <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 space-x-12">
                        <div className="md:w-1/3 lg:pt-10">
                            <img 
                                src={images["aboutDragonBonsai"]}
                                className="md:float-right max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutDragonBonsai")}
                            />
                        </div>
                        <div className="md:w-1/3 lg:pt-10">
                            <img 
                                src={images["aboutPinkBonsai"]}
                                className="md:float-right max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutPinkBonsai")}
                            />
                        </div>
                        <div className="md:w-1/3 lg:pt-10">
                            <img 
                                src={images["aboutPotBonsaiAlt"]}
                                className="md:float-right max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutPotBonsaiAlt")}
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-32">
                    <div className="lg:flex lg:justify-center lg:text-center pt-32 pb-10">
                        <p className="pt-8">
                            <a className="text-lg text-yellow-300 drop-shadow">
                                All trees
                            </a><br/>
                            <span className="drop-shadow text-slate-100">
                                (In order of creation)
                            </span>
                        </p>
                    </div>
                    <ImageCarousel imageNames={carouselTrees} />
                </div>
            </div>
            <ScrollIndicator />
            <ScrollButton />
            <Footer />
            {isModalOpen && <ImageModal imageName={modalImageSrc} closeCallback={closeImageModal} />}
        </div>
    );
}

export default AboutPage;