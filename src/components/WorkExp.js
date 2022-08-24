// Imports
import "./WorkExp.css";

// recieving this Work Exp component's info as props from History component
function WorkExp({
  id,
  studyPlace,
  courseName,
  year,
  logo,
  link,
  email,
  descriptionList,
}) {
  return (
    <div className="WorkExp containerfluid align-self-start mt-4 mt-md-5">
      <div className="row">
        {/* Info col (Card/Div with background color)*/}
        <div className=" work col-11 col-md-9 col-lg-7  py-2 py-lg-4   shadow">
          <div className="containerfluid ">
            <div className="row">
              {/* Info col */}
              <div className="col-9 logoLink px-3 px-md-5">
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
              {/* logo button col */}
              <div className="col-3 info ">
                {/* image row*/}
                <div className="row   ">
                  <div className="col-12 info">
                    <img
                      className="historyImg rounded "
                      src={logo}
                      alt={`${studyPlace}-logo`}
                    />
                  </div>
                </div>
                {/* button row */}
                <div className="row   ">
                  <div className="   col-12 info ">
                    <a href={link}>
                      <button id={`btn${id}`} className="mt-2">
                        Website
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email row*/}
              <div className="row mt-3">
                <div className="col text-center">
                  <p>{email}</p>
                </div>
              </div>

              {/* Details row*/}
              <div className="row px-md-5">
                <div className="col text-left" id="descriptionList">
                  <ul>
                    {descriptionList.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blank col div for responsive spacing purposes. on right of screen */}
        <div className="col-1 col-md-3 spacer"></div>
      </div>
    </div>
  );
}

export default WorkExp;
