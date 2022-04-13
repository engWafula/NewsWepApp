import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Tech, HomePage, News,WeatherUpdates, Navbar,LocalNews } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
        
            <Route exact path="/tech_news">
              <Tech />
            </Route>
            <Route exact path="/localnews">
              <LocalNews />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/weather">
              < WeatherUpdates/>
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
           Group 15 Inc.
          </Link> 
          <br />
          All Rights Reserved.
          <br />
          Built by  Group 15
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Tech News</Link>
          <Link to="/localnews">Local News </Link>
          <Link to="/news">World News </Link>
          <Link to="/Weather">Weather Updates </Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
