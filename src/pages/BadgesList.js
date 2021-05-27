import React from "react";
import './styles/BadgeList.css';
import twitterLogo from '../images/gorjeo.svg';
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="listStyle" key={badge.id}>
              <div>
                <div className="avatar">
                  <span>
                    <img alt="Avatar Logo" src={badge.avatarUrl} />
                  </span>
                </div>
                <div className="userContent">
                  <h5>{badge.firstName} {badge.lastName}</h5>
                  <div class="userTwitter">
                    <span>
                      <img src= {twitterLogo} alt="Twitter logo" />
                    </span>
                    <p>@{badge.twitter}</p>
                  </div>
                  <p> {badge.jobTitle} </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
