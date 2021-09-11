import React from 'react';
import RecentProjectData from './RecentProjectData';
import './RecentProject.css';

const RecentProject = () => {
    return (
        <>
           <div className="Recentproject">
                <div className="container">
                    <div className="post">
                            <div className="title_left">
                                    <h1>Recent Publications</h1>
                            </div>
                        <div className="projuct_right">
                            {
                                RecentProjectData.map((recentProjrct) => {
                                    return (
                                        <div className="post_img">
                                            <div className="text_wrappers">
                                                <h1><i class={recentProjrct.icon}></i> &nbsp; {recentProjrct.title}</h1>
                                                <p>{` ${recentProjrct.subTitle}, ${recentProjrct.author}`}</p>
                                                <button> {recentProjrct.code}</button>
                                                &nbsp;<button> {recentProjrct.project}</button>
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

export default RecentProject
