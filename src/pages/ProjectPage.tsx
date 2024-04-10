import projectData from 'assets/project_page_data.json';
import TechnologyTag from 'components/TechnologyTag';

import imagesRaw from 'assets/images/images';


type ImagesType = {
    [key: string]: string;
}

const images: ImagesType = imagesRaw;


function ProjectPage() {
    let tempDataProp = projectData.content[0];

    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="lg:py-24 md:py-12 sm:py-6">
                    <h1 className="text-slate-100 text-3xl font-medium">Youtube playlist saver</h1>
                    <div className="flex flex-wrap max-w-80 pt-3 gap-y-1.5">
                        {tempDataProp.tags.map(tag => 
                            <TechnologyTag data={tag}/>
                        )}
                    </div>
                </div>
                {tempDataProp.dataSections.map(section => 
                    <div className="lg:flex lg:justify-between">
                        <div className="lg:w-1/2 lg:py-24 md:py-12 sm:py-6">
                            <div className="">
                                <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">{section.title}</a><br/>
                                {section.text}
                            </div>
                        </div>
                        <div className="flex lg:w-1/2 justify-end">
                            <img src={images[section.imageName]} className="shadow-lg max-w-full max-h-96 rounded" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectPage;