import React from "react";

const PortfolioCard = ({ portfolios }) => {
  return (
    <div className="row mt-5">
      {portfolios.map((portfolio , i) => (
        <div
          key={i}
          className="col-md-6 mb-4 d-md-flex portfolio-image"
        >
          <img
            src={portfolio.Image}
            alt={portfolio.name}
            className="img-fluid height-100 rounded i"
          />
          <div
            className={`${
              portfolio.serverCode ? "link-area-code" : "link-area"
            }`}
          >
            <h4 className="text-center text-white">{portfolio.name}</h4>
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
  );
};

export default PortfolioCard;
