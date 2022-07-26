import '../styles/navbar.css'

export function Navbar() {
    return(
        <nav id="hamnav">
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            
            <div id="hamitems" className='hamitems'>
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contacts">Contact</a>
                {/* <a href="#contact">
                    <img src="../images/moon.svg" alt="Light mode" id="mode"/>
                </a> */}
                <a href="#mode" id="mode">Dark</a>
            </div>
        </nav>
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