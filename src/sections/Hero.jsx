




const Hero = () =>{
    return(
        <section className="min-h-screen flex items-center">
            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/*Left Column*/}
                  <div>
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-gray-900 text-sm text-blue-600">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-600/25 "></span>
                            Software Engineer
                        </span>
                    </div>
                  </div>
                  {/*Right Column*/}
                  <div></div>
                </div>
            </div>
        </section>
    );
}
export default Hero

