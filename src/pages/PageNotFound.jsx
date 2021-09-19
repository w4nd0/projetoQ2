import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";

import NotFound from "../assets/notfound.png";

const Container = styled.div`
  background: var(--gradient-brown-dark);
  width: 100vw;
  height: 100vh;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNotFound = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <LogoContainer>
            <img src={NotFound} alt="Not Found" />
          </LogoContainer>
        </Nav>
      </Header>
    </Container>
  );
};

export default PageNotFound;
