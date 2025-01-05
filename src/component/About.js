import React from "react";
import "./AboutStyle.css";
import images1 from "../img/neha.jpg";
import images2 from "../img/kartik.jpg";
import images3 from "../img/Anjali.jpg";
// import images4 from "../img/mohini.jpeg";
import images5 from "../img/rakesh.jpg";
// import images6 from "../img/rohan.jpeg";
import images7 from "../img/sonam.jpg";
import images8 from "../img/vikas.jpeg";

// import aboutImage from '../assets/about-image.jpg'; // Import your image here

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  {
    id: 1,
    name: "Neha ",
    package: "6 lpa",
    imageUrl: images1,
  },
  {
    id: 2,
    name: "Kartik Kumar",
    package: "8 lpa",
    imageUrl: images2,
  },
  { id: 3, name: "Anjali", package: "6 lpa", imageUrl: images3 },
  // {
  //   id: 4,
  //   name: "Mohini Yadav",
  //   package: "7.8 lpa",
  //   imageUrl: images4,
  // },
  { id: 5, name: "Rakesh", package: "7 lpa", imageUrl: images5 },
  // {
  //   id: 6,
  //   name: "Rohan Saini",
  //   package: "8 lpa",
  //   imageUrl: images6,
  // },
  {
    id: 7,
    name: "Soman Kushwaha",
    package: "9 lpa",
    imageUrl: images7,
  },
  {
    id: 8,
    name: "Vikas Singh",
    package: "10 lpa",
    imageUrl: images8,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const About = () => {
  // const setting = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };

  return (
    <section className="about-section">
      <div className="columns">
        <h2>About Us</h2>
      </div>
      <div className="about-container">
        <div className="row">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010140.jpg?t=st=1723036893~exp=1723040493~hmac=6c20a78be7291d6ab189411641c40c2701d5f505f4166dd7451c1befc68babe3"
              alt="About Us"
            />
          </div>
          <div className="about-content">
            <h3>Build Your Dream</h3>
            <h1>5+ Years Of Undefeated Success</h1>
            <p>
              Tech Mentor is BEST Online Training Center in India & BEST Online
              Training Institute in India is a leading institute that provides
              more than 300+ IT and non-IT industry standard training courses
              for students, working professionals, job seekers, and Course
              employees with 100% Placement Guarantee on selected courses in
              India.
            </p>
            <p>
              Tech Mentor India’s training programs are designed in sync with
              current industry trends and job openings in MNCs. Shining Future
              Technology India prepares the course delivery structure as per
              students’ requirements and offers assistance to each student to
              achieve desired career goals.
            </p>
          </div>
        </div>
      </div>

      {/* ________________________close_________ */}
      <div className="container">
        {/* Upper Row with Text Animation (Right to Left) */}
        <div className="upper-row">
          <h1 className="moving-text">
            Program fee(incl. GST) - 45 days salary of annual CTC
          </h1>
        </div>

        {/* Second Row with Four Columns */}
        <div className="second-row">
          <div className="column">
            <h1>16 Weeks</h1>
            <h3>Program Duration</h3>
          </div>
          <div className="column">
            <h1>95%</h1>
            <h3>Placement Record</h3>
          </div>
          <div className="column">
            <h1>1000+</h1>
            <h3>Students</h3>
          </div>
          <div className="column">
            <h1>20+</h1>
            <h3>Exp.. Facilities</h3>
          </div>
        </div>
        {/* our placed students */}
        <div className="slider-container">
          <h2 className="section-title">Our Placed Students</h2>
          <p className="section">
            The more that you read, the more things you will know. The more that
            you learn, the more places you’ll go
          </p>
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} className="slide">
                <img
                  src={image.imageUrl}
                  alt={image.name}
                  className="slide-image"
                />
                <div className="caption">
                  <h3>Congratulations {image.name}</h3>
                  <p>Package: {image.package}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;
