import { RiContactsFill } from "react-icons/ri"
import { MdOutlineWork } from "react-icons/md"
import { GrProjects } from "react-icons/gr"
//import { FcAbout } from "react-icons/fc"
import { IoIosContact } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll'

const Sidebar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    return (
        <nav className="bg-primary-800 z-[6] flex flex-col  fixed left-0 w-[4.5rem] md:w-[6rem] top-0 bottom-0">
            <span className="text-[1.8rem] text-primary-900 hover:bg-[#d3d3f8] py-2 text-center font-extrabold" onClick={scrollToTop}>L</span>

            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="sidebar-link"><IoIosContact  className="text-primary-900 text-[1.6rem]" />About</Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="sidebar-link" ><GrProjects className="text-[1.6rem]" />Projects</Link>
            <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="sidebar-link" ><MdOutlineWork className="text-[1.6rem]" />Exp.</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="sidebar-link" ><RiContactsFill className="text-[1.6rem]" />Contact</Link>

        </nav>
    )
}

export default Sidebar