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
                    <img src={badge.image} alt="user avatar" />
                  </span>
                </div>
                <div className="userContent">
                  <h5>
                    {badge.name}
                  </h5>
                  <div className="userTwitter">
                    <span>
                      <img src={twitterLogo} alt="TwitterLogo" />
                    </span>
                    <p>@{badge.origin.name}</p>
                  </div>
                  <p>{badge.species}</p>
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
