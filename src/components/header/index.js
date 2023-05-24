import Logo from "../logo";
import HeaderOptions from "../header-options";
import HeaderIcons from "../header-icons";
import styled from "styled-components";

const HeaderComponent = styled.header `

  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <HeaderComponent>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderComponent>
  );
}

export default Header