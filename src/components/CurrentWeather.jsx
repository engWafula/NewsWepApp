import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive'

function CurrentWeather({ data }) {
  return (
    <StyledWeather>
      <header>
        <div className='current-weather box-shadow'>
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />

          <Title>{data.current.temp_c}°C</Title>

          <div className='content'>
            <h5>Precipitation: {data.current.precip_in}</h5>
            <h5>Wind: {data.current.wind_kph} km/h</h5>
          </div>
        </div>
        <div className='location box-shadow'>
          <h2>{data.location.region}</h2>
          <h3>{data.location.country}</h3>
          <h4>{data.location.name}</h4>
        </div>
      </header>
    </StyledWeather>
  );
}

const Title= styled.h2`

`

const StyledWeather = styled.div`


header {
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    margin-top:80px;
    margin-left:180px;
    ${mobile({
      padding:'7px',
      flexDirection:'column',
      marginTop:'15px',
      marginLeft:'150px',
      width:'5px',
      justifyContent: 'space-evenly',
    
      })}
 
    .current-weather {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      padding: 10px;
      marginLeft:10px;
      ${mobile({
       marginBottom:'25px',
      
        })}

      img {
        width: 80px;
        height: 80px;
      }

      h1 {
        font-size: 3rem;
      }
      
      .content {
        h5{
          font-weight: normal;
        }
      }
      
    }
    
    .location{
      width: 350px;
      padding: 20px;

      h2{
        text-align: right;
        font-size: 1rem;
        margin-bottom: 10px;
      }

      h3{
        text-align: right;
        font-size: .8rem;
        margin-bottom:0px;
      }
      h4{
        text-align: right;
        font-size: .8rem;
        font-weight: 500;
        margin-top:10px;
      }
    }

`;

export default CurrentWeather;
