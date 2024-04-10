import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';


function ProjectPage() {
    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="border mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="border lg:py-24 md:py-12 sm:py-6">
                    <h1 className="text-slate-100 text-3xl font-medium">Youtube playlist saver</h1>
                    <div className="flex flex-wrap max-w-80 pt-1 gap-y-1">
                        <span className="flex-none border rounded-full border-yellow-500 bg-yellow-200/5 text-yellow-500 px-2 py-0.5 me-1">
                            <FontAwesomeIcon icon={faJs} /> JavaScript</span>
                        <span className="flex-none border rounded-full border-lime-500 bg-lime-200/5 text-lime-500 px-2 py-0.5 me-1">
                            <FontAwesomeIcon icon={faNodeJs} /> Node.js</span>
                        <span className="flex-none border rounded-full border-sky-500 bg-sky-200/5 text-sky-500 px-2 py-0.5 me-1">
                            <FontAwesomeIcon icon={faBootstrap} /> Bootstrap</span>
                        <span className="flex-none border rounded-full border-red-500 bg-red-200/5 text-red-500 px-2 py-0.5 me-1">
                            <FontAwesomeIcon icon={faJs} /> EJS</span>
                    </div>
                </div>
                <div className="border lg:flex lg:justify-between">
                    <div className="border lg:w-1/2 lg:py-24 md:py-12 sm:py-6">
                        <div className="">
                            <a className="text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">Sub-title</a><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:py-24">
                        IMAGE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;