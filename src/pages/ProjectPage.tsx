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
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="lg:py-20 md:py-12 sm:py-6">
                    <div className="mb-3">
                        <Link to="/"><IconWrapper icon={icons['backIcon']} size="sm" /> Home</Link>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-row text-slate-100 text-3xl font-medium space-x-2">
                        <div>{project.title}</div>
                        <IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-8 rotate-45 up-2" />
                    </a>
                    <div className="flex flex-wrap max-w-80 pt-3 gap-y-1.5">
                        {project.tags.map(tag => 
                            <ProjectTag key={tag.name} data={tag}/>
                        )}
                    </div>
                </div>
                {project.dataSections.map((section, index) => 
                    <div key={index} ref={sectionsRef.current[index]} className={`lg:flex lg:justify-between pb-36 transition-opacity ease-in duration-200 ${isVisibleArray[index] ? "opacity-100" : "opacity-30"}`}>
                        <div className="lg:w-1/2 flex items-center">
                            <div>
                                <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">{section.title}</a><br/>
                                {section.text}
                            </div>
                        </div>
                        <div className="flex flex-row lg:w-1/2 pt-10 justify-end items-center">
                            <img src={images[section.imageName]} className="shadow-lg max-w-full max-h-96 rounded" />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;