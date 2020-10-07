import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return(
    <button className={classes.Button}><a href={props.click}>{props.children}</a></button>
    )
}

export default button;