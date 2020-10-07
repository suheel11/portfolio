import React,{Component} from 'react';
import Project from './Project/Project';
import classes from './Projects.css';

class Projects extends Component{
    state = {
        projects :[
            {id:"1asd", title:"Burger Builder", info:["Generated a simple web application where users can build the burger and view it with the help of CSS animation and place the orders using React by storing the order details in Firebase","Upgraded the application with React hooks and redux concepts for maintaining the minimal running of code"]},
            {id:"2asd", title:"Back End", info:["Java","Spring MVC","Hibernate"]}
        ]
    }
render(){

    const projectAry=(
        this.state.projects.map(p=>{
            return <Project
            key={p.id} 
            id={p.id}
            Title={p.title}
            Info={p.info}/>
        })
    )
    return(
        <div className={classes.projects}> 
            <div>{projectAry}</div>
        </div>
    )
}
}

export default Projects;