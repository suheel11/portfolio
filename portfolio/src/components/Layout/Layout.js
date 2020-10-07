import React, {Component} from 'react';
import MainBackGround from '../MainBackGround/MainBackGround';
import About from '../About/About';
import TechSkillBackGround from '../TechSkillBackGround/TechSkillBackGround';
import ProfExp from '../ProfExp/ProfExp';
import ProjectBackGround from '../ProjectBackGround/ProjectBackGround';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import FliptheCard from '../UI/FlipThe Card/FliptheCard';

class Layout extends Component{
    render(){
        return(
            <div>
                <MainBackGround />
                <About />
                <TechSkillBackGround />
                <ProfExp />
                <ProjectBackGround />
                <ExternalLinks />
                <FliptheCard />
            </div>
        )
    }
}

export default Layout;