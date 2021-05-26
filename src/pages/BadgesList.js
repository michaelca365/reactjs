import React from "react";
import twitterLogo from "../images/gorjeo.svg";
import "./styles/BadgeList.css";
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
                    <img src={badge.avatarUrl} alt="user avatar" />
                  </span>
                </div>
                <div className="userContent">
                  <h5>
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <div className="userTwitter">
                    <span>
                      <img src={twitterLogo} alt="TwitterLogo" />
                    </span>
                    <p>@{badge.twitter}</p>
                  </div>
                  <p>{badge.jobTitle}</p>
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
