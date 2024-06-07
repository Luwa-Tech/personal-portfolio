import { IoIosArrowForward } from "react-icons/io"
import { GoProjectSymlink } from "react-icons/go"
import { BsGithub } from "react-icons/bs"

import talentBridge from "../assets/images/talentbridge.png"
import exclusive from "../assets/images/exclusive.png"

const Projects = () => {
    return (
        <>
            <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-right text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:left-[4px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:left-[-5px] after:w-[45%] md:after:w-[70%]">Projects<span className="text-secondary-400">.</span></h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <article>
                    <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                        <img src={exclusive} alt="exclusive website home page" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-[1.4rem] md:text-[1.5rem] font-extrabold">Exclusive</h3>
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/Luwa-Tech/Exclusive-ecommerce-app">
                                <BsGithub className=" w-[1.4rem] h-[1.4rem] hover:text-secondary-400" />
                                </a>

                            <a href="https://exclusive-ecommerce-app.netlify.app/">
                                <GoProjectSymlink className="w-[1.4rem] h-[1.4rem] hover:text-secondary-400" />
                            </a>
                        </div>
                    </div>
                    <span className="text-secondary-400 font-bold text-[1rem]">React - NodeJS - TailwindCSS - Stripe - TypeScript - Auth0</span>
                    <p className="text-[1.2rem] mt-2">Exclusive is an e-commerce web application with a seamless user experience, featuring - robust search functionality...<a href="https://github.com/Luwa-Tech/Exclusive-ecommerce-app" className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]" /></a></p>
                </article>

                <article>
                    <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                        <img src={talentBridge} alt="talentbridge website home page" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-[1.4rem] md:text-[1.5rem] font-extrabold">Talentbridge (In progress)</h3>
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/Luwa-Tech/TalentBridge">
                                <BsGithub className=" w-[1.4rem] h-[1.4rem] hover:text-secondary-400" />
                            </a>

                            <a href="https://talentbridge-app.netlify.app/">
                                <GoProjectSymlink className="w-[1.4rem] h-[1.4rem] hover:text-secondary-400" />
                            </a>
                        </div>
                    </div>
                    <span className="text-secondary-400 font-bold text-[1rem]">React - NodeJS - MongoDB - ExpressJS - TailwindCSS</span>
                    <p className="text-[1.2rem] mt-2">A job search app that bridges the gap between developers and employers, revolutionizing the way talent connects with opportunities..<a href="https://talentbridge-app.netlify.app/" className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]" /></a></p>
                </article>

            </section>
        </>
    )
}

export default Projects