import { NavLink } from "react-router-dom"

import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"

import Sidebar from "../components/Sidebar"
import About from "../components/About"
import Projects from "../components/ProjectSection"
import Experience from "../components/Experience"

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
                <Sidebar />
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
            <section id="about" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <About />
            </section>

            {/* Project */}
            <section id="projects" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <Projects />
            </section>

            {/* Experience */}
            <section id="experience" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <Experience />
            </section>

            {/* Contact */}
            <section id="contact" className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[8rem]">
                <h2 className="font-extrabold font-poppins md:text-[6rem] leading-normal text-center text-[3.3rem]">Contact<span className="text-secondary-400">.</span></h2>
                <p className="text-center text-[1.2rem] md:w-[60%] md:mx-auto">Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed.</p>
                <h4></h4>
            </section> 
        </main>
    )
}

export default Home