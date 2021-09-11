import React from 'react';
import './Project.css';
import ProjectData from './ProjectData';
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <div className="project">
                <div className="container">
                    <div className="post">
                            <div className="title_left">
                                    <h1>Projects</h1>
                            </div>
                        <div className="post_right">
                            {
                                ProjectData.map((ProjectData) => {
                                    return (
                                        <div className="post_img">
                                            <div className="text_wrapper">
                                                <h1>{ProjectData.title}</h1>
                                                <p> {ProjectData.subTitle} </p>
                                                <ul>
                                                    <li> <Link to="/"> {ProjectData.author}</Link> </li>
                                                </ul>
                                                <button><i class={ProjectData.icon}></i> &nbsp; {ProjectData.category}</button>
                                            </div>
                                            <div className="img">
                                                <img src={ProjectData.image} alt="img1" />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Projects
