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
                <div className="flex flex-wrap flex-row sm:justify-normal justify-between lg:pt-24 lg:pb-4 md:py-12 pt-6 mb-4">
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
                
                <div className="md:flex md:h-[28rem] min-h md:space-x-12 md:space-y-0 space-y-8 mb-24">
                    <div className="ps-2 md:w-1/2 flex items-center">
                        <div>
                            <a className="text-lg text-yellow-300 drop-shadow sm:pb-0 pb-2">
                                Who am I?
                            </a><br/>
                            <span className="text-base drop-shadow">
                                I'm a passionate programmer from Sweden. I enjoy creativity in all its forms, 
                                from coding, to grand-strategy and programming/automation games, as well as the
                                construction of wire sculpture trees. Admittedly, this page is a wire tree showcase. 
                                Try clicking the pictures!
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row md:w-1/2 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img 
                                src={images["aboutPotBonsai"]}
                                className="md:max-h-[26rem] max-h-[24rem] lg:max-w-[32rem] md:max-w-[24rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutPotBonsai")}
                            />
                        </div>
                    </div>
                </div>

                <div className="md:flex md:h-[28rem] min-h md:space-x-14 md:space-y-0 space-y-8 mb-24">
                    <div className="ps-2 lg:w-1/3 md:w-1/2 flex items-center">
                        <div>
                            <a className="text-lg text-yellow-300 drop-shadow sm:pb-0 pb-2">
                                Trees
                            </a><br/>
                            <span className="text-base drop-shadow">
                                These trees take anywhere from 5 to 20 hours to complete and I've been making them
                                for over a year at the time of writing. These are the two first two trees I made.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/3 md:w-1/4 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img 
                                src={images["aboutFirstTree"]}
                                className="float-right lg:max-h-[20rem] md:max-h-[13rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutFirstTree")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/3 md:w-1/4 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img 
                                src={images["aboutWeepingWillow"]}
                                className="float-right lg:max-h-[20rem] md:max-h-[13rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("aboutWeepingWillow")}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-36">
                    <div className="md:flex md:justify-center md:text-center">
                        <p className="ps-2 pt-8 max-w-96">
                            <a className="text-lg text-yellow-300 drop-shadow">
                                My favorites
                            </a><br/>
                            <span className="drop-shadow text-slate-100">
                                While the first of the three was actually only the third tree I made, it remains one 
                                of my favorites.
                            </span>
                        </p>
                    </div>
                    <div className="md:flex md:justify-between space-y-0 lg:space-x-12 md:space-x-6">
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["aboutDragonBonsai"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("aboutDragonBonsai")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["aboutPinkBonsai"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("aboutPinkBonsai")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["aboutPotBonsaiAlt"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("aboutPotBonsaiAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-36">
                    <div className="flex justify-center text-center pb-10">
                        <p className="pt-8 max-w-96">
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