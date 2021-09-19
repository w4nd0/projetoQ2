import GuildQuests from "../components/GuildQuests";
import Header from "../components/Header";
import styled from "styled-components";
import Nav from "../components/Navigation/Nav";


const Container = styled.div`
  background: var(--gradient-purple-dark);
  min-height: 110vh;
  padding: 40px 0;
`;

const GuildTasks = () => {
  return (
    <>
      <Header>
      <Container>
        <Nav>
          <GuildQuests />
        </Nav>
      </Container>
    </Header>
    </>
  );
};

export default GuildTasks;
