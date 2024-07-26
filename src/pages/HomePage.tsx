import { Link } from 'react-router-dom';
import ProjectSnippet from 'components/ProjectSnippet';
import IconWrapper from 'components/IconWrapper';
import Footer from 'components/Footer';

import snippetData from 'assets/project_snippet_data.json';
import images from 'assets/images/images';
import icons from 'assets/images/icons';


/**
 * Builds the homepage component.
 */
function HomePage() {
    return (
        <div className="min-h-screen font-mono text-slate-200 bg-fixed bg-gradient-to-tr from-gradient-a via-gradient-b to-gradient-c">
            <div className="mx-auto max-w-screen-xl px-6 pb-1 sm:pb-0 md:px-12 lg:px-24">
                <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4">
                    <div className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24 md:py-12 pt-6 pb-12">
                        <div className="flex flex-wrap lg:flex-col flex-row lg:justify-normal justify-between">
                            <div className="sm:pe-0 pe-2 pb-10">
                                <a href="https://github.com/Benhan11/project-portfolio" target="_blank" rel="noopener noreferrer" className="flex flex-row text-slate-100 text-3xl font-medium space-x-1 drop-shadow">
                                    <div>Portfolio</div>
                                    <IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-8 rotate-45 up-2" />
                                </a>
                                <Link to={`/about`} className="text-lg drop-shadow">
                                    <span>Benjamin Hansson</span>
                                    <IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-2 right-3" />
                                </Link>
                                <div className="space-x-2 pt-2 text-slate-300">
                                    <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 drop-shadow"><IconWrapper icon={icons['linkedinIcon']} size="xl" /></a>
                                    <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50 drop-shadow"><IconWrapper icon={icons['githubIcon']} size="lg" /></a>
                                </div>
                            </div>
                            <div className="flex flex-row max-w-52 lg:pt-10">
                                <div className="flex w-full sm:max-w-none max-w-20 min-w-[7rem] justify-center">
                                    <Link to={`/about`}>
                                        <img 
                                            src={images["photo"]}
                                            className="rounded-full float-right lg:max-h-[20rem] md:max-h-[15rem] max-h-[20rem] max-w-full border-2 border-stone-300 drop-shadow shadow-xl hover:cursor-pointer"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <p className="max-w-80 sm:pt-8 pt-16">
                            <a className="text-lg text-yellow-300 drop-shadow">
                                Hi, I'm Benjamin!
                            </a><br/>
                            <span className="drop-shadow text-slate-100">
                                I have a passion for programming and other creative processes. 
                                <br />
                                Feel free to explore some of my personal projects and read my
                                <Link to={`/about`} className="text-sky-300 pe-0.5 animate-customPulse"> About<IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-4" /></Link>
                                page where I show off some wire sculpture trees.
                            </span>
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pt-24">
                        {snippetData.content.map(snippet => 
                            <ProjectSnippet key={snippet.projectId} snippet={snippet}/>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;