import { useInfoGuild } from "../../provider/guild";
import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import { useHistory } from "react-router-dom";
import { Modal } from "@material-ui/core";
import { GuildButton } from "./styles";
import { useState } from "react";
import { CardContainer, ModalContent } from "./styles";

const GuildCard = ({ id, name, description, access, members }) => {
  const [open, setOpen] = useState(false);
  const { joinGuild } = useInfoGuild();
  const history = useHistory();

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleJoin = () => {
    joinGuild(id, access);
    history.push("/login");
  };

  return (
    <>
      <CardContainer>
        <h3>{name}</h3>
        <img src={SelectedLogo[name]} alt={name} onClick={handleOpen} />
        <GuildButton onClick={handleJoin}>ENTER GUILD</GuildButton>
      </CardContainer>
      <Modal open={open} onClose={handleOpen}>
        <ModalContent>
          <p>Description: {description}</p>
          <p>Members quantity: {members}</p>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuildCard;
