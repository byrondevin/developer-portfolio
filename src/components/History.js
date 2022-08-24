// Imports
import "./History.css";
import Education from "./Education";
import WorkExp from "./WorkExp";

function History() {
  return (
    <div className="History container-fluid mt-5 pt-5" id="historySection">
      {/* H2 heading row */}
      <div className="row">
        <h2 className="head1">History</h2>
      </div>

      {/* H3 subheading row*/}
      <div className="row mt-3 sticky-top2 align-items-center" id="subHeadRow">
        {/* Work experience subheading col */}
        <div className="col-7 py-3 shadow sticky " id="workExpSubHead">
          <p className="head2 m-0 "> Work Experience</p>
        </div>

        {/* Education subheading col */}
        <div className="col-5 py-3 shadow" id="eduSubHead">
          <p className="text-light head2 m-0 ">Education</p>
        </div>
      </div>

      {/* Jobs and Education. Separate component for each type */}

      <Education
        id="Hyperion"
        studyPlace="HyperionDev"
        courseName="Full stack web development bootcamp"
        year="2022"
        logo="/images/hyperiondev-logo.jpeg"
        link="https://www.hyperiondev.com/bootcamps/web-development/"
      />

      <WorkExp
        id="las"
        studyPlace="Lost at Sea Marketing"
        courseName="Wordpress web development & design"
        year="2020 - 2022"
        logo="/images/las-logo-small.png"
        link="https://lostatseamarketing.com/"
        email="bas@lostatseamarketing.com"
        descriptionList={[
          "Woocommerce web development",
          "Web design",
          "Website maintenence",
          "Client management",
        ]}
      />

      <Education
        id="Google"
        studyPlace="Google Skillshop"
        courseName="Google Ads Search & Video"
        year="2021"
        logo="/images/google-logo-icon.png"
        link="https://skillshop.exceedlms.com/student/catalog/list?category_ids=2844-google-ads-certifications"
      />

      <WorkExp
        id="vc"
        studyPlace="Vacancy.care"
        courseName="SEO Manager"
        year="2019 - 2020"
        logo="/images/vacancy.care.jpeg"
        link="https://www.vacancy.care/"
        email="simon@vacancy.care.com"
        descriptionList={[
          "Designing an SEO strategy from scratch",
          "Managing the SEO strategy's implementation",
          "Creating optimised content",
          "Designing shareable tools to earn relevant backlinks",
        ]}
      />

      <Education
        id="Sae"
        studyPlace="SAE Cape Town"
        courseName="Guerilla Filmmaking"
        year="2018"
        logo="/images/SAE-logo.jpeg"
        link="https://www.sae.edu.za/courses/part-time-courses/digital-filmmaking-course"
      />
      <WorkExp
        id="travelTractions"
        studyPlace="Travel Tractions Marketing"
        courseName="SEO Specialist"
        year="2018 - 2019"
        logo="/images/Travel-Tractions-Logo2.png"
        link="https://traveltractions.com/"
        email="matt@traveltractions.com"
        descriptionList={[
          "Website audit to SEO strategy",
          "Link building/earning",
          "Keyword research ( Ahrefs & GSC)",
          "Optimised content creation & optimisation",
          " Reporting and analytics",
        ]}
      />
      <Education
        id="Uct"
        studyPlace="University of Cape Town"
        courseName="BA: Journalism"
        year="2017"
        logo="/images/uct-logo.png"
        link="https://www.uct.ac.za/"
      />
    </div>
  );
}

export default History;
