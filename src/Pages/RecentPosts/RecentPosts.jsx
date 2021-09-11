import React from 'react';
import './RecentPosts.css';
import RecentPostsData from './RecentPostsData';
const RecentPosts = () => {
    return (
        <>
            <div className="resent_post">
                <div className="container">
                    <div className="post">
                            <div className="title_left">
                                    <h1>Recent Posts</h1>
                            </div>
                        <div className="post_right">
                            {
                                RecentPostsData.map((data) => {
                                    return (
                                        <div className="post_img">
                                            <div className="text_wrapper">
                                                <h1>{data.title}</h1>
                                                <p> {data.subTitle} </p>
                                                <ul>
                                                    <li> {data.date} </li>
                                                    <li>{data.time}</li>
                                                    <li><i class={data.icon}></i> &nbsp; {data.type}</li>
                                                </ul>
                                            </div>
                                            <div className="img">
                                                <img src={data.image} alt="img1" />
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

export default RecentPosts;
