import React from 'react';
import classes from './TechSkill.css';
import TechChild from './TechChild/TechChild';
import FlipTheCard from '../../UI/FlipThe Card/FliptheCard';

const techSkill = (props)=>{
    const child=(
        props.TechChi.map(t=>{
        return <TechChild key={t.length+t}>{t}</TechChild>
        } 
    )
    )
    return(
        <FlipTheCard front={<div>{props.TechHead}</div>} back={<div>{child}</div>} cl={classes.TechSkill}/>
    )
}

export default techSkill;