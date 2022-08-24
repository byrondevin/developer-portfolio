// Imports
import "./HomeAboveFold.css";

function HomeAboveFold() {
  return (
    <div className="HomeAboveFold pt-4 px-3 pb-5" id="homeSection">
      {/* Container for header content */}
      <div className="container ">
        {/* H1 row */}
        <div className="row">
          <h1 className="head1">Web Developer</h1>
        </div>

        {/* Subheading row */}
        <div className="row">
          <p className="head2">SEO Specialist</p>
        </div>

        {/* Profile image */}
        <div className="row">
          {/* spacing col div 1 */}
          <div className="col-0 col-sm-1"></div>

          {/* profile img col */}
          <div className="col">
            <img
              id="profileImg"
              src="./images/cv-byron-da-nang-2022.jpg"
              alt="byron-profile"
            />
          </div>

          {/* spacing col div 2 */}
          <div className="col-0 col-sm-1"></div>
        </div>

        {/* Name row */}
        <div className="row mt-2">
          <p id="name">Byron Devin </p>
        </div>

        {/* Contact icons */}
        <div className="row justify-content-center">
          {/* spacing col for tablet and desktop*/}
          <div className="col-0 col-md-2 col-xl-3"></div>
          {/* Email col */}
          {/* Link to contact form around entire col */}
          <a class="contact-col-link" href="#contact">
            <div className="col contact-col ml-3">
              {/* Email icon */}
              <div className="row ">
                <img
                  className="icon-contact-img p-3 pb-1"
                  src="./images/contact-icon-mail.png"
                  alt="email-icon"
                />
              </div>

              {/* Email label */}
              <div className="row mt-0">
                <p className="contact-label">Email</p>
              </div>
            </div>
          </a>

          {/* Github col */}
          {/* Link to Github profile around entire col */}
          <a class="contact-col-link" href="https://github.com/byrondevin">
            <div className="col contact-col ml-3">
              {/* Github icon */}
              <div className="row">
                <img
                  className="icon-contact-img p-3 pb-1"
                  src="/images/contact-icon-github.png"
                  alt="github-icon"
                />
              </div>

              {/* Github label */}
              <div className="row mt-0">
                <p className="contact-label">Github</p>
              </div>
            </div>
          </a>

          {/* Linkedin col */}
          {/* Link to LinkedIn profile around entire col */}
          <a
            class="contact-col-link"
            href="https://www.linkedin.com/in/byron-devin/"
          >
            <div className="col contact-col ml-3">
              {/* Linkedin icon */}
              <div className="row">
                <img
                  className="icon-contact-img p-3 pb-1"
                  src="./images/contact-icon-linkedin.png"
                  alt="linkedin-icon"
                />
              </div>

              {/* Linkedin label */}
              <div className="row mt-0">
                <p className="contact-label">LinkedIn</p>
              </div>
            </div>
          </a>

          {/* CV col */}
          {/* Link to Canva CV around entire col */}
          <a
            class="contact-col-link"
            href="https://www.canva.com/design/DAE_05CSqs4/iDgDO5Fzh5BP6nlpExXjbQ/view?utm_content=DAE_05CSqs4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          >
            <div className="col contact-col ml-3">
              {/* CV icon */}
              <div className="row">
                <img
                  className="icon-contact-img p-3 pb-1"
                  src="./images/contact-icon-resume.png"
                  alt="cv-icon"
                />
              </div>

              {/* CV label */}
              <div className="row mt-0">
                <p className="contact-label">CV</p>
              </div>
            </div>
          </a>
          {/* spacing col for tablet and desktop*/}
          <div className="col-0 col-md-2 col-xl-3"></div>
        </div>

        {/* Portfolio Button */}
        <div className="row text-center mt-2 mt-lg-3 mt-xl-5">
          <div className="col">
            <a href="#portfolioSection">
              <button className="btn btn-outline-light">Portfolio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboveFold;
