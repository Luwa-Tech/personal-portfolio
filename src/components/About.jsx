import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"

const About = () => {
    return (
        <>
            <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:right-[10px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:right-[-40px] after:w-[57%] md:after:w-[80%] ">About<span className="text-secondary-400">.</span></h2>

            <div className=" border-2 border-slate-800 flex gap-6 flex-col md:flex-row">
                <article className="">
                    <p className="text-[1.2rem]">
                        hey! I'm Bob, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
                        I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?).
                        Outside of work, I still love to paint. Any given Sunday you'll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn!
                        I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect 🔗
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-[1.2rem]">My links</span>
                        <div className="flex items-center gap-4">
                            <BsLinkedin className="md:w-[1.2rem] md:h-[1.2rem]" />
                            <BsGithub className="md:w-[1.2rem] md:h-[1.2rem]" />
                            <FaXTwitter className="md:w-[1.2rem] md:h-[1.2rem]" />
                        </div>
                    </div>
                </article>
                <article className="">
                    <h3>Use at work</h3>
                    <div className="grid grid-rows-2">
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>NodeJS</span>
                        <span>TailwindCSS</span>
                        <span>MongoDB</span>
                        <span>ExpressJS</span>
                    </div>
                </article>
            </div>
        </>
    )
}

export default About