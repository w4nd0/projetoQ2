import { useEventsGuild } from "../../provider/eventsguild";
import { useEffect } from "react";
import { useInfoGuild } from "../../provider/guild";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Guild1Logo from "../../assets/guild1.png";
import Guild2Logo from "../../assets/guild2.png";
import Guild3Logo from "../../assets/guild3.png";
import Guild4Logo from "../../assets/guild4.png";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const Container = styled.div`
  background-image: var(--gradient-blue-dark);
  width: 80vw;
  margin: 79px 0;
  border-radius: 15px;
  min-height: 250px;
  margin-left: 16vw;
  padding: 10px;
  @media (min-width: 750px) {
    margin-left: 11.5vw;
    max-width: 1200px;
    margin: 80px auto;
  }

  h2,
  p {
    font-family: var(--font);
    color: var(--white);
  }
`;

const GuildQuests = () => {
  const { eventsFromGuild, getEventsFromGuild, createEvent, removeActivities } =
    useEventsGuild();
  const { infoGuild, getUserGuilds } = useInfoGuild();
  const { name, creator, users_on_group } = infoGuild;
  const [update, setUpdate] = useState(false);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const SelectedLogo = {
    "Scavenger Guild": Guild1Logo,
    "Hunters Guild": Guild2Logo,
    "Fame Guild": Guild3Logo,
    "Ahjin Guild": Guild4Logo,
  };

  useEffect(() => {
    getUserGuilds();
    getEventsFromGuild(infoGuild.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (infoGuild.id !== undefined) getEventsFromGuild(infoGuild.id);
    // eslint-disable-next-line
  }, [infoGuild]);

  useEffect(() => {
    if (update) getEventsFromGuild(infoGuild.id);
    setUpdate(false);
    // eslint-disable-next-line
  }, [update]);

  const handleCreate = (data) => {
    const newEvent = { ...data, group: infoGuild.id };
    createEvent(newEvent, infoGuild.id);
    setUpdate(true);
  };

  const handleRemove = (idEvent) => {
    removeActivities(idEvent, infoGuild.id);
    setUpdate(true);
  };

  return (
    <Container>
      <h2>Events Quests</h2>
      {eventsFromGuild?.length > 0 &&
        eventsFromGuild.map((event) => (
          <div key={event.id}>
            <p>{event.title}</p>
            <p>{event.realization_time}</p>
            <button onClick={() => handleRemove(event.id)}>Remove</button>
          </div>
        ))}
      <form onSubmit={handleSubmit(handleCreate)}>
        <h2>Create a event</h2>
        <TextField
          fullWidth
          helperText={errors.title?.message}
          {...register("title")}
          label="Event"
          name="title"
        />

        <input
          type="datetime-local"
          {...register("realization_time")}
          name="realization_time"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Adicionar
        </Button>
      </form>
    </Container>
  );
};

export default GuildQuests;
