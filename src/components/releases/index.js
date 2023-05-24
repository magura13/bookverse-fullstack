import { LastReleases } from "./releasesData.js";
import styled from "styled-components";
import { Title } from "../title/index.js";
import RecommendCard from "../recommendation-card/index.js";
import Book2 from "../../images/livro2.png";

const LastReleasesContainer = styled.section`
  background-image: linear-gradient(90deg, #efeff0, #fff);
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const LastReleasesChild = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  gap:11px;
`;
function LastReleasedBooks() {
  return (
    <LastReleasesContainer>
      <Title fontSize="36px" color="#6B5E62">
        Last releases
      </Title>
      <LastReleasesChild>
        {LastReleases.map((book) => (
          <img src={book.src}></img>
        ))}
      </LastReleasesChild>
      <RecommendCard
      title="You should like:"
      subtitle="Angular 11"
      description="Building an application integrated with google platform"
      img={Book2}
      />
    </LastReleasesContainer>
  );
}

export default LastReleasedBooks;
