import React from "react";
import twitterLogo from "../images/gorjeo.svg";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteresdBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteresdBadges(result);
  }, [badges, query]);

  return {query, setQuery, filteredBadges};
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>
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
      <div className="form-group">
        <label>Filter badges</label>
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          type="text"
          className="form-control"
        ></input>
      </div>
      {filteredBadges.map((badge) => {
        return (
          <li className="listStyle" key={badge.id}>
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
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

export default BadgesList;
