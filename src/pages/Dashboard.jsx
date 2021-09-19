import { useEffect } from "react";
import QuestList from "../components/QuestList";
import { useInfoGuild } from "../provider/guild";
import { useInfoQuests } from "../provider/quests";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";
import { useInfoUser } from "../provider/user";
import GuildInfo from "../components/GuildSelect/GuildInfo";
import ResumeUser from "../components/Profile";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
  min-height: 100vh;
  width: 100vw;
`;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 69px 0 0 40px;
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;

  section {
    /* width: 100%; */
    /* max-width: 300px; */
  }

  @media (max-width: 768px) {
    section {
      width: 100%;
      max-width: 300px;
    }

    .user {
      order: 1;
    }

    .quests {
      order: 2;
    }
  }

  @media (max-width: 1200px) {
    section {
      width: 100%;
      max-width: 100%;
    }

    .user {
      order: 1;
    }

    .quests {
      order: 2;
    }
  }
`;

const Dashboard = () => {
  const { updateMainGuilds, getUserGuilds } = useInfoGuild();
  const { getQuests } = useInfoQuests();
  const { infoUser } = useInfoUser();

  const history = useHistory();

  if (!infoUser.authenticated) {
    history.push("/login");
  }

  useEffect(() => {
    updateMainGuilds();
    getQuests();
    getUserGuilds();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header>
        <Nav>
          <DashboardContainer>
            <section className="quests">
              <QuestList />
            </section>
            <section className="user">
              <ResumeUser user={infoUser} />
              <GuildInfo />
            </section>
          </DashboardContainer>
          <Footer />
        </Nav>
      </Header>
    </Container>
  );
};

export default Dashboard;
