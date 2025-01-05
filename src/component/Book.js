import React, { useState } from "react";
import "./Book.css";
import book from "../img/book.png";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    mobile: "",
    email: "",
    message: "",
  });

  const courses = ["Linux", "Unix", "SQL", "MySQL", "CSS", "HTML"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="book-now-container">
      <div className="image-container">
        <img
          src={book}
          alt="Booking Illustration"
          className="responsive-image"
        />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Book;
