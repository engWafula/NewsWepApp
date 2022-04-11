import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, 
  ReadOutlined,
  BulbOutlined,
   FundOutlined,
    MenuOutlined } from '@ant-design/icons';

import icon from '../images/news.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Group 15</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/tech_news">Tech News</Link>
        </Menu.Item>
       {/* <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>  */}
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">World News</Link>
        </Menu.Item>
        <Menu.Item icon={<ReadOutlined />}>
          <Link to="/localnews">Local News</Link>
        </Menu.Item>

        <Menu.Item icon={<ReadOutlined />}>
          <Link to="/weather">Weather</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
