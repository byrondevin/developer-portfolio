// Imports
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer container-fluid p-4">
      <div className="container">
        {/* about and contact row */}
        <div className="row text-left mb-4">
          {/* about col */}
          <div className="col-12 col-md-6">
            <p className="h5">Byron Devin</p>
            <p>
              A full stack web developer and SEO specialist who builds
              highly-functional websites and web applications that rank in
              Google's search results for targetted, revenue-generating
              keywords.
            </p>
          </div>
          {/* contact col */}
          <div className="col-12 col-md-6" id="ftrIconCol">
            <div className="row">
              <p className="h5">Contact</p>
            </div>
            <div className="row">
              {/* Contact social icons */}
              <div className="container-fluid mb-4">
                <div className="row mt-3 mx-3 justify-content-between">
                  {/* Email col */}
                  {/* Link to contact form around entire col */}
                  <a class="contact-col-link" href="#contact">
                    <div className="col contact-col mx-3">
                      {/* Email icon */}
                      <div className="row text-center">
                        <img
                          className="icon-footer-img  "
                          src="./images/contact-icon-mail.png"
                          alt="email-icon"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Github col */}
                  {/* Link to Github profile around entire col */}
                  <a
                    class="contact-col-link"
                    href="https://github.com/byrondevin"
                  >
                    <div className="col contact-col mx-3">
                      {/* Github icon */}
                      <div className="row text-center">
                        <img
                          className="icon-footer-img "
                          src="/images/contact-icon-github.png"
                          alt="github-icon"
                        />
                      </div>
                    </div>
                  </a>

                  {/* Linkedin col */}
                  {/* Link to LinkedIn profile around entire col */}
                  <a
                    class="contact-col-link"
                    href="https://www.linkedin.com/in/byron-devin/"
                  >
                    <div className="col contact-col mx-3">
                      {/* Linkedin icon */}
                      <div className="row text-center">
                        <img
                          className="icon-footer-img "
                          src="./images/contact-icon-linkedin.png"
                          alt="linkedin-icon"
                        />
                      </div>
                    </div>
                  </a>

                  {/* CV col */}
                  {/* Link to Canva CV around entire col */}
                  <a
                    class="contact-col-link"
                    href="https://www.canva.com/design/DAE_05CSqs4/iDgDO5Fzh5BP6nlpExXjbQ/view?utm_content=DAE_05CSqs4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  >
                    <div className="col contact-col mx-3">
                      {/* CV icon */}
                      <div className="row text-center">
                        <img
                          className="icon-footer-img "
                          src="./images/contact-icon-resume.png"
                          alt="cv-icon"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright row */}
        <div className="row text-center" id="copyright">
          <div className="col">
            <p className="mt-3">© Copyright 2022. Made by Byron Devin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
