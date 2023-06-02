import styled from "styled-components";
import { Link } from "react-router-dom";

const textOptions = ["Categorys", "Favorites", "Shelf"];

const HeaderOptionsComponent = styled.ul`
  display: flex;
`;
const HeaderOptionComponent = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

function HeaderOptions() {
  return (
    <HeaderOptionsComponent>
      {textOptions.map((text) => (
        <Link to={`/${text.toLowerCase()}`}>
          <HeaderOptionComponent>
            <p>{text}</p>
          </HeaderOptionComponent>
        </Link>
      ))}
    </HeaderOptionsComponent>
  );
}

export default HeaderOptions;
