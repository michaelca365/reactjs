import React from "react";
import twitterLogo from "../images/gorjeo.svg";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>
            No badge were found
            <Link className="btn btn-primary" to="/badges/new">
              Create New Badge
            </Link>
          </h3>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="listStyle" key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                <div>
                  <div className="avatar">
                    <span>
                      <Gravatar
                        className="gravatar"
                        email={badge.email}
                        alt="user avatar"
                      />
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
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
