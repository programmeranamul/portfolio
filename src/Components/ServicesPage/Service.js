import React from 'react';
import Title from '../ShearedComponent/Title/Title';
import ServiceCard from './ServiceCard';
import webdesign from '../../image/webdesign.png'
import webdeveloping from '../../image/webdevelopmig.png'
import speedOptimization from '../../image/speed.png'

const services = [
    { name: "Web Design", image: webdesign, info: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { name: "Web Developing", image: webdeveloping, info: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { name: "Website Speed Optimization", image: speedOptimization, info: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    
]


const Service = () => {
    return (
        <section className="services-section pr-5 pt-5 padding-left-85">
            <Title title={"Our Services"} />
            <p className="text-white mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nemo
                consequatur sapiente necessitatibus voluptatum excepturi! Veritatis,
                molestiae expedita. Molestiae, aliquid sed asperiores impedit suscipit
                rem officiis quo quaerat doloribus eligendi.
            </p>
            <div className="service-card-container mb-5 mt-4">
                <div className="row">
                    {
                        services.map(service => <ServiceCard key={service.name} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;