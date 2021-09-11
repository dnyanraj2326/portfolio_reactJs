import React, {useState} from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState("false");

    const changeBg = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBg);

    return (
        <>
            <div className={ navbar? 'navbar bg': 'navbar' }>
                <div className="container">
                    <div className="menu">
                    <div className="left_navbar">
                        <h2>Mr Portfolio</h2>
                    </div>
                    <div className="right_navbar">
                        <ul>
                            <li>Home</li>
                            <li>Experience</li>
                            <li>Post</li>
                            <li>Projects</li>
                            <li>Resume</li>
                            <li>Contact</li>
                        </ul>
                        <div className="color_mode">
                        <i class="fas fa-palette"></i>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar
