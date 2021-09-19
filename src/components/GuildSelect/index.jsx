import { Container } from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useEffect } from "react";
import { useInfoUser } from "../../provider/user";
import { starterGuilds } from "../../database";
import GuildCard from "./GuildCard";
import { useHistory } from "react-router-dom";

const GuildSelect = () => {
  const { searchGuilds, infoGuilds } = useInfoGuild();
  const {
    infoUser: { access, authenticated },
  } = useInfoUser();

  const history = useHistory();

  if (authenticated) {
    history.push("/dashboard");
  }

  useEffect(() => {
    searchGuilds("leveling");
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2>Which guild do you choose?</h2>
      {infoGuilds
        .filter((guild) => starterGuilds.includes(guild.name))
        .map((guild) => (
          <div key={guild.id}>
            <GuildCard
              name={guild.name}
              id={guild.id}
              access={access}
              description={guild.description}
              members={guild.users_on_group.length}
            />
          </div>
        ))}
    </Container>
  );
};

export default GuildSelect;
