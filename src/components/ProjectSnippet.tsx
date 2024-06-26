import { Link } from 'react-router-dom';
import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';
import images from 'assets/images/images';


interface SnippetProps {
    snippet: SnippetType;
}

type SnippetType = {
    title: string;
    description: string;
    imageName: string;
    projectId: string;
}


/**
 * Builds and returns a project snippet as specified by the provided snippet data.
 */
function ProjectSnippet({ snippet }: SnippetProps) {
    return (
        <Link to={`/project/${snippet.projectId}`}>
            <div className="sm:flex sm:flex-row sm:bg-neutral-900/[0.5] gap-x-10 sm:px-6 py-4 mb-12 text-slate-200 hover:text-slate-100 sm:border border-b border-stone-300 sm:rounded-md rounded sm:shadow-[0px_1px_2px_2px_rgba(0,0,0,0.3)] shadow-[0px_5px_2px_-2px_rgba(0,0,0,0.2)]
                            transition ease-in-out delay-0 duration-200 hover:translate-y-1 sm:hover:scale-[1.01] sm:hover:shadow-[0px_1px_2px_2px_rgba(0,0,0,0.5)] sm:hover:bg-black/35">
                <div className="sm:flex-none w-32 float-left">
                    <div className="flex flex-row justify-center sm:ps-0 sm:pb-0 pe-4 pb-0">
                        <img src={images[snippet.imageName]} className="sm:mt-1 mt-[0.4rem] h-auto max-w-full max-h-32 rounded border border-stone-300 shadow-xl drop-shadow sm:drop-shadow-light" />
                    </div>
                </div>
                <div className="sm:space-y-2 drop-shadow sm:drop-shadow-light">
                    <div className="sm:flex hidden sm:justify-between">
                        <h2 className="font-bold text-base bg-gradient-to-r from-orange-300 to-yellow-500 inline-block text-transparent bg-clip-text">{snippet.title}</h2>
                        <IconWrapper icon={icons['opensNewPageBoxIcon']} size="sm" className="mt-1" />
                    </div>
                    <h2 className="sm:font-bold text-lg sm:bg-gradient-to-r sm:from-orange-300 sm:to-yellow-500 text-yellow-300 sm:text-transparent bsm:g-clip-text block sm:hidden">{snippet.title}<span className="whitespace-nowrap">&nbsp;<IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-3 left-7" className="text-yellow-500" /></span></h2>
                    <p className="text-base sm:text-slate-200 text-slate-100">{snippet.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProjectSnippet;

