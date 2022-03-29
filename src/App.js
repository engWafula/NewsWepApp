import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Tech, HomePage, News, Cryptocurrencies, CryptoDetails, Navbar,LocalNews } from './components';
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
            {/* <Route exact path="/exchanges">
              <Exchanges />
            </Route> */}
            <Route exact path="/tech_news">
              <Tech />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/localnews">
              <LocalNews />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
           Group 19 Inc.
          </Link> 
          <br />
          All Rights Reserved.
          <br />
          Designed by  Group 19
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Tech News</Link>
          <Link to="/localnews">Local News </Link>
          <Link to="/news">World News </Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
