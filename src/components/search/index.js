import styled from "styled-components";
import Input from "../input";
import { useState } from "react";
import { Books } from "./searchdata.js";

const SearchComponent = styled.section`
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd);
  color: #6b5e62;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Title = styled.h2`
  color: #6b5e62;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Result = styled.div `
    display: flex;
    background-image: linear-gradient(90deg, #c9f0ff, #CFDFDD);
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid #6b5e62;
    }
`


function Search() {
  const [searchedBook, setSearchedBook] = useState([]);
  console.log(searchedBook);
  return (
    <SearchComponent>
      <Title>Let's get started?</Title>
      <Subtitle>Find your book at our shelf</Subtitle>
      <Input
        placeholder="Type down your next book"
        onChange={(event) => {
          const inputText = event.target.value;
          const result = Books.filter((book) => book.name.includes(inputText));
          setSearchedBook(result);
        }}
      />
      {searchedBook.map((book) => (
        <Result>
          <p>{book.name}</p>
          <img src={book.src} />
        </Result>
      ))}
    </SearchComponent>
  );
}

export default Search;
