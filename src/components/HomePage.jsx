import React from 'react';
import millify from 'millify';
import {Row,Col,Statistic,Typography} from "antd"
import {Link } from "react-router-dom"
import { useGetCryptosQuery } from '../services/CryptoApi';
import News from './News';
import LocalNews from './LocalNews';
import Tech from './Tech';
import Loader from './Loader';

//i destructure the Typography component in antd  to  get  The Title property
const {Title} =Typography

export default function HomePage() {
    const {data,isFetching} = useGetCryptosQuery(10);
    const globalStats =data?.data?.stats
    if(isFetching) return <Loader/>
    // console.log(data)
    return (
    <>
      <Title level={2} className="heading">Current Weather Updates</Title>
       <Row gutter={[32, 32]}>
         <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col> 
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top  Tech news In The World</Title>
        <Title level={3} className="show-more"><Link to="/tech_news">Show more</Link></Title>
      </div>
      <Tech simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Local News</Title>
        <Title level={3}><Link to="/localnews">Show more</Link></Title>
      </div>
      <LocalNews simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Global World News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
   

  
}
