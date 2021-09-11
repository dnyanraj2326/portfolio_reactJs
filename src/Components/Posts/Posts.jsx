import React from 'react';
import './Posts.css';

const Posts = () => {
    return (
        <>
            <div className="resent_post">
                <div className="container">
                    <div className="post">
                            <div className="title_left">
                                    <h1>Recent Posts</h1>
                            </div>
                        <div className="post_right">
                            <div className="post_img">
                                <div className="text_wrapper">
                                    <h1>My transition from a Software Engineer to a CS grad student</h1>
                                    <p>Why I decided to go for a Master’s degree</p>
                                    <ul>
                                        <li>Aug 20, 2019</li>
                                        <li>2 min read</li>
                                        <li><i class="fas fa-folder"></i> &nbsp; personal</li>
                                    </ul>
                                </div>
                                    <div className="img">
                                        <img src="./Images/img1.jpg" alt="img1" />
                                    </div>
                            </div>
                            <div className="post_img">
                                <div className="text_wrapper">
                                    <h1>Cookiecutter LaTeX templates</h1>
                                    <p>LaTeX templates using cookiecutter</p>
                                    <ul>
                                        <li>Aug 20, 2019</li>
                                        <li>2 min read</li>
                                        <li><i class="fas fa-folder"></i> &nbsp; personal</li>
                                    </ul>
                                </div>
                                    <div className="img">
                                        <img src="./Images/img2.jpg" alt="img2" />
                                    </div>
                            </div>
                            <div className="post_img">
                                <div className="text_wrapper">
                                    <h1>Remote VS Code</h1>
                                    <p>Running and using Visual Studio Code in a remote server</p>
                                    <ul>
                                        <li>Jun 2, 2019</li>
                                        <li>2 min read</li>
                                        <li><i class="fas fa-folder"></i> &nbsp; DevOps</li>
                                    </ul>
                                </div>
                                    <div className="img">
                                        <img src="./Images/img3.png" alt="img1" />
                                    </div>
                            </div>
                            <div className="post_img">
                                <div className="text_wrapper">
                                    <h1>My Ubuntu Setup</h1>
                                    <p>My Ubuntu desktop setup using Ansible</p>
                                    <ul>
                                        <li>Jun 30, 2019</li>
                                        <li>1 min read</li>
                                        <li><i class="fas fa-folder"></i> &nbsp; Automation</li>
                                    </ul>
                                </div>
                                    <div className="img">
                                        <img src="./Images/img4.png" alt="img1" />
                                    </div>
                            </div>
                            <div className="post_img">
                                <div className="text_wrapper">
                                    <h1>My transition from a Software Engineer to a CS grad student</h1>
                                    <p>Why I decided to go for a Master’s degree</p>
                                    <ul>
                                        <li>May 19, 2019</li>
                                        <li>2 min read</li>
                                        <li><i class="fas fa-folder"></i> &nbsp; Deep-Learning</li>
                                    </ul>
                                </div>
                                    <div className="img">
                                        <img src="./Images/img1.jpg" alt="img1" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;
