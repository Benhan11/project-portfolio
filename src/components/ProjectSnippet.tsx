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


function ProjectSnippet({ snippet }: SnippetProps) {
    return (
        <Link to={`/project/${snippet.projectId}`} className="flex sm:flex-row flex-row-reverse sm:bg-green-500/15 shadow-xl gap-x-10 sm:px-6 py-4 mb-12 sm:border border-b border-slate-400 sm:rounded-md rounded 
                        transition ease-in-out delay-0 duration-200 hover:translate-y-1 sm:hover:scale-105 sm:hover:bg-green-500/20 hover:shadow-2xl">
            {snippet.imageName !== '' && 
                <div className="flex-none w-32">
                    <div className="flex flex-row justify-center">
                        <img src={images[snippet.imageName]} className="mt-1 h-auto max-w-full max-h-32 rounded border border-slate-600 shadow-lg" />
                    </div>
                </div>
            }
            <div className="space-y-2">
                <div className="flex sm:justify-between space-x-3">
                    <h2 className="text-slate-100">{snippet.title}</h2>
                    <IconWrapper icon={icons['opensNewPageBoxIcon']} size="sm" className="mt-1" />
                </div>
                <p>{snippet.description}</p>
            </div>
        </Link>
    );
}

export default ProjectSnippet;

