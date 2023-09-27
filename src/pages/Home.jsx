import {BsLinkedin, BsGithub} from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Home = () => {
    return (
        <main className="bg-primary-700 h-full">
        <section className="flex fixed left-[4rem] right-0 top-0 h-[1.2rem] justify-between md:px-12 items-center font-poppins pl-10 pr-16 py-8">
            <div className="flex items-center gap-6 md:gap-4">
                <BsLinkedin className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]"/>
                <BsGithub className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]"/>
                <FaXTwitter className="md:w-[1.2rem] w-[1.3rem] h-[1.3rem] md:h-[1.2rem]"/>
            </div>
            <button className=" bg-secondary-400 px-4 py-2 text-white rounded-[.3rem] text-[.9rem] md:text-[1rem]">My resume</button>
        </section>
        <section className="fixed left-0 w-[4.5rem] md:w-[5rem] top-0 bottom-0 bg-primary-800">

        </section>

        <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] py-[10rem]">
            <div className="md:w-[70%] flex flex-col gap-2 ">
                <h1 className="font-extrabold font-poppins md:text-[5rem] leading-normal text-[3.3rem]">Hey, I'm Umar<span className="text-secondary-400">.</span></h1>
                <h2 className="md:text-[2rem] text-[1.7rem] leading-normal">I'm a Software Engineer specialized in Web Development</h2>
                <p className="md:text-[1.2rem] text-[1.2rem]">I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
                <button className="bg-secondary-400 md:w-[20%] w-[50%] py-[.5rem] rounded-[.3rem] text-white font-poppins">Contact me</button>
            </div>
        </section>

        {/* About */}
        <section className="md:w-[70%] pl-[5.5rem] pr-4 md:px-0 mx-auto md:py-[13rem] pb-[10rem]">
            <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative right-line">About<span className="text-secondary-400">.</span></h2>

            <div className="flex flex-col md:flex-row gap-4">
                <article>
                    <p className="md:text-[1.2rem] md:w-[78%]">
                        hey! I'm Bob, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job.
                        I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?).
                        Outside of work, I still love to paint. Any given Sunday you'll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn!
                        I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect 🔗
                    </p>
                    <div>
                        <span>My links</span>
                        <div className="flex items-center gap-4">
                            <BsLinkedin className="md:w-[1.2rem] md:h-[1.2rem]"/>
                            <BsGithub className="md:w-[1.2rem] md:h-[1.2rem]"/>
                            <FaXTwitter className="md:w-[1.2rem] md:h-[1.2rem]"/>
                        </div>
                    </div>
                </article>
                <article>
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
        <section className="md:w-[70%] md:mx-auto md:pb-[13rem]">
        <h2 className="font-poppins md:text-[3.5rem] font-extrabold relative left-line text-right">Projects<span className="text-secondary-400">.</span></h2>

        <section>
            <article>
                <img />
                
            </article>
        </section>
        </section>
        </main>
    )
}

export default Home