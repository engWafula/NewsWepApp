import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherHeaders={
   
    'key': 'd25f33f4635b4880bb8102136220604'
}
 const baseUrl ="https://api.weatherapi.com/v1"

const createRequest=(url)=>({url,headers:weatherHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:"weatherUpdate",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
      getWeather:builder.query({
          query:({location,count})=>createRequest(`/forecast.json?q=${newsCategory}`)
      })
    })//This  arrow  function  instantly  returns  an  object
})//This arrow function  instantly  returns  an  object

export const {
    useGetCryptoNewsQuery
}=cryptoNewsApi
