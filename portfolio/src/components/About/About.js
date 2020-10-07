import React from 'react';
import classes from './About.css';
import FlipTheCard from '../UI/FlipThe Card/FliptheCard';

const about = () =>{
    const front=(
        <h1>More about me</h1>
    )
    const back=(
        <p>I am Suheel Vallamkonda and currently pursuing an MS degree in Information Systems at Northeastern University with a previous work experience of 3 years as an Application Development Analyst. I gained extensive industry exposure through the three live projects. I extensively worked on development and support areas using tools such as SeeBeyond-eGate (Integration), Dell Boomi (Cloud Integration), NetSuite (CRM), D Series (Scheduling), FTP clients and Database tools.</p>
    )
    return(
        <FlipTheCard front={front} back={back} cl={classes.about}/>
    )
}

export default about;