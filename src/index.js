import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import GetUserData from "./service/get_user_data";
import { BrowserRouter } from "react-router-dom";

const getUserData = new GetUserData(
  process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App getUserData={getUserData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
