import React from "react";
import { Component, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // ___________________________________________

  // _________________________
  render() {
    return (
      <>
        <div className="containers-1">
          <nav>
            <a>
              <h2>
                Tech <span>Mentors</span>
              </h2>
            </a>
            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "active" : "#navbar"}
              >
                <li>
                  <Link className="active" to="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>

                <li>
                  <Link to="/service">COURSES</Link>
                </li>
                <li>
                  <Link to="/certificate">CERTIFICATE</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT US</Link>
                </li>

                <Link to="/book">
                  <button className="button">Register</button>
                </Link>
              </ul>
            </div>

            <div id="mobile" onClick={this.handleclick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
          <div className="upper-row-1">
            <h1 className="moving-text-1">
              New Morning/Eveining batch going to Start from 21th Octuber 2024
              (8:30AM/PM). Registration is going on hurry up +9185273 45379
            </h1>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
