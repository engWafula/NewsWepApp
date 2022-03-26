import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Select,Card,Typography,Row,Col,Avatar,Input} from "antd"
import Loader from "./Loader"
import {   useGetLocalNewsQuery } from '../services/LocalNewsApi';
import moment from "moment"


const {Title,Text} = Typography
const {Option} = Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


export default function LocalNews({ simplified}) {

  const count = simplified ? 10 : 100;

    const { data: localNews, isFetching } = useGetLocalNewsQuery();
    const [searchTerm, setSearchTerm] = useState('');
    const [news, setNews] = useState([]);
    console.log(news)

    useEffect(() => {
    //setCryptos(cryptosList?.data?.coins);

    const filteredData = localNews?.articles.filter((item) => item.title.toLowerCase().includes(searchTerm));

    setNews(filteredData);
  }, [localNews, searchTerm]);

  if(isFetching) return <Loader/>


  return(
    <>

{!simplified && ( 
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
       )} 
       
      <Row gutter={[32, 32]} className="crypto-card-container">
  
    {
      news?.map((news, i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className="news-card">
          <a href={news.link} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <Title className="news-title" level={4}>{news.title}</Title>
              <img src={news?.media  || demoImage} alt="" width="100" height="100" />
            </div>
            <p>{news.summary.length > 100 ? `${news.summary.substring(0, 100)}...` : news.summary}</p>
            <div className="provider-container">
              <div>
                <Avatar src={news?.media || demoImage} alt="" />
                <Text className="provider-name">{news.author}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </div>
          </a>
        </Card>
      </Col>
      ))
    }
    </Row>
    </>

  )
}