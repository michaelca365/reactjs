import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from './components/App';


const container = document.getElementById("app");

ReactDOM.render(<App />, container);
