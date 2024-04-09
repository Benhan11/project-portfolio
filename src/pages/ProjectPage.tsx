function ProjectPage() {
    return (
        <div className="min-h-screen font-mono text-slate-400 bg-gradient-to-r from-black via-violet-950 to-black">
            <div className="border mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <div className="border lg:py-24 md:py-12 sm:py-6">
                    <h1 className="text-slate-100 text-3xl font-medium">Youtube playlist saver</h1>
                    <h2 className="text-lg">JavaScript Node.js EJS Bootstrap</h2>
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