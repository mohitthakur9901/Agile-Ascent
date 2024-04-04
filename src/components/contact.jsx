import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_ServiceID,
        process.env.REACT_APP_TemplateID,
        e.target,
        process.env.REACT_APP_PublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>{" "}
                {props.data ? props.data.address : "loading"}
              </p>
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social">
              <ul>
                <li>
                  <a href={"https://www.linkedin.com/in/mohit-thakur-648ab119b/"}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href={"https://twitter.com/MOHIT__002"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={"https://github.com/mohitthakur9901"}>
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container text-center">
          <p>
            &copy; <span year="2024"></span> Agile Ascent. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
