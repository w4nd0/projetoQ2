import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";
const GuildContext = createContext([]);

export const GuildProvider = ({ children }) => {
  const [infoGuilds, setInfoGuilds] = useState([]);
  const [infoGuild, setInfoGuild] = useState({});
  const [mainGuilds, setMainGuilds] = useState({
    "Scavenger Guild": [],
    "Hunters Guild": [],
    "Fame Guild": [],
    "Ahjin Guild": [],
  });

  const {
    infoUser: { access },
  } = useInfoUser();

  const searchGuilds = (itemToSearch) => {
    api
      .get(`/groups/?category=${itemToSearch}`)
      .then((response) => setInfoGuilds(response.data.results));
  };

  //Inserir o user na guild passando
  const joinGuild = (id, access) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const updateMainGuilds = () => {
    searchGuilds("Leveling");

    const filter = (name) => infoGuilds.filter((guild) => guild.name === name);

    const newMainGuilds = {
      "Scavenger Guild": filter("Scavenger Guild")[0],
      "Hunters Guild": filter("Hunters Guild")[0],
      "Fame Guild": filter("Fame Guild")[0],
      "Ahjin Guild": filter("Ahjin Guild")[0],
    };

    setMainGuilds(newMainGuilds);
  };

  // const [token] =
  // useState(JSON.parse(localStorage.getItem("@habits:token"))) || "";
  // const [userGuilds, setUserGuilds] = useState([]);

  // Pega as guilds que o user está, so precisa do token do user
  const getUserGuilds = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) =>
        setInfoGuild(response.data[response.data.length - 1])
      );
  };

  //Criando uma guild, so precisa do token do user
  const createGuild = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getUserGuilds());
  };

  //Caso precise renderizar
  // useEffect(() => {
  //   getUserGuilds();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userGuilds]);

  return (
    <GuildContext.Provider
      value={{
        infoGuild,
        infoGuilds,
        searchGuilds,
        joinGuild,
        mainGuilds,
        updateMainGuilds,
        getUserGuilds,
        createGuild,
      }}
    >
      {children}
    </GuildContext.Provider>
  );
};

export const useInfoGuild = () => useContext(GuildContext);
