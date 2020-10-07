import React from 'react';
import TechSkills from '../TechSkills/TechSkills';
import classes from './TechSkillBackGround.css';
const techSkillBackground = () =>{
    return (
        <div className={classes.background}>
            <TechSkills />
        </div>
    )
}

export default techSkillBackground;