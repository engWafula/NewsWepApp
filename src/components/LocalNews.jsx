import React, { useEffect, useState } from 'react';
import {Select,Card,Typography,Row,Col,Avatar,Input} from "antd"
 import { useGetCryptosQuery } from '../services/CryptoApi';
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi';
import moment from "moment"

import Loader from "./Loader"


const {Title,Text} = Typography
const {Option} = Select


const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
export default function LocalNews({simplified}) {
    const[newsCategory,setNewsCategory]=useState('uganda')
    const {data:localNews, isFetching}=useGetCryptoNewsQuery({newsCategory,count:simplified?6:100});
    const [searchTerm, setSearchTerm] = useState('');
    const [news, setNews] = useState([]);
    console.log(news)

    useEffect(() => {
    //setCryptos(cryptosList?.data?.coins);

    const filteredData = localNews?.value.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setNews(filteredData);
  }, [localNews, searchTerm]);

  if(isFetching) return <Loader/>



  return(
    <>

    {!simplified && ( 
            <div className="search-crypto">
              <Input
                placeholder="Search your favourite local news"
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>
           )} 
           
          <Row gutter={[32, 32]} className="crypto-card-container">
      
        {
          news?.map((news, i)=>(
            <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                            <Title className="news-title" level={4}>{news.name.length >100 ? `${news.name.substring(0, 40)}` : news.name}</Title>
                <div className="news-image-container">
                
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} className='image' alt="" width="300" height="200" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.provider[0]?.name}</Text>
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