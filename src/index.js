import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

ReactDOM.render(<BadgeNew />, container);
