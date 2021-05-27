import { Component, Fragment } from "react";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../API";
import Skeleton from "react-loading-skeleton";
class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: true });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    if (this.state.loading) {
      return (
        <Fragment>
          <div className="BadgeNew__hero">
            <img
              className="BadgeNew__hero-image img-fluid"
              src={header}
              alt="Logo"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Skeleton
                  height="30px"
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  count="3"
                />
              </div>
              <div className="col-6">
                <Skeleton
                  height="30px"
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  count="3"
                />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://avatars.githubusercontent.com/u/79426814?v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValue={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
