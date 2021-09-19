import React from "react";
import { StyledDiv, StyledHeader } from "./styles";
import logo from "../../assets/logo3-borda_branca.png";

const Header = ({ children }) => {
  const imgStyle = {
    marginTop: '10px',
    width: "125px",
  };

  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <h1>
            <img src={ logo } style={ imgStyle } alt="logo" />
          </h1>
        </StyledDiv>
      </StyledHeader>
      {children}
    </>
  );
};

export default Header;
