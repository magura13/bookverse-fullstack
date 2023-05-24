import Header from "./components/header";
import styled from "styled-components";
import Search from "./components/search";
import LastReleasedBooks from "./components/releases";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #c9f0ff, #eafffd); 
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleasedBooks />
    </AppContainer>
    
  );
}

export default App;
