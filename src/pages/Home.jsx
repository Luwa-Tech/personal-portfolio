import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Home = () => {
    return (
        <main className="">
        <section className="flex fixed bg-slate-400 left-[4rem] right-0 top-0 h-[1.2rem] justify-between md:px-8 items-center font-poppins py-8 ">
            <div className="flex items-center gap-4">
                <BsLinkedin className="md:w-[1.2rem] md:h-[1.2rem]"/>
                <BsGithub className="md:w-[1.2rem] md:h-[1.2rem]"/>
                <FaXTwitter className="md:w-[1.2rem] md:h-[1.2rem]"/>
            </div>
            <button className="uppercase bg-slate-900 px-4 py-2 text-white rounded-[.3rem]">my resume</button>
        </section>
        <section className="fixed left-0 w-[4rem] top-0 bottom-0 bg-slate-600">

        </section>

        <section className="md:w-[70%]  md:mx-auto md:mt-[10rem]">
            <div className="md:w-[55%] flex flex-col gap-2">
                <h1 className="font-extrabold font-poppins md:text-[5rem] leading-normal">Hey, I'm Umar</h1>
                <h2 className="md:text-[2rem] leading-normal">I'm a Software Engineer specialized in Web Development</h2>
                <p className="md:text-[1.2rem]">I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
                <button className="bg-slate-700 md:w-[25%] py-2 rounded-[.3rem] text-white">Contact me</button>
            </div>
        </section>
        </main>
    )
}

export default Home