import logo from "../../images/open-book.png";
import styled from "styled-components";

const LogoComponent = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  color: #6b5e62;
`;
const LogoImageComponent = styled.img`
  margin-right: 10px;
`;
const LogoTextComponent = styled.p``;
function Logo() {
  return (
    <LogoComponent>
      <LogoImageComponent
        width="50px"
        height="50px"
        src={logo}
        alt="BookVerse logo"
      ></LogoImageComponent>
      <LogoTextComponent>
        Book
        <strong>Verse</strong>
      </LogoTextComponent>
    </LogoComponent>
  );
}

export default Logo;
