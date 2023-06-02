import styled from "styled-components";
import Search from "../components/search";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function Favorites() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
    
  );
}

export default Favorites;
