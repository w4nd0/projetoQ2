import { useState } from "react";
import GuildRanking from "./components/GuildSelect/GuildRanking";
import { useInfoGuild } from "./provider/guild";

const Styleguide = () => {
  const [show, setShow] = useState(false);
  const { updateMainGuilds } = useInfoGuild();

  const handleShow = () => {
    setShow(!show);
    updateMainGuilds();
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <button onClick={updateMainGuilds}>Atualizar</button>
      <button onClick={handleShow}>Mostrar</button>
      {show && <GuildRanking />}
    </div>
  );
  //content size on mobile
};

export default Styleguide;

// criar um provider para o display da quests
