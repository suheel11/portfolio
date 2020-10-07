import React from 'react';
import classes from './Project.css';
import ProjectChild from './ProjectChild/ProjectChild';
import FlipTheCard from '../../UI/FlipThe Card/FliptheCard';

const techSkill = (props)=>{
    const child=(
        props.Info.map(p=>{
        return <ul><li><ProjectChild key={p.length+p}>{p}</ProjectChild></li></ul>
        } 
    )
    )
    return(
        <FlipTheCard front={<div>{props.Title}</div>} back={<div>{child}</div>} cl={classes.Project}/>
    )
}

export default techSkill;