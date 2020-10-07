import React from 'react';
import classes from './ProfExp.css';
import FlipTheCard from '../UI/FlipThe Card/FliptheCard';

const profExp = () =>{
    const front=(
        <h1>Professional experience</h1>
    )
    const back=(
        <ul>
            <li>Designed, developed and deployed 75 – 80 job schedulers and java integrated applications using cloud integration tools (SeeBeyond,DSeries) in retail supply chain management to automate the process of warehouse management</li>
            <li>Provided on-call support for production issues by analyzing and resolving problems within 1 – 2 hours timelines</li>
            <li>Performed assembly, manual and automated testing for 20 – 30 applications using Selenium</li>
            <li>Played a significant role in the conversion of application architecture from COBOL to JAVA for healthcare services</li>
            <li>Automated a process which collects business intelligence using BRM reports analyzing customer usage and plan product offerings with the help of Unix shell scripting</li>
        </ul>
    )
    return(
        <FlipTheCard front={front} back={back} cl={classes.profExp}/>
    )
}

export default profExp;