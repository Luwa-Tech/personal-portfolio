const Sidebar = () => {
    return (
        <nav className="bg-primary-800 z-[6] flex flex-col  fixed left-0 w-[4.5rem] md:w-[6rem] top-0 bottom-0">
            <span className="text-[1.8rem] text-primary-900 hover:bg-[#d3d3f8] py-2 text-center font-extrabold">L</span>
            
            <a className="sidebar-link" href="#about">About</a>
            <a className="sidebar-link" href="#projects">Projects</a>
            <a className="sidebar-link" href="#experience">Exp.</a>
            <a className="sidebar-link" href="#contact">Contact</a>
        </nav>
    )
}

export default Sidebar