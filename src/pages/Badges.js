import React from "react";
import BadgesList from "./BadgesList";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import { Link } from "react-router-dom";
import api from "../API";
import Skeleton from "react-loading-skeleton";
import PageError from "../components/pageError.js";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  componentDidMount() {
    this.fetchData();
    this.unsetInterval = setInterval(this.fetchData, 10000);
  }

  componentWillUnmount(){
    clearInterval(this.unsetInterval);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };
  render() {
    if (this.state.loading && !this.state.data) {
      return (
        <Skeleton
          style={{
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            alignContent: "center",
          }}
          width="548px"
          height="112px"
          count={5}
          animation="wave"
        />
      );
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              { this.state.loading && 'Loading..' }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
