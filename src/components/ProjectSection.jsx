import {IoIosArrowForward} from "react-icons/io"
import {GoProjectSymlink} from "react-icons/go"
import { BsGithub } from "react-icons/bs"

import talentBridge from "../assets/images/talentbridge.png"
import exclusive from "../assets/images/exclusive.png"

const Projects = () => {
    return (
        <>
            <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative text-right text-[2rem] after:absolute md:after:top-[48px] after:top-[27px] after:left-[4px] after:block after:h-[.1rem] after:bg-[#d0d0f3] md:after:left-[-5px] after:w-[45%] md:after:w-[70%]">Projects<span className="text-secondary-400">.</span></h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <article className="">
                    <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                        <img src={talentBridge} alt="talentbridge image" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-[1.6rem] md:text-[1.8rem] font-extrabold">Talentbridge</h3>
                        <div className="flex items-center gap-2">
                            <BsGithub className=" w-[1.4rem] h-[1.4rem]" />
                            <GoProjectSymlink className="w-[1.4rem] h-[1.4rem]" />
                        </div>
                    </div>
                    <span className="text-secondary-400 font-bold text-[1.2rem]">React - NodeJS - MongoDB - ExpressJS - TailwindCSS</span>
                    <p className="text-[1.2rem] mt-2">A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users). <span className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]" /></span></p>
                </article>
                <article className="">
                    <div className="pt-12 md:pt-14 px-6 md:px-8 bg-primary-800 rounded-[.5rem]">
                        <img src={exclusive} alt="talentbridge image" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-[1.6rem] md:text-[1.8rem] font-extrabold">Exclusive</h3>
                        <div className="flex items-center gap-2">
                            <BsGithub className=" w-[1.4rem] h-[1.4rem]" />
                            <GoProjectSymlink className="w-[1.4rem] h-[1.4rem]" />
                        </div>
                    </div>
                    <span className="text-secondary-400 font-bold text-[1.2rem]">React - NodeJS - TailwindCSS - Stripe - TypeScript</span>
                    <p className="text-[1.2rem] mt-2">A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users). <span className="text-secondary-400 font-bold hover:underline cursor-pointer">Learn more<IoIosArrowForward className="inline  w-[1rem] h-[1rem]" /></span></p>
                </article>
            </section>
        </>
    )
}

export default Projects