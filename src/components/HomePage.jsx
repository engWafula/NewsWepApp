import React from 'react';
import {Typography} from "antd"
import {Link } from "react-router-dom"
import {useGetNewsQuery} from '../services/NewsApi';
import News from './News';
import LocalNews from './LocalNews';
import Tech from './Tech';
import Loader from './Loader';


//i destructure the Typography component in antd  to  get  The Title property
const {Title} =Typography

export default function HomePage() {
    const {isFetching} = useGetNewsQuery(10);

    if(isFetching) return <Loader/>
    return (
    <>
      <Title level={2} className="heading"></Title>
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
