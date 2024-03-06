import './SideMenu.css';

const SideMenu = ({isSide}) => {
    return(
        <div className={isSide ? "SideMenu show" : "SideMenu"}>
            {/* <p className='SideMenu_back'></p> */}
            <div className="side_inner">
                <div className='side_content'>
                    <p>
                        <a href="#Home">Home</a>
                    </p>
                    <p>
                        <a href="#About">About</a>
                    </p>
                    <p>
                        <a href="#Skill">Skill</a>
                    </p>
                    <p>
                        <a href="#Project">Project</a>
                    </p>
                    <p>
                        <a href="#Contact">Contact</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SideMenu;