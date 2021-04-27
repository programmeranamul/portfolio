import React from 'react';
import Title from '../ShearedComponent/Title/Title';
import AboutDetails from './AboutDetails/AboutDetails';
import Skills from './Skills/Skills';

const About = () => {
    return (
        <main className='padding-left-85'>
            <section className="about-me pt-5 pr-5">
                <Title title={"About Me"} />
                <AboutDetails />
            </section>
            <section className="py-5 pr-5">
                <Title title={"My Skills"} />
                <div className="row mt-4">
                    <Skills skill={"HTML"} prograsse={"88"} />
                    <Skills skill={"Css"} prograsse={"90"} />
                    <Skills skill={"Bootstrap"} prograsse={"70"} />
                    <Skills skill={"JavaScript"} prograsse={"86"} />
                    <Skills skill={"ReactJS"} prograsse={"86"} />
                    <Skills skill={"NodeJS"} prograsse={"86"} />
                    <Skills skill={"ExpressJS"} prograsse={"86"} />
                    <Skills skill={"MongoDB"} prograsse={"86"} />
                    <Skills skill={"Mongoose"} prograsse={"86"} />
                </div>
            </section>
        </main>
    );
};

export default About;