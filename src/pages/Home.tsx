import youtube_snippet_image from 'assets/images/youtube-playlist-saver/snippet.png'

function Home() {
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
                        <div className="flex flex-row bg-green-500/15 shadow-xl gap-x-10 px-6 py-4 mb-12 border border-slate-400 rounded-md">
                            <div className="flex-none w-32">
                                <img src={youtube_snippet_image} className="mt-1 h-auto max-w-full rounded" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-slate-100">Youtube playlist saver</h2>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;