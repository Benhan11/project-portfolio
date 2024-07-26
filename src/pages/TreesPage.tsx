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
 * Builds the trees page component.
 */
function TreesPage() {
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
        "treesFirst",
        "treesWeepingWillow",
        "treesDragonBonsai",
        "treesWeepingWillow2",
        "treesSTree",
        "treesMaple",
        "treesBlackCherry",
        "treesOrangeBonsai",
        "treesPurpleDiscs",
        "treesAlien",
        "treesSplitColor",
        "treesPurpleRoots",
        "treesSparseFan",
        "treesPinkBonsai",
        "treesCandleHolder",
        "treesPotBonsaiAlt",
        "treesGoldOak"
    ];


    return (
        <div className="min-h-screen font-mono text-slate-200 bg-fixed bg-gradient-to-tr from-gradient-a via-gradient-b to-gradient-c">
            <div className="mx-auto max-w-screen-xl px-6 pb-1 sm:pb-0 md:px-12 lg:px-24">
                <div className="lg:pt-24 lg:pb-4 md:py-12 pt-6 mb-16">
                    <div className="mb-2">
                        <Link to="/about" className="text-base text-slate-200 drop-shadow"><IconWrapper icon={icons['backIcon']} size="sm" /> About</Link>
                    </div>
                    <div className="text-slate-100 text-3xl font-medium drop-shadow">Wire sculpture trees</div>
                </div>

                <div className="mb-56">
                    <div className="md:flex md:justify-center md:text-center">
                        <p className="ps-2 pt-8 max-w-96">
                            <a className="text-lg text-yellow-300 drop-shadow">
                                My favorites
                            </a><br/>
                            <span className="drop-shadow text-slate-100">
                                The 3rd, 15th, and 17th trees created 
                            </span>
                        </p>
                    </div>
                    <div className="md:flex md:justify-between space-y-0 lg:space-x-12 md:space-x-6">
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["treesDragonBonsai"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("treesDragonBonsai")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["treesPinkBonsai"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("treesPinkBonsai")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row md:w-1/3 pt-10 w-full">
                            <div className="flex w-full justify-center items-center">
                                <img 
                                    src={images["treesPotBonsaiAlt"]}
                                    className="float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                    onClick={() => openImageModal("treesPotBonsaiAlt")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:space-x-14 md:space-y-0 space-y-8 mb-44">
                    <div className="ps-2 lg:w-1/3 md:w-1/2 flex items-center">
                        <div>
                            <a className="text-lg text-yellow-300 drop-shadow sm:pb-0 pb-2">
                                Where it began
                            </a><br/>
                            <span className="text-base drop-shadow">
                                These are the first two trees I made. A tree can take anywhere 
                                from 5 to 20 hours to complete and I've been making them for over a
                                year.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/3 md:w-1/4 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img 
                                src={images["treesFirst"]}
                                className="float-right lg:max-h-[20rem] md:max-h-[13rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("treesFirst")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row lg:w-1/3 md:w-1/4 w-full">
                        <div className="flex w-full justify-center items-center">
                            <img 
                                src={images["treesWeepingWillow"]}
                                className="float-right lg:max-h-[20rem] md:max-h-[13rem] max-h-[20rem] max-w-full border-2 border-stone-300 rounded drop-shadow shadow-xl hover:cursor-pointer"
                                onClick={() => openImageModal("treesWeepingWillow")}
                            />
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
                                Sorted in order of creation
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

export default TreesPage;