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
        <div className="flex flex-row bg-green-500/15 shadow-xl gap-x-10 px-6 py-4 mb-12 border border-slate-400 rounded-md 
                        transition ease-in-out delay-0 duration-200 hover:translate-y-1 hover:scale-105 hover:bg-green-500/20 hover:shadow-2xl">
            {snippet.imageName !== '' && 
                <div className="flex-none w-32">
                    <div className="flex flex-row justify-center">
                        <img src={images[snippet.imageName]} className="mt-1 h-auto max-w-full max-h-32 rounded" />
                    </div>
                </div>
            }
            <div className="space-y-2">
                <h2 className="text-slate-100">{snippet.title}</h2>
                <p>{snippet.description}</p>
            </div>
        </div>
    );
}

export default ProjectSnippet;

