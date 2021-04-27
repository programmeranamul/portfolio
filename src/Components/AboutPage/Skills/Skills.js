import React from 'react';
import { ProgressBar } from "react-bootstrap";
import './Skills.css'

const Skills = (props) => {
    const { skill, prograsse } = props;
    return (
        <div className="col-md-6 mb-3">
            <p className="mb-0 text-muted ">{skill}</p>
            <div className="d-flex align-items-center">
                <p className="mb-0 mr-2 text-muted ">
                    {prograsse}%
                </p>
                <ProgressBar
                    now={prograsse}
                    className="w-100 custom-progress-height"
                />
            </div>
        </div>
    );
};

export default Skills;