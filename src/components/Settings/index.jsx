import Header from "../Header";
import Nav from "../Navigation/Nav";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useInfoQuests } from "../../provider/quests";
import { useEffect, useState } from "react";
import { useInfoUser } from "../../provider/user";
import { useHistory } from "react-router-dom";
import { useTasksGuild } from "../../provider/tasksguilds";
import { useInfoGuild } from "../../provider/guild";

export const Container = styled.div`
  background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
  min-height: 100vh;
  width: 100vw;
`;

const SettingsContainer = styled.div`
  padding: 100px 0 0 40px;
  font-family: var(--font);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  animation: vanish 1s ease-in-out;

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  background: var(--gradient-blue-dark);
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  width: fit-content;
  border: 1px solid var(--darkblue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    background: var(--gradient-brown-dark);
    padding: 0.5rem 1rem;
    color: white;
    font-family: var(--font);
    font-size: 1.2rem;
    border: 1px solid var(--brown);
    border-radius: 15px;
    margin: 10px;
  }

  h3 {
    width: 100%;
    background: var(--gradient-purple-dark);
    padding: 0.5rem 1rem;
    color: white;
    font-family: var(--font);
    font-size: 1.3rem;
    border: 1px solid var(--purple);
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  @media (min-width: 800px) {
    width: 580px;
  }
`;

const StyledInput = styled.input`
  background: var(--gradient-brown-dark);
  padding: 1rem;
  color: white;
  border-radius: 15px;
  border: 1px solid var(--purple);
  outline: none;
  font-family: var(--font);
  font-size: 1.2rem;
  margin-right: 1rem;

  &::placeholder {
    color: gray;
  }

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

const StyledButton = styled(Button)`
  background: var(--gradient-brown-dark);
  border-radius: 15px !important;
  border: 1px solid var(--brown) !important;
  margin: 1rem;

  &:hover {
    background: var(--gradient-purple-dark);
    border: 1px solid var(--purple) !important;
  }

  span {
    color: white;
    border-radius: 15px;
    font-family: var(--font);
    font-size: 1.2rem;
  }
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const Settings = () => {
  const [goal, setGoal] = useState("");
  const [quest, setQuest] = useState("");
  const [guildName, setGuildName] = useState("");
  const [guildText, setGuildText] = useState("");
  const [name, setName] = useState("");

  const { infoQuests, getQuests } = useInfoQuests();
  const { createQuest, createActivity } = useTasksGuild();
  const { infoUser, changeUsername } = useInfoUser();
  const { getUserGuilds, infoGuild, createGuild } = useInfoGuild();

  const history = useHistory();

  if (!infoUser.authenticated) {
    history.push("/login");
  }

  useEffect(() => {
    getQuests();
    getUserGuilds();
    // eslint-disable-next-line
  }, []);

  const handleGoal = () => {
    const data = {
      title: goal,
      difficulty: "A",
      how_much_achieved: 1,
      group: infoGuild.id,
    };

    createQuest(data);
    setGoal("");
  };

  const handleQuest = () => {
    const data = {
      title: quest,
      realization_time: new Date(),
      group: infoGuild.id,
    };

    createActivity(data);
    setQuest("");
  };

  const handleNewGuld = () => {
    const data = {
      name: guildName,
      description: guildText,
      category: "leveling",
    };

    createGuild(data);
  };

  const handleName = () => {
    changeUsername(name);
  };

  return (
    <Container>
      <Header>
        <Nav>
          <SettingsContainer>
            <Col>
              <Card>
                <StyledInput
                  placeholder="Your new username"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <StyledButton
                  variant="contained"
                  size="large"
                  onClick={handleName}
                >
                  Change username
                </StyledButton>
              </Card>
              <Card>
                <StyledInput
                  placeholder="Your new guild"
                  onChange={(e) => setGuildName(e.target.value)}
                  value={guildName}
                />
                <StyledButton variant="contained" size="large">
                  Create your Guild
                </StyledButton>
              </Card>
              <Card>
                <StyledInput
                  placeholder="Your new guild quest"
                  onChange={(e) => setQuest(e.target.value)}
                  value={quest}
                />
                <StyledButton
                  variant="contained"
                  size="large"
                  onClick={handleQuest}
                >
                  Create a guild quest
                </StyledButton>
              </Card>
              <Card>
                <StyledInput
                  placeholder="Your new guild goal"
                  onChange={(e) => setGoal(e.target.value)}
                  value={goal}
                />
                <StyledButton
                  variant="contained"
                  size="large"
                  onClick={handleGoal}
                >
                  Create a guild goal
                </StyledButton>
              </Card>
            </Col>
            <Col>
              <Card style={{ justifyContent: "center" }}>
                <h3>Quest History</h3>
                {infoQuests.map((quest) => (
                  <p>{quest.title}</p>
                ))}
              </Card>
            </Col>
          </SettingsContainer>
        </Nav>
      </Header>
    </Container>
  );
};

export default Settings;
