import styled from "styled-components";
import GuildRanking from "../components/GuildSelect/GuildRanking";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";

const Container = styled.div`
  background: var(--gradient-purple-dark);
  min-height: 110vh;
  padding: 40px 0;
`;

const GuildDashboard = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <GuildRanking />
        </Nav>
      </Container>
    </Header>
  );
};

export default GuildDashboard;
