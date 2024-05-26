import ProjectSnippet from 'components/ProjectSnippet';
import IconWrapper from 'components/IconWrapper';
import Footer from 'components/Footer';

import snippetData from 'assets/project_snippet_data.json';
import icons from 'assets/images/icons';


function HomePage() {
    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4">
                    <div className="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24 md:py-12 pt-6 pb-12">
                        <div>
                            <a href="https://github.com/Benhan11/project-portfolio" target="_blank" rel="noopener noreferrer" className="flex flex-row text-slate-100 text-3xl font-medium space-x-1">
                                <div>Project portfolio</div>
                                <IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-8 rotate-45 up-2" />
                            </a>
                            <h2 className="text-lg">Benjamin Hansson</h2>
                            <div className="space-x-2 pt-2">
                                <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><IconWrapper icon={icons['linkedinIcon']} size="xl" /></a>
                                <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer" className="hover:text-white"><IconWrapper icon={icons['githubIcon']} size="lg" /></a>
                            </div>
                            <p className="max-w-72 pt-16">
                                <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">Welcome!</a><br/>
                                Feel free to explore some of my personal projects.
                            </p>
                        </div>
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