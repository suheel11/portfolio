import React from 'react';
import classes from './FliptheCard.css';

const fliptheCard = (props)=>{
    return(
        <div className={props.cl}>
        <div className={classes.maincontainer}>
        <div className={classes.thecard}>
        <div className={classes.thefront}>{props.front}</div>
        <div className={classes.theback}>{props.back}</div>
        </div>
        </div>
        </div>
    )
}

export default fliptheCard;