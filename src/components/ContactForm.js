// Imports
import "./ContactForm.css";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  //state value that tracks the progress of the email sending process "send" --> "sending" --> "send"
  const [emailSentStatus, setEmailSentStatus] = useState("Send");

  // state value that tracks if an email has been sent
  const [sentState, setSentState] = useState(false);

  //useRef, selecting contact form
  const form = useRef();

  //handle contact form submit fuction (send email)
  const handleEmailSubmit = async (e) => {
    //stop automatic page redirect/reload after form submission
    e.preventDefault();

    //upadate emailSentStatus to reflact that sending prcess has begun. This info shown on send button.
    setEmailSentStatus("Sending...");

    // try send email
    try {
      emailjs
        .sendForm(
          "service_2klec3g",
          "template_c34qumj",
          form.current,
          "YfbHORbLPiFlFq2bg"
        )

        //alert user that email sent successfully
        .then(
          (result) => {
            console.log(result.text);
            alert("Thank you for the message. I will be in touch shortly.");
          },
          (error) => {
            console.log(error.text);
          }
        );

      //Set state value that tracks if the email is sent to true. if code gets here, email sent
      setSentState(true);
    } catch (e) {
      //if error, catch, print and alert user

      console.log(
        "Custom error message:  emailjs.sendForm failed [ContactForm.js]"
      );

      alert(
        "Email failed to send. Please send your email to hello@byrondevin.com"
      );

      console.log(e);
    }

    //Update emailSentStatus to reflact that sending prcess ended. back to original value
    //This value is displayed on send button
    if (sentState === true) {
      setEmailSentStatus("Send again");
    } else {
      setEmailSentStatus("Send");
    }
  };

  return (
    <div className="ContactForm pb-5" id="contactSection">
      <div className="container formContainer rounded  py-4 mt-5 pt-5">
        <div className="row">
          {/* Spacing col for responsive design */}
          <div className="col-0 col-lg-2"></div>

          {/* Col with contact heading, buttons and form */}
          <div className="col">
            {/* H1 row */}
            <div className="row">
              <h2 className="head1">Contact</h2>
            </div>

            {/* Contact social icons & labels*/}
            <div className="container-fluid mb-4">
              {/* social icons row */}
              <div className="row mt-3 ">
                {/* Github col */}
                {/* Link to Github profile around entire col */}
                <a
                  class="contact-col-link"
                  href="https://github.com/byrondevin"
                >
                  <div className="col contact-col mx-3">
                    {/* Github icon */}
                    <div className="row">
                      <img
                        className="icon-contact-img"
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
                    <div className="row">
                      <img
                        className="icon-contact-img"
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
                    <div className="row">
                      <img
                        className="icon-contact-img"
                        src="./images/contact-icon-resume.png"
                        alt="cv-icon"
                      />
                    </div>
                  </div>
                </a>
              </div>

              {/* labels row */}
              <div className="row pt-1">
                {/* Github col */}
                {/* Link to Github profile around entire col */}
                <a
                  class="contact-col-link"
                  href="https://github.com/byrondevin"
                >
                  <div className="col contact-col mx-3">
                    {/* Github label */}
                    <div className="row mt-1">
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
                  <div className="col contact-col mx-3">
                    {/* Linkedin label */}
                    <div className="row mt-1">
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
                  <div className="col contact-col mx-3">
                    {/* CV label */}
                    <div className="row mt-1">
                      <p className="contact-label">CV</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form Container*/}
            <div className="container  px-5 ">
              {/* contact form. submission triggers handleEmailSubmit function that sends an email to hello@byrondevin.com */}
              <form ref={form} onSubmit={handleEmailSubmit} id="contact">
                <div className="row mb-3 ">
                  <label className="contactFormLabels " htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="rounded smInput"
                    type="text"
                    id="nameInput"
                    required
                    name="name"
                  />
                </div>

                <div className="row mb-3 ">
                  <label className="contactFormLabels" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="rounded smInput"
                    type="email"
                    id="email"
                    required
                    name="email"
                  />
                </div>

                <div className="row mb-3">
                  <label className="contactFormLabels" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    className="rounded bgInput"
                    id="message"
                    required
                    name="message"
                  />
                </div>

                <button
                  className="btn btn-outline-light"
                  id="sendBtn"
                  type="submit"
                  value="Send"
                >
                  {emailSentStatus}
                </button>
              </form>
            </div>
          </div>

          {/* Spacing col for responsive design */}
          <div className="col-0 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
