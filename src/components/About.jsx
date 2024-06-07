import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaCode } from "react-icons/fa6"

const About = () => {
    return (
        <>
            <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:right-[10px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:right-[-40px] after:w-[57%] md:after:w-[80%] ">About<span className="text-secondary-400">.</span></h2>

            <div className="flex flex-col gap-6 md:flex-row justify-between">
                <section className="md:w-[65%] mb-8 md:mb-0">
                    <p className="text-[1.2rem]">
                    I'm an affiliate marketer turned full-stack engineer, working primarily with React and Nodejs, but love to learn and build with whatever tools are right for the job. I've a thing for open source projects, user-centric solutions, and continuous learning. I'm actively looking for new roles where I can innovate, solve problems, sleep, and repeat. let's connect
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-[1.2rem] text-secondary-400 flex items-center gap-2 justify-center">My links <FaArrowRightLong className="mt-[.3rem]"/></span>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/luwa-dev">
                                <BsLinkedin className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem] hover:text-secondary-400" />
                            </a>
                            <a href="https://github.com/Luwa-Tech">
                                <BsGithub className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem] hover:text-secondary-400" />
                            </a>
                            <a href="https://twitter.com/Luwa-Dev">
                                <FaXTwitter className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem] hover:text-secondary-400" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="md:w-[35%] ">
                    <h3 className="text-[1.4rem] bold flex items-center gap-[.7rem]  font-bold text-primary-900 mb-2 "><FaCode className="text-secondary-400"/>Tech Stacks</h3>
                    <div className="skills text-[1.2rem]">
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">JavaScript</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">TypeScript</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">React</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Tailwind</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Postgres</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">NodeJS</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">MongoDB</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">ExpressJS</span>
                        <span className="px-1 py-1 bg-primary-800 rounded-[.8rem]">Docker</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About