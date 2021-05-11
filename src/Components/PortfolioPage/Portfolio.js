import React, { useState } from "react";
import Title from "../ShearedComponent/Title/Title";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import PortfolioData from "./PortfolioData/PortfolioData";

const Portfolio = () => {
  const filterButtons = [
    "All",
    ...new Set(PortfolioData.map((portfolio) => portfolio.type)),
  ];

  const [portfolios, setPortfolios] = useState(PortfolioData);

  const filter = (filterText) => {
    if (filterText === "All") {
      setPortfolios(PortfolioData);      
    } else {
      const filterItems = PortfolioData.filter((portfolio) => {
        return portfolio.type === filterText;
      });
      setPortfolios(filterItems);
    }
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
            onClick={(e) => filter(e.target.innerText)}
          >
            {filterButton}
          </button>
        ))}
      </div>
      <PortfolioCard portfolios={portfolios} />
    </section>
  );
};

export default Portfolio;
