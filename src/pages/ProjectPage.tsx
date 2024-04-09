function ProjectPage() {
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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;