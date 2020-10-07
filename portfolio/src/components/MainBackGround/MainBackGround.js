import React, {Component} from 'react';
import classes from './MainBackGround.css';
import pp from '../../images/pp.jpg'; 

class MainBackGround extends Component{
   
    render(){
            return(
            <div className={classes.container}>
                    <img src={pp} alt='My profile Pic'/>
                    <div className={classes.center}>Suheel Vallamkonda Vijayakumar</div>
                    <div className={classes.description}>Information Systems Graduate Student at Northeastern University</div>
                    <div className={classes.full}>Full Stack Developer</div>
            </div>
        )
    }
}

export default MainBackGround;