import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import {IoIosArrowForward} from "react-icons/io"
import {GoProjectSymlink} from "react-icons/go"

import talentBridge from "../assets/images/talentbridge.png"
import exclusive from "../assets/images/exclusive.png"

const Home = () => {
    return (
        <main className="bg-primary-700 h-full">
            <section className="flex fixed left-[4rem] right-0 top-0 h-[1.2rem] justify-between md:px-12 items-center font-poppins pl-8 pr-4 py-8">
                <div className="flex items-center gap-6 md:gap-4">
                    <BsLinkedin className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]" />
                    <BsGithub className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]" />
                    <FaXTwitter className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]" />
                </div>
                <button className=" bg-secondary-400 px-4 py-2 text-white rounded-[.3rem] text-[.9rem] md:text-[1rem]">My resume</button>
            </section>

            {/* Sidebar */}
            <section className="fixed left-0 w-[4.5rem] md:w-[5rem] top-0 bottom-0 bg-primary-800">

            </section>


            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] py-[10rem]">
                <div className="md:w-[70%] flex flex-col gap-2 ">
                    <h1 className="font-extrabold font-poppins md:text-[5rem] leading-normal text-[3.3rem]">Hey, I'm Umar<span className="text-secondary-400">.</span></h1>
                    <h2 className="md:text-[2rem] text-[1.7rem] leading-normal">I'm a Software Engineer specialized in Web Development</h2>
                    <p className="text-[1.2rem]">I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
                    <button className="bg-secondary-400 md:w-[20%] w-[50%] py-[.5rem] rounded-[.3rem] text-white font-poppins">Contact me</button>
                </div>
            </section>



            {/* About */}
            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
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

            </section>



            {/* Project */}
            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-right text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:left-[4px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:left-[-5px] after:w-[45%] md:after:w-[70%]">Projects<span className="text-secondary-400">.</span></h2>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <article className="">
                        <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                            <img src={talentBridge} alt="talentbridge image"/>
                            </div>
                        <div className="flex items-center justify-between mt-4">
                            <h3 className="text-[1.6rem] md:text-[1.8rem] font-extrabold">Talentbridge</h3>
                            <div className="flex items-center gap-2">
                                <BsGithub className=" w-[1.4rem] h-[1.4rem]"/>
                                <GoProjectSymlink className="w-[1.4rem] h-[1.4rem]"/>
                            </div>
                        </div>
                        <span className="text-secondary-400 font-bold text-[1.2rem]">React - NodeJS - MongoDB - ExpressJS - TailwindCSS</span>
                        <p className="text-[1.2rem] mt-2">A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users). <span className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]"/></span></p>
                    </article>
                    <article className="">
                        <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                            <img src={exclusive} alt="talentbridge image"/>
                            </div>
                        <div className="flex items-center justify-between mt-4">
                            <h3 className="text-[1.6rem] md:text-[1.8rem] font-extrabold">Exclusive</h3>
                            <div className="flex items-center gap-2">
                                <BsGithub className=" w-[1.4rem] h-[1.4rem]"/>
                                <GoProjectSymlink className="w-[1.4rem] h-[1.4rem]"/>
                            </div>
                        </div>
                        <span className="text-secondary-400 font-bold text-[1.2rem]">React - NodeJS - TailwindCSS - Stripe - TypeScript</span>
                        <p className="text-[1.2rem] mt-2">A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users). <span className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]"/></span></p>
                    </article>
                </section>
            </section>



            {/* Experience */}
            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:right-[10px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:right-[-40px] after:w-[38%] md:after:w-[65%] ">Experience<span className="text-secondary-400">.</span></h2>

                <section className="mt-4">
                    <article className="border-b-[1.5px] border-[#d0d0f3] py-8">
                        <div className="text-[1.2rem] flex items-center justify-between">
                            <h3 className="font-bold text-[1.3rem]">Google</h3>
                            <span>2022 - Present</span>
                        </div>
                        <div className="text-[1.2rem] flex items-center justify-between my-2">
                            <h4 className="font-bold text-secondary-400">Software Engineer</h4>
                            <span>San Francisco</span>
                        </div>
                        <p className="text-[1.2rem] mb-4">I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.</p>

                        <div className="text-[1.2rem] flex flex-wrap gap-4">
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Angular</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Python</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">GCP</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Git</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">GitHub</span>
                        </div>
                    </article>

                    <article className="border-b-[1.5px] border-[#d0d0f3] py-8">
                        <div className="text-[1.2rem] flex items-center justify-between">
                            <h3 className="font-bold text-[1.3rem]">Google</h3>
                            <span>2022 - Present</span>
                        </div>
                        <div className="text-[1.2rem] flex items-center justify-between my-2">
                            <h4 className="font-bold text-secondary-400">Software Engineer</h4>
                            <span>San Francisco</span>
                        </div>
                        <p className="text-[1.2rem] mb-4">I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.</p>

                        <div className="text-[1.2rem] flex flex-wrap gap-4">
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Angular</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Python</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">GCP</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Git</span>
                            <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">GitHub</span>
                        </div>
                    </article>
                </section>
            </section>



            {/* Contact */}
            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <h2 className="font-extrabold font-poppins md:text-[6rem] leading-normal text-center text-[3.3rem]">Contact<span className="text-secondary-400">.</span></h2>
                <p className="text-center text-[1.2rem] md:w-[60%] md:mx-auto">Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed.</p>
                <h4></h4>
            </section> 
        </main>
    )
}

export default Home