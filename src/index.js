import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import GetUserName from './service/get_user_name';


const getUserName = new GetUserName(process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN);

ReactDOM.render(
  <React.StrictMode>
    <App getUserName={getUserName}/>
  </React.StrictMode>,
  document.getElementById('root')
);
