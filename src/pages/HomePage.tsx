import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import ProjectSnippet from 'components/ProjectSnippet';
import snippetData from 'assets/project_snippet_data.json';
import iconsRaw from 'assets/images/icons';

type IconsType = {
    [key: string]: IconProp;
}

const icons: IconsType = iconsRaw;


function HomePage() {
    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="lg:flex lg:justify-between">
                    <div className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24 md:py-12 sm:py-6">
                        <div>
                            <h1 className="text-slate-100 text-3xl font-medium">Project portfolio</h1>
                            <h2 className="text-lg">Benjamin Hansson</h2>
                            <p className="max-w-72 pt-16">
                                <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">Welcome!</a><br/>
                                Feel free to explore some of my personal projects.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:py-24">
                        {snippetData.content.map(snippet => 
                            <ProjectSnippet key={snippet.projectId} snippet={snippet}/>
                        )}
                        <p className="text-slate-400 text-sm pt-6 flex justify-center">
                            <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Icons provided by <FontAwesomeIcon icon={icons['fontAwesomeIcon']} color="DodgerBlue" /> Font Awesome <FontAwesomeIcon icon={icons['opensNewPageIcon']} size="sm" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;