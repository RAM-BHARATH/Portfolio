// import '../styles/navbar.css'

import { useState } from "react";

export function Navbar() {

    const [open, setOpen] = useState(false);

    function toggleNav(){
        setOpen(!open);
    }
    return(
        // <nav id="hamnav">
        //     <label htmlFor="hamburger">&#9776;</label>
        //     <input type="checkbox" id="hamburger"/>
            
        //     <div id="hamitems" className='hamitems'>
        //         <a href="#main">Home</a>
        //         {/* <a href="#about">About</a> */}
        //         <a href="#works">Works</a>
        //         <a href="#skills">Skills</a>
        //         <a href="#contacts">Contact</a>
        //         {/* <a href="#contact">
        //             <img src="../images/moon.svg" alt="Light mode" id="mode"/>
        //         </a> */}
        //         {/* <a href="#mode" id="mode">Dark</a> */}
        //     </div>
        // </nav>
        <div className="left-nav">
            <ul>
                <li className="nav-item" onClick={toggleNav}>
                    <img src={process.env.PUBLIC_URL + '/images/assets/hamburger.svg'}/>
                </li>
                <div  className={open ? 'show': 'hide'}>
                    <li className='nav-item'>
                        <a href="#main">
                            <img src={process.env.PUBLIC_URL + '/images/assets/home.svg'}/>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#works">
                            <img src={process.env.PUBLIC_URL + '/images/assets/work.svg'}/>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills">
                            <img src={process.env.PUBLIC_URL + '/images/assets/skills.svg'}/>    
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contacts">
                            <img src={process.env.PUBLIC_URL + '/images/assets/contact.svg'}/>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
}

// return(
//     <div className="navbar">
//         <li className="nav-item">
//             <a href="#main" className="nav-link">Home</a>
//         </li>
//         <li className="nav-item">
//             <a href="#link1" className="nav-link">About</a>
//         </li>
//         <li className="nav-item">
//             <a href="#skills" className="nav-link">Skills</a>
//         </li>
//         <li className="nav-item">
//             <a href="#link1" className="nav-link">Contact</a>
//         </li>
//         <li className="nav-item mode">
//             <img src="../images/moon.svg" alt="Light mode" id="mode" width={30}/>
//         </li>
//     </div>
// );