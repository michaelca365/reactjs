import React, { Component } from "react";
import "./styles/BadgeHome.css";
import backgroundAstro from '../images/astronauts.svg';
import PlatziConf from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
class BadgeHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="container">
          <div className="info">
              <img src={PlatziConf} alt="Logo" />
              <h5>PRINT YOUR BADGES</h5>
              <p>The easiest way to manage your conference</p>
              <Link to="/badges" ><button type="button" className="btn btn-success">Start Now</button></Link>
          </div>
          <div className="logo">
            <img src={backgroundAstro} alt="astro" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeHome;
