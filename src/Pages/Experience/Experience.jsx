import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="container">
                    <div className="experience_left_mid_right">
                        <div className="Left_experience">
                            <h1>Experience</h1>
                        </div>
                        <div className="mid_experience">
                            <div className="dot_line">
                            <span><i class="fas fa-circle"></i></span>
                                <div className="vl"></div>
                            </div>
                            <div className="dot_line">
                            <span><i class="far fa-circle"></i></span>
                                <div className="vl2"></div>
                            </div>
                            <div className="dot_line">
                            <span><i class="far fa-circle"></i></span>
                               
                            </div>
                           
                        </div>
                        <div className="right_experience">
                            <div className="card">
                                <h1>Member of Technical Staff</h1>
                                <h2>VMware</h2>
                                <div className="city_date">
                                    <h1>Jun 2021 – Present  Palo Alto, CA</h1>
                                </div>
                                    <p><b>Team</b>: VMware Cloud on AWS - SRE Automation Platform</p>
                            </div>
                            <div className="card">
                                <h1>Member of Technical Staff</h1>
                                <h2>VMware</h2>
                                <div className="city_date">
                                    <h1>Jun 2021 – Present  Palo Alto, CA</h1>
                                </div>
                                <ul>
                                    <li><b>About</b>: Built an open-source command-line personal assistant using Python 2, Python 3, and Click framework; wrote automated tests for command implementations using nosetests with 76% coverage.</li>
                                    <li><b>Features</b>: Chatbot, developer tools, diary, money manager, learning & productivity tools, etc.</li>
                                    <li><b>Achievements</b>: Listed in GitHub Trending; 600+ GitHub stars; 160+ forks; 80+ contributors</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h1>Member of Technical Staff</h1>
                                <h2>VMware</h2>
                                <div className="city_date">
                                    <h1>Jun 2021 – &nbsp; Present  Palo Alto, CA</h1>
                                </div>
                                <ul>
                                    
                                <li><b>Backend & Architecture:</b> <br />
                                        -Listed in GitHub Trending; 600+ GitHub stars; 160+ forks; 80+ contributors<br />
                                        -Wrote unit and integration tests<br />
                                        -Improved authentication and access control methods<br />
                                        -Microservices and multitenancy</li>
                                    <li><b>Application Security:</b><br />
                                        -Listed in GitHub Trending; 600+ GitHub stars; 160+ forks; 80+ contributors<br />
                                        -Implemented Single Sign-On Authentication<br />
                                        -Improved authentication and access control methods<br />
                                        -Summer 2018 Internship Mentor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
