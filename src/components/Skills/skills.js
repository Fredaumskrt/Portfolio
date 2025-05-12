import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in...</span>
            
            <div className="skillBars">
                {/* Todas as divs agora usam a mesma classe: "skillBar" */}
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Design de interfaces e experiência do usuário.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Desenvolvimento de websites responsivos.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Criação de interfaces para aplicativos móveis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;