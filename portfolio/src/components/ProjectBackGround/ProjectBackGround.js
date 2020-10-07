import React from 'react';
import classes from './ProjectBackGround.css';
import Projects from '../Projects/Projects';

const projectBackground = () =>{
    return (
        <div className={classes.background}>
            <Projects />
        </div>
    )
}

export default projectBackground;