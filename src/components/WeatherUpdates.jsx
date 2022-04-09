
import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';
import styled from "styled-components";
import {Select,Card,Typography,Row,Col,Avatar,Input} from "antd"
import Loader from "./Loader"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {mobile} from '../responsive'
// Components
import CurrentWeather from './CurrentWeather';
import Forecast from './ForeCast';
import Search from './Search';

function WeatherUpdates() {
  const [searchResult, setSearchResult] = useState('kampala');
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${searchResult}`;
  const  {data} = useRequest(url);

  //const {loading} =useRequest()



  return (
   
    
    <>
      <ToastContainer />
      <Wrapper>
      <Search setSearchResults={setSearchResult} />
      {Object.keys(data).length !== 0 && (
        <>
          <CurrentWeather data={data} />
          <Forecast data={data.forecast} />
        </>
      )}
    </Wrapper>
    </>

  );
}


const Wrapper=styled.div`
margin:50px;
align-items:center;
justify-content:center;
margin-left:100px;
${mobile({

  margin:'0px',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:'0px'
  })}
`

export default WeatherUpdates;
