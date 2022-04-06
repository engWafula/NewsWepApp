
import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';
//import useRequest  from '..'
import {Select,Card,Typography,Row,Col,Avatar,Input} from "antd"
import Loader from "./Loader"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   
    
    <div>
      <ToastContainer />
      <h2 style={{ margin: '20px 0px' }}>WeatherApp</h2>
      <Search setSearchResults={setSearchResult} />
      {Object.keys(data).length !== 0 && (
        <>
          <CurrentWeather data={data} />
          <Forecast data={data.forecast} />
        </>
      )}
    </div>

  );
}

export default WeatherUpdates;
