import { Component, Fragment } from "react";

import header from "../images/platziconf-logo.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../API";
import './styles/BadgeEdit.css'
import Skeleton from "react-loading-skeleton";
class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount(){
    this.fetchData()
  }

  async fetchData(){
    this.setState({
      loading: true,
      error: null
    });
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );

      this.setState({
        loading: false,
        form: data,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error,
      })
    }

  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId ,this.state.form);
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
          <div className="BadgeEdit__hero">
            <img
              className="BadgeEdit__hero-image img-fluid"
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
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit;
