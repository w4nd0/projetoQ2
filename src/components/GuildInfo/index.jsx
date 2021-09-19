import { useEffect } from "react";
import { Container } from "./styles";
import { useInfoGuild } from "../../provider/guild";
import { useTasksGuild } from "../../provider/tasksguilds";
import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";

const GuildInfo = () => {
  const { infoGuild, getUserGuilds } = useInfoGuild();
  const { tasksFromGuild, getQuestsFromGuild } = useTasksGuild();

  useEffect(() => {
    getUserGuilds();
  }, []);

  const [guild] = infoGuild;

  let logo = "";
  const setLogo = () => {
    if (guild.id === 528) logo = Guild1Logo;
    if (guild.id === 529) logo = Guild2Logo;
    if (guild.id === 530) logo = Guild3Logo;
    if (guild.id === 531) logo = Guild4Logo;
  };

  useEffect(() => {
    if (infoGuild.length > 0) {
      getQuestsFromGuild(guild.id);
    }
  }, [infoGuild]);

  return (
    <>
      {infoGuild.length > 0 && (
        <Container>
          {setLogo()}
          <h3>{guild.name}</h3>
          <div className="infoGild">
            <img src={logo} alt="logo guild" />
            <div>
              <p>{guild.creator.username}</p>
              <p>Last task</p>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default GuildInfo;
