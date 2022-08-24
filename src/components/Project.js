// Imports
import "./Project.css";

// function Project(projHead, projSubHead, projBody) {
function Project({ projHead, projSubHead, projBody, projImgPath, link }) {
  return (
    //Container for Project content
    <div className="Project container mt-3 mt-sm-5 mb-4">
      <div className="row align-items-center">
        {/* Portfolio image col */}
        <div className="col-12 col-sm-6">
          {/* portfolio item image */}
          <img
            className="projectImg"
            id="iTunesProj"
            src={projImgPath}
            alt="itunesProjImg"
          />
        </div>

        {/* portfolio info and button col */}
        <div className="col-12 col-sm-6">
          {/* portfolio item heading */}
          <h3 className="head2">{projHead}</h3>

          {/* portfolio item subheading */}
          <p className="head3 projSubHead mb-0">{projSubHead}</p>

          {/* portfolio item paragraph */}
          <p className="m-0 p-0">{projBody}</p>

          {/* portfolio item button & link */}
          <a href={link}>
            <button className="btn btn-outline-light mt-3 projBtns">
              View site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
