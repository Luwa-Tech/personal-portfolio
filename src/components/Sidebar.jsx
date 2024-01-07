import { RiContactsFill } from "react-icons/ri"
import { MdOutlineWork } from "react-icons/md"
import { GrProjects } from "react-icons/gr"
import { FcAbout } from "react-icons/fc"

const Sidebar = () => {
    return (
        <nav className="bg-primary-800 z-[6] flex flex-col  fixed left-0 w-[4.5rem] md:w-[6rem] top-0 bottom-0">
            <span className="text-[1.8rem] text-primary-900 hover:bg-[#d3d3f8] py-2 text-center font-extrabold">L</span>
            
            <a className="sidebar-link" href="#about"><FcAbout className="text-primary-900 text-[1.6rem]" />About</a>
            <a className="sidebar-link" href="#projects"><GrProjects className="text-[1.6rem]"/>Projects</a>
            <a className="sidebar-link" href="#experience"><MdOutlineWork className="text-[1.6rem]"/>Exp.</a>
            <a className="sidebar-link" href="#contact"><RiContactsFill className="text-[1.6rem]" />Contact</a>
            
        </nav>
    )
}

export default Sidebar