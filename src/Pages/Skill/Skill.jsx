import React from 'react';
import './Skill.css';
import SkillProduct from './SkillProduct';

const Skill = () => {
    return (
        <>
            <div className="skill_page">
                <div className="container">
                        <div className="hed">
                            <h4> Skills</h4>
                        </div>
                    <div className="skill_cards">
                       
                        {
                            SkillProduct.map((product) => {
                                return (
                                    <div className="cards">
                                        <div className="icons">
                                        <i class={product.icon}></i>
                                        </div>
                                        <div className="title_desc">
                                            <h1>{product.title}</h1>
                                            <p>{product.para}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                       
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;
