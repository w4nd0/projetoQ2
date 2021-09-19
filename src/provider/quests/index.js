import { createContext, useContext, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";
import { DataQuests, questsByLevel } from "../../database";

const QuestsContext = createContext([]);

export const QuestsProvider = ({ children }) => {
  const [infoQuests, setInfoQuests] = useState([]);
  const [currentQuests, setCurrentQuests] = useState([]);
  const [dailyQuests, setDailyQuests] = useState(
    infoQuests.filter((quest) => quest.achieved === false)
  );

  const { updateStatus } = useInfoUser();

  const {
    infoUser: { access, id },
    infoUser,
  } = useInfoUser();

  const getQuests = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        setInfoQuests(response.data);
        updateStatus(response.data);
      });
  };

  const addQuest = (data) => {
    const newQuest = {
      ...data,
      achieved: false,
      category: "Leveling",
      frequency: 0,
      how_much_achieved: 0,
      user: id,
    };
    api
      .post("/habits/", newQuest, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        setInfoQuests([...infoQuests, response.data]);
        setDailyQuests([...dailyQuests, response.data]);
      })
      .then(() => getQuests());
  };

  const completeQuest = (id) => {
    api
      .patch(
        `/habits/${id}/`,
        { achieved: true },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((response) => {
        setInfoQuests([...infoQuests, response.data]);
        setDailyQuests(
          dailyQuests.filter((quest) => quest.title !== response.data.title)
        );
      })
      .then(() => getQuests());
  };

  const addCompletedQuest = (data) => {
    const newQuest = {
      ...data,
      achieved: true,
      category: "Leveling",
      frequency: 1,
      how_much_achieved: 0,
      user: id,
    };
    api
      .post("/habits/", newQuest, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => setInfoQuests([...infoQuests, newQuest]))
      .then(() => getQuests());
  };

  const removeQuest = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then(() => getQuests());
  };

  const getRandom = (max) => Math.floor(Math.random() * max);

  const getCurrentQuests = () => {
    console.log("rank:", infoUser);

    const playerQuestsRanks = questsByLevel[infoUser.guildRank];

    const getNewQuests = () =>
      playerQuestsRanks.map((rank, i) => {
        const slot = getRandom(DataQuests[rank].length);
        return DataQuests[rank][slot];
      });

    const newQuests = getNewQuests();
    setCurrentQuests(newQuests);
  };

  const removeCurrentQuest = (quest) => {
    const newQuests = currentQuests;
    const index = currentQuests.indexOf(quest);
    const rank = quest.difficulty;

    const questsOfRank = DataQuests[rank];
    const nextQuest = questsOfRank[getRandom(questsOfRank.length)];

    newQuests[index] = nextQuest;

    setCurrentQuests([...newQuests]);
  };

  const getDailyQuests = () => {
    getQuests();
    setDailyQuests(infoQuests.filter((quest) => quest.achieved === false));
  };

  const addDaily = (data) => {
    setDailyQuests([...dailyQuests, data]);
  };

  const removeDaily = (name) => {
    setDailyQuests(dailyQuests.filter((quest) => quest.title !== name));
  };

  return (
    <QuestsContext.Provider
      value={{
        getQuests,
        infoQuests,
        addQuest,
        removeQuest,
        completeQuest,
        addCompletedQuest,
        getCurrentQuests,
        removeCurrentQuest,
        currentQuests,
        getDailyQuests,
        addDaily,
        removeDaily,
        dailyQuests,
      }}
    >
      {children}
    </QuestsContext.Provider>
  );
};

export const useInfoQuests = () => useContext(QuestsContext);
