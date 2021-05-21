import { Component } from "react";

class BadgeForm extends Component {
  handleChange = (e) => {
    console.log({ target: e.target.value });
    console.log({ name: e.target.name });
  };
  handleClick = (e) => {
    console.log("Button was click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
