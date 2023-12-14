import {NavLink} from "react-router-dom"

const Sidebar = () => {
    return (
        <nav className="px-2 pt-[.65rem] flex flex-col items-center gap-[4rem]">
            <span className="text-[1.8rem] font-extrabold">L</span>
            <ul className="">
                <li className="nav-upward border-2 border-slate-700 w-[100%] mb-[4rem]"><NavLink to="about" className="text-[1.4rem]">About</NavLink></li>
                <li className="nav-upward mb-[4rem]"><NavLink to="projects" className="text-[1.4rem]">Projects</NavLink></li>
                <li className="nav-upward mb-[4rem] border-2 border-slate-700"><NavLink to="experience" className="text-[1.4rem]">Exp.</NavLink></li>
                <li className="nav-upward"><NavLink to="contact" className="text-[1.4rem]">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar