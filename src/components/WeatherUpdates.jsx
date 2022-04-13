
import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {mobile} from '../responsive'
import {useGetNewsQuery} from '../services/NewsApi';
import CurrentWeather from './CurrentWeather';
import Forecast from './ForeCast';
import Search from './Search';
import Loader from './Loader';



function WeatherUpdates() {
  const [searchResult, setSearchResult] = useState('kampala');
  const {isFetching} = useGetNewsQuery(10);

  
  const url = `https://api.weatherapi.com/v1/forecast.json?key=d25f33f4635b4880bb8102136220604&q=${searchResult}`;
  const  {data} = useRequest(url);




  if(isFetching) return <Loader/>
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
