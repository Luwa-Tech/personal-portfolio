//import { NavLink } from "react-router-dom"

import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

import Sidebar from "../components/Sidebar"
import About from "../components/About"
import Projects from "../components/ProjectSection"
import Experience from "../components/Experience"

const Home = () => {
    return (
        <main className="bg-primary-700 h-full">
            <section className="flex fixed left-[4rem] right-0 top-0 h-[1.2rem] justify-between z-[5] md:px-12 items-center font-poppins pl-8 pr-4 py-8 bg-[#e8e8fc] bg-opacity-50">
                <div className="flex items-center gap-6 md:gap-4">
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
                <button className=" bg-secondary-400 px-4 py-2 text-white rounded-[.3rem] text-[.9rem] md:text-[1rem] hover:bg-opacity-50 hover:border-secondary-400 transition-all ease-in-out">My resume</button>
            </section>

            {/* Sidebar */}
            <Sidebar />

            <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] py-[10rem] text-primary-900">
                <div className="md:w-[70%] flex flex-col gap-2 ">
                    <h1 className="font-extrabold font-poppins md:text-[5rem] leading-normal text-[3.3rem]">Hey, I'm Umar<span className="text-secondary-400">.</span></h1>
                    <h2 className="md:text-[2rem] text-[1.7rem] leading-normal">I'm a Software Engineer</h2>
                    <p className="text-[1.2rem]">Please take a look around, see what I've been up to recently, and let's see what we can achieve together.</p>

                    <button className="bg-secondary-400 md:w-[20%] w-[50%] py-[.5rem] rounded-[.3rem] text-white font-poppins hover:bg-opacity-50 hover:border-secondary-400 transition-all ease-in-out">Contact me</button>
                </div>
            </section>

            {/* About */}
            <section id="about" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto text-primary-900 md:py-[5rem] pb-[6rem]">
                <About />
            </section>

            {/* Project */}
            <section id="projects" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 text-primary-900 mx-auto md:py-[5rem] pb-[6rem]">
                <Projects />
            </section>

            {/* Experience */}
            <section id="experience" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[5rem] text-primary-900 pb-[6rem]">
                <Experience />
            </section>

            {/* Contact */}
            <section id="contact" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:pt-[5rem] md:pb-[16rem] pb-[8rem] text-primary-900">
                <h2 className="font-extrabold font-poppins md:text-[6rem] leading-normal text-center text-[3.3rem]">Contact<span className="text-secondary-400">.</span></h2>
                <p className="text-center text-[1.2rem] md:w-[60%] md:mx-auto">Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/luwa-dev" className="text-secondary-400" >LinkedIn</a> or <a href="https://twitter.com/Luwa-Dev" className="text-secondary-400">Twitter</a> if that's more your speed.</p>

                <p className="text-center text-[1.4rem] md:w-[60%] md:mx-auto font-bold cursor-pointer hover:text-secondary-400 flex items-center justify-center mt-4 gap-2"><IoMdMail className="mt-[.3rem] text-[1.6rem]"/>faruqluwa@gmail.com</p>
                <h4></h4>
            </section> 
        </main>
    )
}

export default Home