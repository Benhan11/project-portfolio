import { useRef, createRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectTag from 'components/ProjectTag';
import IconWrapper from 'components/IconWrapper';
import Footer from 'components/Footer';
import useIsVisible from 'hooks/useIsVisible';

import projectData from 'assets/project_page_data.json';
import icons from 'assets/images/icons';
import images from 'assets/images/images';


function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>();
    let project = projectData.content[projectId as keyof typeof projectData.content];

    const sectionsRef = useRef<Array<React.RefObject<HTMLDivElement>>>(project.dataSections.map(() => createRef()));
    const isVisibleArray = useIsVisible({ elements: sectionsRef.current });

    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="mx-auto max-w-screen-xl lg:px-24 md:px-12 sm:px-24 px-6">
                <div className="lg:py-20 md:py-12 pt-6 pb-16">
                    <div className="sm:mb-3 mb-8">
                        <Link to="/"><IconWrapper icon={icons['backIcon']} size="sm" /> Home</Link>
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
                {project.dataSections.map((section, index) => 
                    <div key={index} ref={sectionsRef.current[index]} className={`md:flex md:justify-between md:space-x-12 pb-36 sm:transition-opacity sm:ease-in sm:duration-200 ${isVisibleArray[index] ? "sm:opacity-100" : "sm:opacity-30"}`}>
                        <div className="md:w-1/2 flex items-center">
                            <div>
                                <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text sm:pb-0 pb-2">{section.title}</a><br/>
                                {section.text}
                            </div>
                        </div>
                        <div className="flex flex-row md:w-1/2 w-full pt-10">
                            <div className="flex w-full md:justify-end justify-center items-center">
                                <img src={images[section.imageName]} className="max-w-full max-h-96 border-2 border-slate-600 rounded shadow-2xl" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;