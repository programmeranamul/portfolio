import React, { useEffect, useState } from "react";
import Title from "../ShearedComponent/Title/Title";
import "./Portfolio.css";
import netflix from "../../image/netflix.png";

const filterButtons = ["All", "React", "MERN"];

const portfolioData = [
  {
    name: "Netflix Clone",
    liveLink: "https://basic-netflix.web.app/",
    clientCode: "https://github.com/programmeranamul/besic-netflix",
    Image: netflix,
  },
  {
    name: "Massage Therapy",
    liveLink: "https://basic-netflix.web.app/",
    clientCode: "https://github.com/programmeranamul/massage-therapy",
    Image: netflix,
    serverCode: "https://github.com/programmeranamul/massage-therapy-server",
  },
];

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:8000/getPortfolios")
  //         .then(res => res.json())
  //         .then(data => setPortfolios(data))
  // }, [])
  const handelFilter = (e) => {
    console.log(e);
  };

  return (
    <section className="py-5 pr-5 padding-left-85">
      <Title title={"Portfolio"} />
      <p className="py-3 text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam
        reprehenderit recusandae numquam quidem ipsum hic
      </p>
      <div className="d-flex justify-content-center">
        {filterButtons.map((filterButton) => (
          <button
            key={filterButton}
            className="btn btn-primary m-2"
            onClick={(e) => handelFilter(e)}
          >
            {filterButton}
          </button>
        ))}
      </div>
      <div className="row mt-5">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio.name}
            className="col-md-6 mb-4 d-md-flex portfolio-image"
          >
            <img
              src={portfolio.Image}
              alt={portfolio.name}
              className="img-fluid height-100 rounded"
            />
            <div
              className={`${
                portfolio.serverCode ? "link-area-code" : "link-area"
              }`}
            >
              <div className="d-flex">
                <a href={portfolio.liveLink} target="_blanck">
                  Live Link
                </a>
                <a href={portfolio.clientCode} target="_blanck">
                  {portfolio.serverCode ? "Client Code" : "Source Code"}
                </a>
              </div>
              {portfolio.serverCode && (
                <div className="d-flex justify-content-center mt-2">
                  <a href={portfolio.serverCode} target="_blanck">
                    Server Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
