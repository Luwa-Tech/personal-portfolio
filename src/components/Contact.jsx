import { IoMdMail } from "react-icons/io"

const Contact = () => {
    return (
        <>
            <h2 className="font-extrabold font-poppins md:text-[6rem] leading-normal text-center text-[3.3rem]">Contact<span className="text-secondary-400">.</span></h2>
            <p className="text-center text-[1.2rem] md:w-[60%] md:mx-auto">Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/luwa-dev" className="text-secondary-400" >LinkedIn</a> or <a href="https://twitter.com/Luwa-Dev" className="text-secondary-400">Twitter</a> if that's more your speed.</p>

            <p className="text-center text-[1.4rem] md:w-[60%] md:mx-auto font-bold cursor-pointer hover:text-secondary-400 flex items-center justify-center mt-4 gap-2"><IoMdMail className="mt-[.3rem] text-[1.6rem]" />faruqluwa@gmail.com</p>
            <h4></h4>
        </>
    )
}

export default Contact