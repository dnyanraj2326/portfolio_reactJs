import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="page_wrapper">
                        <div className="left_home">
                            <img src="./Images/hero2.jpg" alt="PicImg" />
                            <h1> Mr Portfolio <br/> React Js </h1>
                            <h2>Web Developer</h2>
                            <div className="icon">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-github"></i>
                                <i class="fab fa-linkedin-in"></i>
                                
                            </div>
                        </div>
                        <div className="right_home">
                            <h1>Biography</h1>
                            <p>Hi, I’m Mr Portfolio, currently working as a Software Engineer (Member of Technical Staff) at VMware in the SRE Automation Platform team. I have a Master’s degree in CS from UT Dallas and a Bachelor of Technology degree from the Indian Institute of Technology (IIT) Guwahati.

                                Previously, I worked at Works Applications, Singapore as a Software Engineer, where I worked on delivering libraries, microservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also an open-source enthusiast and have created projects that were listed in GitHub trending.
                            <br />
                                My interests lie in solving problems related to large-scale distributed software systems.</p>
                          <div className="int_edu">  
                            <div className="interest">
                                <h1> Interests </h1>
                                    <ul>
                                        <li>Web Development</li>
                                        <li>UI Design</li>
                                        <li>App Development</li>
                                        <li>Cloud Computing</li>
                                    </ul>
                                </div>
                            <div className="education">
                                <h1> Educations </h1>
                                    <div className="clg_info"> 
                                       <h2> <i class="fas fa-graduation-cap"></i> HSC, 2018 </h2>
                                        <p>Portfolio State Board of Secondary & Higher Secondary</p>
                                    </div>
                                    <div className="clg_info">
                                        <h2><i class="fas fa-graduation-cap"></i> BE (Computer Engineering), 2018 - 2022 </h2>
                                       <p> Mr Portfolio  University.</p>
                                    </div>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
           </div> 
        </>
    )
}

export default Home;
