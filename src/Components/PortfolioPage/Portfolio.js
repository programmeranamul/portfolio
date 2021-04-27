import React, { useEffect, useState } from 'react';
import Title from '../ShearedComponent/Title/Title';
import './Portfolio.css'

const filterButtons = ["All", "React", "MERN"]

const handelFilter = e => {
    console.log(e)
}


const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/getPortfolios")
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, [])



    return (
        <section className="py-5 pr-5 padding-left-85">
            <Title title={"Portfolio"} />
            <p className="py-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam reprehenderit recusandae numquam quidem ipsum hic</p>
            <div className="d-flex justify-content-center">
                {
                    filterButtons.map(filterButton => <button key={filterButton} className="btn btn-primary m-2" onClick={(e) => handelFilter(e)}>{filterButton}</button>)
                }
            </div>
            <div className="row mt-5">
                {
                    portfolios.map(portfolio => <div key={portfolio._id} className="col-md-6 mb-4 d-md-flex portfolio-image">
                        <img src={portfolio.imageURL} alt={portfolio.portfolioTitle} className="img-fluid height-100 rounded" />
                        <div className="link-area d-flex">
                            <a href={portfolio.sourceLink} target="_blanck">Source Code</a>
                            <a href={portfolio.liveLink} target="_blanck">Live Preview</a>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Portfolio;