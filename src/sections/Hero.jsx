import { GoArrowRight } from "react-icons/go";
import Button  from "../components/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const SocialIcon = [
 {icon : FaGithub, href : '#'},
 {icon : FaLinkedin, href : '#'},
 {icon : FaTelegram, href : '#'}
];


const Hero = () =>{
    return(
        <section className="min-h-screen flex items-center">
            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/*Left Column*/}
                  <div className="space-y-8">
                    {/*Badge*/}
                    <div className="animate-fade-in animation-delay-100">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-blue-600">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-600/25 "></span>
                            Software Engineer
                        </span>
                    </div>
                    {/*Heading*/}
                    <div className="space-y-4 animate-fade-in animation-delay-200">
                   <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight ">
                     Creating <span className="text-blue-600 glow-text font-digital">digital</span> products with <span className="font-serif italic font-normal">excellence.</span>
                   </h1>
                   <p className="text=lg text-blue-900 font-light max-w-lg animate-fade-in animation-delay-300"> Hi, I'm Alex Carter - a software engineer focused on delivering scalable, high-performance web applications with React, Next.js, TypeScript </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <GoArrowRight />
                        </Button>
                        <AnimatedBorderButton>
                            <MdOutlineFileDownload />
                            Dowload CV
                        </AnimatedBorderButton>
                    </div>
                    {/*Social Links*/}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-200">
                        <span className="text-sm text-blue-600 ">Follow Me</span>
                        {SocialIcon.map((social, index) => 
                      ( <a href={social.href} key={index} className="glass p-2 rounded-full hover:text-blue-600 transition-all duration-300">
                            {<social.icon className='w-5 h-5'/>}
                         </a>)
                        )}
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

