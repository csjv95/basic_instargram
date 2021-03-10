import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import GetUserData from './service/get_user_data';


const getUserData = new GetUserData(process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN);

ReactDOM.render(
  <React.StrictMode>
    <App getUserData={getUserData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
