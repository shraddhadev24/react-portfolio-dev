import React from 'react';

import './Project.scss';
import { Grid, Card } from '@mui/material';
import ProjectCard from '../../components/card/Card';

import { workSection } from "../../utils/portfolio";

const Project = () => {
    return (
        <div id="experience" className="work-section ">
        <div className="title colorText">Projects</div>
            <Grid container spacing={6}>
                {workSection.map((project) => {
                    return (
                        <Grid item xs={12} md={4} lg={4}>
                            <ProjectCard name={project.name} img={project.img} desc={project.desc}/>
                        </Grid>
                    )
                })}
            </Grid>    
      </div>
    )
}

export default Project;