import React, { useState } from "react";
import "./Service.css";
import serviceImage1 from "../img/linux.png";
import serviceImage2 from "../img/plsql.png";
import serviceImage3 from "../img/pyth.jpg";
import serviceImage4 from "../img/aws.png";
import serviceImage5 from "../img/perl.jpg";
import serviceImage6 from "../img/tools.png";
import call from "../img/calls.png";
import resume from "../img/resume.png";
import interview from "../img/int.png";
import user from "../img/user.png";
import clock from "../img/clock.png";
import dev from "../img/dev.png";
import tel from "../img/tel.png";
import learn from "../img/learn.png";

const services = [
  {
    id: 1,
    name: "Linux/Unix/Shell Scripting",
    image: serviceImage1,
    link: "#web-development",
  },
  {
    id: 2,
    name: "MYSQL/SQL/PLSQL",
    image: serviceImage2,
    link: "#app-development",
  },
  {
    id: 3,
    name: "Python",
    image: serviceImage3,
    link: "#seo-optimization",
  },
  {
    id: 4,
    name: "AWS Service",
    image: serviceImage4,
    link: "#web-development",
  },
  {
    id: 5,
    name: "Perl Scripting",
    image: serviceImage5,
    link: "#app-development",
  },
  {
    id: 6,
    name: "All service tools",
    image: serviceImage6,
    link: "#seo-optimization",
  },
];

const features = [
  {
    icon: call,
    title: "Placement Support",
    description:
      "Complete support from our dedicated placement team until you get a job",
  },
  {
    icon: resume,
    title: "Resume Building",
    description: "Resume sharing in our network of 70+ hiring partners",
  },
  // {
  //   icon: "/path-to-job-application-icon",
  //   title: "AlmaX Job Application",
  //   description: "End to end application tracking of multiple interview rounds",
  // },
  {
    icon: interview,
    title: "Interviews Preparation",
    description: "Professional interviews assistance",
  },
  {
    icon: user,
    title: "Dedicated Career Coach",
    description: "Expert career coaches to guide you throughout the program",
  },
  {
    icon: "/path-to-growth-champion-icon",
    title: "Growth Champion",
    description:
      "Know learning strategies and get mentorship from our top Educators",
  },
];

// ___________________________

// __________________________________________________-
const Service = () => {
  return (
    <section className="service-section">
      <div className="course">
        <h2>ALL MY COURSES</h2>
      </div>
      <div className="service-container">
        {services.map((service) => (
          <div className="coursename">
            <div className="service-card" key={service.id}>
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-content">
                <a href={service.link} className="service-link">
                  {service.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* --------my servises------- */}
      <div className="course">
        <h2>Carrier service</h2>{" "}
      </div>
      <div className="feature-section">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      {/* feauter _____________ */}

      <div className="course">
        <h2>A Flexible Program Created for you</h2>
      </div>
      <div className="faq-section">
        <div className="faq-item">
          <img src={dev} alt="Code" />
          <h3>Develop skills for real career growth</h3>
          <p>
            Cutting-edge curriculum designed in guidance with industry and
            academia to develop job-ready skills
          </p>
        </div>
        <div className="faq-item">
          <img src={learn} alt="Code" />
          <h3>
            Learn from experts active in their field, not out-of-touch trainers
          </h3>
          <p>
            Leading practitioners who bring current best practices and case
            studies to sessions that fit into your work schedule.
          </p>
        </div>
        <div className="faq-item">
          <img src={tel} alt="Code" />
          <h3>Learn by working on real-world problems</h3>
          <p>
            projects involving real world data sets with virtual labs for
            hands-on learning
          </p>
        </div>
        <div className="faq-item">
          <img src={clock} alt="Code" />
          <h3>How will I resolve my doubts?</h3>
          <p>
            You can get your doubts resolved by connecting with our subject
            matter experts over text or video call!
          </p>
        </div>
      </div>

      {/* ___________________carriculam section_________ */}
    </section>
  );
};

export default Service;
