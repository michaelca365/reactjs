import { Component } from "react";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Michael"
                lastName="Camelo"
                twitter="@MikeSteve"
                jobTittle="Fullstack developer"
                avatarUrl="https://avatars.githubusercontent.com/u/79426814?v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
