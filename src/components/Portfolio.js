// Imports
import "./Portfolio.css";
import Project from "./Project";
import React, { useState } from "react";

function Portfolio() {
  // 3 separate arrays created. different array used depending on filter button clicked

  //array of all projects (templated + custom)
  let projectsAll = [
    {
      projImgPath: "./images/laptop-icon-dev-portfolio.png",
      projHead: "Developer Portfolio",
      projSubHead: "Custom React App",
      projBody:
        "A portfolio site to showcase my web development experience and abilities. The first project after completing a fullstack web development course.",
      category: "custom",
      link: "https://byrondevin.com/",
    },
    {
      projImgPath: "./images/laptop-icon-bellezza.png",
      projHead: "Bellezza",
      projSubHead: "Woocommerce Store",
      projBody:
        "An Ecommerce store for a luxury clothing brand. Besides designing and developing the site, I also organised the photoshoots for all website content.",
      category: "templated",
      link: "https://bellezza.live/",
    },
    {
      projImgPath: "./images/laptop-icon-itunes.png",
      projHead: "iTunes API Search",
      projSubHead: "Custom React Express App",
      projBody:
        "A search engine that displays results from the iTunes API. Completed as part of my HyperionDev fullstack web development course.",
      category: "custom",
      link: "https://itunes-search-byron.herokuapp.com/",
    },
    {
      projImgPath: "./images/laptop-icon-culture-lab.png",
      projHead: "Culture Lab",
      projSubHead: "Woocommerce Store",
      projBody:
        "An Ecommerce store for a kombucha manufacturer. I designed and developed the site using the brand's pre-existing photo and video content.",
      category: "templated",
      link: "https://culturelabkombucha.com/",
    },
    {
      projImgPath: "./images/laptop-icon-minesweeper.png",
      projHead: "Minesweeper Game",
      projSubHead: "HTML, CSS and JS",
      projBody:
        "A recreation of a classic game. Completed as part of my HyperionDev fullstack web development course.",
      category: "custom",
      link: "https://serene-cliffs-66378.herokuapp.com/",
    },
  ];

  //array of custom projects
  let projectsCustom = [
    {
      projImgPath: "./images/laptop-icon-dev-portfolio.png",
      projHead: "Developer Portfolio",
      projSubHead: "Custom React App",
      projBody:
        "A portfolio site to showcase my web development experience and abilities. The first project after completing a fullstack web development course.",
      category: "custom",
      link: "https://bellezza.live/",
    },
    {
      projImgPath: "./images/laptop-icon-itunes.png",
      projHead: "iTunes API Search",
      projSubHead: "Custom React Express App",
      projBody:
        "A search engine that displays results from the iTunes API. Completed as part of my HyperionDev fullstack web development course.",
      category: "custom",
      link: "https://bellezza.live/",
    },
    {
      projImgPath: "./images/laptop-icon-minesweeper.png",
      projHead: "Minesweeper Game",
      projSubHead: "HTML, CSS and JS",
      projBody:
        "A recreation of a classic game. Completed as part of my HyperionDev fullstack web development course.",
      category: "custom",
      link: "https://bellezza.live/",
    },
  ];

  //array of templated projects
  let projectsTemplated = [
    {
      projImgPath: "./images/laptop-icon-bellezza.png",
      projHead: "Bellezza",
      projSubHead: "Woocommerce Store",
      projBody:
        "An Ecommerce store for a luxury clothing brand. Besides designing and developing the site, I also organised the photoshoots for all website content.",
      category: "templated",
      link: "https://bellezza.live/",
    },
    {
      projImgPath: "./images/laptop-icon-culture-lab.png",
      projHead: "Culture Lab",
      projSubHead: "Woocommerce Store",
      projBody:
        "An Ecommerce store for a kombucha manufacturer. I designed and developed the site using the brand's pre-existing photo and video content.",
      category: "templated",
      link: "https://bellezza.live/",
    },
  ];

  //State array holding portfolio projects. contents changes depending on which filter is slicked
  const [projectsState, setProjectsState] = useState(projectsAll);

  //state string varaible tracking which portfolio filter is active
  const [filterSelected, setFilterSelected] = useState("all");

  //function that runs every time a filter is clicked. It updates the projectState and filterSelected state variables depending on which filter is clicked
  async function filterPortfolio(e) {
    //if all projects filter chosen
    if (e.target.id === "filter-btn-all") {
      await setFilterSelected("all");
      await setProjectsState(projectsAll);
    }
    //if custom projects filter chosen
    else if (e.target.id === "filter-btn-custom") {
      await setFilterSelected("custom");
      await setProjectsState(projectsCustom);
    }
    //if templated projects filter chosen
    else if (e.target.id === "filter-btn-templated") {
      await setFilterSelected("templated");
      await setProjectsState(projectsTemplated);
    }
    //if no projects filter chosen. Print Error
    else {
      console.log("Error: could not filter portfolio");
      alert(
        "We are unable to filter the portfolio at this time. Sorry for any inconvenience."
      );
    }
  }

  return (
    <div className="Portfolio pt-5 mt-5 " id="portfolioSection">
      {/* Container for portfolio content */}

      <div className="container pt-0 mt-0">
        {/* H2 row */}
        <div className="row">
          <h2 className="head1">Portfolio</h2>
        </div>

        {/* Filter: Bootstrap Project type selector row */}
        {/* Each label's style depends on filter selected. */}
        {/* Each radio button filters portfolio with filterPortfolio() */}
        <div className="row p-3">
          <div className="btn-group  " data-toggle="buttons">
            {/* All projects filter button */}
            <label
              className="btn btn-secondary "
              style={
                filterSelected === "all"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#184C57",
                      border: "0.5px solid #ffffff",
                      fontWeight: "600",
                    }
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "#ffffff",
                      border: "0.5px solid #ffffff",
                    }
              }
            >
              <input
                onClick={filterPortfolio}
                className="portfolioBtns"
                type="radio"
                name="options"
                id="filter-btn-all"
                autocomplete="off"
              />
              All
            </label>
            {/* Custom projects filter button */}

            <label
              className="btn btn-secondary"
              style={
                filterSelected === "custom"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#184C57",
                      border: "0.5px solid #ffffff",
                      fontWeight: "600",
                    }
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "#ffffff",
                      border: "0.5px solid #ffffff",
                    }
              }
            >
              <input
                onClick={filterPortfolio}
                className="portfolioBtns"
                type="radio"
                name="options"
                id="filter-btn-custom"
                autocomplete="off"
              />
              Custom
            </label>
            {/* Templated projects filter button */}
            <label
              className="btn btn-secondary"
              style={
                filterSelected === "templated"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#184C57",
                      border: "0.5px solid #ffffff",
                      fontWeight: "600",
                    }
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "#ffffff",
                      border: "0.5px solid #ffffff",
                    }
              }
            >
              <input
                onClick={filterPortfolio}
                className="portfolioBtns"
                type="radio"
                name="options"
                id="filter-btn-templated"
                autocomplete="off"
              />
              Templated
            </label>
          </div>
        </div>
        {/* Project list. Mapped. contents depends on filter selected */}
        {projectsState.map((item) => (
          <Project
            projHead={item.projHead}
            projSubHead={item.projSubHead}
            projBody={item.projBody}
            projImgPath={item.projImgPath}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
