import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";
import Tutorial from "../components/Tutorial";

import styled from "styled-components";
import { useInfoUser } from "../provider/user";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
  min-height: 100vh;
  width: 100vw;
`;

const TutorialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 100px 0 0 40px;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 768px) {
    section {
      width: 100%;
    }
  }
`;

const TutorialPage = () => {
  const { infoUser } = useInfoUser();

  const history = useHistory();

  if (!infoUser.authenticated) {
    history.push("/login");
  }

  return (
    <Container>
      <Header>
        <Nav>
          <TutorialContainer>
            <Tutorial />
          </TutorialContainer>
          <Footer />
        </Nav>
      </Header>
    </Container>
  );
};

export default TutorialPage;
