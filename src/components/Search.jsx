import React, { useState } from 'react';
import styled from 'styled-components';
import {Select,Card,Typography,Row,Col,Avatar,Input} from "antd"
function Search({ setSearchResults }) {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
    setSearch('');
  };


  return (
    <StyledSearch>
      <form onSubmit={onSubmit}>
        <Input
          type='text'
          placeholder='Search your any location and hit Enter'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  margin-bottom: 20px;
  margin-left:600px;
  input {
    width: 60%;
    height: 45px;
    border-radius: 10px;
    padding-left: 20px;
  }
`;

export default Search;
