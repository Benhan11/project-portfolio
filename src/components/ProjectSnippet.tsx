import imagesRaw from 'assets/images/images';


type ImagesType = {
    [key: string]: string;
}

const images: ImagesType = imagesRaw;


interface SnippetProps {
    snippet: SnippetType;
}

type SnippetType = {
    title: string;
    description: string;
    imageName: string;
}


function ProjectSnippet({ snippet }: SnippetProps) {
    return (
        <div className="flex flex-row bg-green-500/15 shadow-xl gap-x-10 px-6 py-4 mb-12 border border-slate-400 rounded-md">
            <div className="flex-none w-32">
                {snippet.imageName !== '' && <img src={images[snippet.imageName]} className="mt-1 h-auto max-w-full rounded" />}
            </div>
            <div className="space-y-2">
                <h2 className="text-slate-100">{snippet.title}</h2>
                <p>{snippet.description}</p>
            </div>
        </div>
    );
}

export default ProjectSnippet;

