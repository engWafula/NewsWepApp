import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const localNewsApiHeaders={
    'x-api-key': 'Mke5XV8O96jR_dc3fzm5VqBUWxCQiE0O1zychNRvoHI'

}
 const baseUrl = 'https://api.newscatcherapi.com'

const createRequest=(url)=>({url,headers:localNewsApiHeaders})

export const localNewsApi = createApi({
    reducerPath:"localNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
      getLocalNews:builder.query({
          query:()=>createRequest(`/v2/search?q=uganda&lang=en&sort_by=relevancy`)
      })
    })//This  arrow  function  instantly  returns  an  object
})//This arrow function  instantly  returns  an  object

export const {
    useGetLocalNewsQuery
}=localNewsApi
