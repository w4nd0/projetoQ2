import { useInfoGuild } from "../../provider/guild";
import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import { useEffect } from "react";
import styled from "styled-components";

const GuildDetailsContainer = styled.div`
  background: var(--gradient-blue-dark);
  width: 280px;
  min-height: 280px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px auto;
  position: relative;
  animation: vanish 1s;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  img {
    width: 100px;
  }

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 780px) {
    width: 520px;
    margin: 15px auto;
    justify-content: space-between;

    img {
      height: 250px;
      width: 180px;
    }
  }

  @media (min-width: 1200px) {
    margin: 15px 0.5rem;
  }
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: var(--font);
  padding: 0 5px;

  p,
  h3 {
    background: var(--gradient-brown-dark);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid var(--brown);
    font-family: var(--font);
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  label {
    color: orange;
    font-family: var(--font);
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.3rem;
    background: var(--gradient-purple-dark);
    border-color: var(--purple);
  }
`;

const GuildInfo = () => {
  const { infoGuild, getUserGuilds } = useInfoGuild();
  const { name, creator, users_on_group } = infoGuild;

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  useEffect(() => {
    getUserGuilds();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GuildDetailsContainer>
        <Col>
          <h3>{name}</h3>
          <p>
            Guild Master: <label>{creator?.username}</label>
          </p>
          <p>Members: {users_on_group?.length}</p>
        </Col>
        <Col>
          <img src={SelectedLogo[name]} alt={name} />
        </Col>
      </GuildDetailsContainer>
    </>
  );
};

export default GuildInfo;
