// Imports
import "./Skills.css";
import React, { useState } from "react";

function Skills() {
  //WEB DEV vs SEO: Creating State variables for skills and skill headings. Onload = Webdev values

  //Boolean state variable to track which skills are showing SEO vs Web Dev
  const [showWebDevSkills, setShowWebDevSkills] = useState(true);

  // First Skills heading state value
  const [skillsListHeading1, setSkillsListHeading1] = useState("Frontend");

  // Second Skills heading state value
  const [skillsListHeading2, setSkillsListHeading2] = useState("Backend");

  // Third Skills heading state value
  const [skillsListHeading3, setSkillsListHeading3] = useState("Other");

  // First Skills body state value
  const [skillsListBody1, setSkillsListBody1] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "React JS",
    "Next.js",
    "Jest",
    "Mocha",
    "Wordpress",
    "Figma",
  ]);

  // Second Skills body state value
  const [skillsListBody2, setSkillsListBody2] = useState([
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Woocommerce",
  ]);

  // Third Skills body state value
  const [skillsListBody3, setSkillsListBody3] = useState([
    "Git Version Control",
    "Google Analytics",
    "Figma Mockups",
  ]);

  //set the skills state values on heading click. Web Dev VS SEO
  function setSkills(e) {
    //if web dev heading clicked, set skills to web dev values
    if (e.target.attributes.value.value === "webDev") {
      setShowWebDevSkills(true);

      setSkillsListHeading1("Frontend");

      setSkillsListHeading2("Backend");

      setSkillsListHeading3("Other");

      setSkillsListBody1([
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "React JS",
        "Next.js",
        "Jest",
        "Mocha",
        "Wordpress",
        "Figma",
      ]);

      setSkillsListBody2([
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Woocommerce",
      ]);

      setSkillsListBody3([
        "Git version control",
        "Google Analytics",
        "Figma Mockups",
      ]);
    }
    //if SEO heading clicked, set skills to SEO values
    else {
      setShowWebDevSkills(false);

      setSkillsListHeading1("SEO Skills");

      setSkillsListHeading2("SEO Technologies");

      setSkillsListHeading3("Other");

      setSkillsListBody1([
        "On-page SEO",
        "Technical SEO",
        "Website Audits",
        "SEO Strategy",
        "Link Building / Earning",
        "Keyword Research",
        "Competitor Analysis",
        "Content Optimisation",
        "Technical Optimisation",
        "Feasability Research/Analysis",
      ]);

      setSkillsListBody2([
        "Google Analytics",
        "Google Search Console",
        "AHREFS",
        "Screaming Frog",
        "Serpstat",
      ]);

      setSkillsListBody3([
        "Client Management & Reporting",
        "Employee Training",
        "Sales Pitches",
      ]);
    }
  }

  return (
    <div className="Skills  px-4 mt-3 pt-5" id="skillsSection">
      {/* Container for skills content */}
      <div className="container ">
        {/* H1 row */}
        <div className="row">
          <h2 className="head1">Skills</h2>
        </div>

        {/* Skills Subheadings Row */}
        <div className="row skillsSubheadingsRow pt-4">
          {/* Web Dev Skills Subheading Col. 
            Embedded if statement used. If showWebDevSkills, change h3 classname so that heading formatted shows it as selected*/}
          {showWebDevSkills ? (
            <div className="col-8 skillsSubheadingsColSelected">
              <h3
                className="head2 skillsSubheadingSelected "
                onClick={setSkills}
                value="webDev"
                id="webDev"
              >
                Web Development
              </h3>
            </div>
          ) : (
            <div className="col-8 skillsSubheadingsCol">
              <h3
                className="head2 skillsSubheading"
                onClick={setSkills}
                value="webDev"
                id="webDev"
              >
                Web Development
              </h3>
            </div>
          )}

          {/* SEO Skills Subheading Col
            Embedded if statement used. If showWebDevSkills, change h3 classname so that heading formatted shows it as selected*/}
          {showWebDevSkills ? (
            <div className="col-4 skillsSubheadingsCol">
              <h3
                className="head2 skillsSubheading"
                onClick={setSkills}
                value="seo"
                id="seo"
              >
                SEO
              </h3>
            </div>
          ) : (
            <div className="col-4 skillsSubheadingsColSelected">
              <h3
                className="head2 skillsSubheadingSelected"
                onClick={setSkills}
                value="seo"
                id="seo"
              >
                SEO
              </h3>
            </div>
          )}
        </div>
        {/* Skills Body. State values mapped */}
        <div className="row justify-content-center">
          {/* Skills column 1 */}
          <div
            className="col-sm-12 col-md-4 pt-4 py-4 skillCol skillColBottomBorder"
            id="frontendCol"
          >
            {/* Skills heading 1 */}
            <h3 className="head3 skillSubheading ">{skillsListHeading1}</h3>

            {/* Skills body 1 */}
            {skillsListBody1.map((item) => (
              <p className="m-2">{item}</p>
            ))}
          </div>

          {/* Skills column 2 */}
          <div
            className="col-sm-12 col-md-4 pt-4 py-4 skillCol skillColBottomBorder "
            id="backendCol"
          >
            {/* Skills heading 2 */}
            <h3 className="head3 skillSubheading ">{skillsListHeading2}</h3>

            {/* Skills body 2 */}
            {skillsListBody2.map((item) => (
              <p className="m-2">{item}</p>
            ))}

            {/* Skills heading 3 */}
            <h3 className="head3 skillSubheading pt-3">{skillsListHeading3}</h3>

            {/* Skills body 3 */}
            {skillsListBody3.map((item) => (
              <p className="m-2">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
