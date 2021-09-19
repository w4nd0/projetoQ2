import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";

const EventsGuildContext = createContext([]);

export const EventsGuildProvider = ({ children }) => {
  const [eventsFromGuild, setEventsFromGuild] = useState([]);

  const {
    infoUser: { access },
  } = useInfoUser();

  const createEvent = (data, idGuild) => {
    console.log(data);
    // const newActivitie = { ...data, group: group.id };
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => setEventsFromGuild(response.data.results))
      .then(() => getEventsFromGuild(idGuild));
  };

  const removeActivities = (id, idGuild) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then(() => getEventsFromGuild(idGuild));
  };

  const getEventsFromGuild = (group) => {
    api
      .get(`/activities/?group=${group}`)
      .then((response) => setEventsFromGuild(response.data.results));
  };

  return (
    <EventsGuildContext.Provider
      value={{
        eventsFromGuild,
        getEventsFromGuild,
        createEvent,
        removeActivities,
      }}
    >
      {children}
    </EventsGuildContext.Provider>
  );
};

export const useEventsGuild = () => useContext(EventsGuildContext);
