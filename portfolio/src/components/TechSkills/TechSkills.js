import React,{Component} from 'react';
import TechSkill from './TechSkill/TechSkill';
import classes from './TechSkills.css';

class TechSkills extends Component{
    state = {
        tech :[
            {id:"1asd", head:"Front End", chi:["React","Html","CSS"]},
            {id:"2asd", head:"Back End", chi:["Java","Spring MVC","Hibernate"]}
        ]
    }
    render(){
        const techHeadAry=(
            this.state.tech.map(t=>{
                return <TechSkill
                key={t.id} 
                id={t.id}
                TechHead={t.head}
                TechChi={t.chi}/>
            })
        )
        return(
            <div className={classes.techSkills}>
                <div>{techHeadAry}</div>
            </div>
        )
    }
}

export default TechSkills;