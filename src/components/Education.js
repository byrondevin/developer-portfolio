// Imports
import "./Education.css";

// recieving education component's info as props from History component
function Education({ id, studyPlace, courseName, year, logo, link }) {
  return (
    <div className="Education containerfluid mt-4 mt-md-5">
      <div className="row">
        {/* Blank col div for responsive spacing purposes on left of viewport*/}
        <div className="col-2 col-md-6 col-lg-7 spacer"></div>

        {/* Content col div (Card/Div with background color)*/}
        <div className="col-10 col-md-6 col-lg-5 education py-2 py-lg-4 shadow">
          <div className="containerfluid">
            <div className="row">
              {/* logo & button col */}
              <div className="col-3 info">
                {/* image of Logo */}
                <div className="row  ">
                  <div className="col-12 info">
                    <img
                      className="historyImg rounded"
                      src={logo}
                      alt={`${studyPlace}-logo`}
                    />
                  </div>
                </div>
                {/* button */}
                <div className="row">
                  <div className="col-12 info">
                    <a href={link}>
                      <button id={`btn${id}`} className="mt-2">
                        Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Info col */}
              <div className="col-9 px-md-5 logoLink">
                {/* place of study */}
                <p className="mt-2 mb-0 pb-0" id="itemHeading">
                  {studyPlace}
                </p>
                {/* course name */}
                <h4 className="mb-0 py-2 h6" id="itemSubHeading">
                  {courseName}
                </h4>
                {/* year */}
                <p className="mb-0 pb-0" id="itemYear">
                  {year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
