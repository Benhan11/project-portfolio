import { useRef, createRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectTag from 'components/ProjectTag';
import IconWrapper from 'components/IconWrapper';
import Footer from 'components/Footer';
import ScrollButton from 'components/ScrollButton';
import useIsVisible from 'hooks/useIsVisible';

import projectData from 'assets/project_page_data.json';
import icons from 'assets/images/icons';
import images from 'assets/images/images';


/**
 * Builds and populates the project page component with the specified project's 
 * data, gathered from the project data file. The project id parameter is 
 * gathered from the URL with the useParams hook. 
 */
function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>();
    let project = projectData.content[projectId as keyof typeof projectData.content];

    const sectionsRef = useRef<Array<React.RefObject<HTMLDivElement>>>(project.dataSections.map(() => createRef()));
    const isVisibleArray = useIsVisible({ elements: sectionsRef.current });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-mono text-heat bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="mx-auto max-w-screen-xl lg:px-24 md:px-12 sm:px-24 px-6 pb-20">
                <div className="lg:py-20 md:py-12 pt-6 pb-16">
                    <div className="sm:mb-3 mb-8">
                        <Link to="/" className="text-base"><IconWrapper icon={icons['backIcon']} size="sm" /> Home</Link>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-row text-slate-100 text-3xl font-medium space-x-2">
                        <div>{project.title}<span className="whitespace-nowrap">&nbsp;<IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-8 rotate-45 up-4 left-8" /></span></div>
                    </a>
                    <div className="flex flex-wrap max-w-80 pt-3 gap-y-1.5 sm:my-0 mt-2">
                        {project.tags.map(tag => 
                            <ProjectTag key={tag.name} data={tag}/>
                        )}
                    </div>
                </div>
                <div className="space-y-40">
                    {project.dataSections.map((section, index) => 
                        <div key={index} ref={sectionsRef.current[index]} className={`md:flex md:h-[28rem] min-h md:space-x-12 md:space-y-0 space-y-8 sm:transition-opacity sm:ease-in sm:duration-200 ${isVisibleArray[index] ? "sm:opacity-100" : "sm:opacity-30"}`}>
                            <div className="md:w-1/2 flex items-center">
                                <div>
                                    <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text sm:pb-0 pb-2">{section.title}</a><br/>
                                    <span className="text-base">{section.text}</span>
                                </div>
                            </div>
                            <div className="flex flex-row md:w-1/2 w-full">
                                <div className="flex w-full justify-center items-center">
                                    <img src={images[section.imageName]} className="md:max-h-[26rem] max-h-[24rem] lg:max-w-[32rem] md:max-w-[24rem] max-w-full border-2 border-heat-dark rounded shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ScrollButton />
            <Footer isProjectPage={true} />
        </div>
    );
}

export default ProjectPage;