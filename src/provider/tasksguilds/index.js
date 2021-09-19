import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useInfoUser } from "../../provider/user";

const TasksGuildContext = createContext([]);

export const TasksGuildProvider = ({ children }) => {
  const [tasksFromGuild, setTasksFromGuild] = useState([]);
  const [task, setTask] = useState({});

  const {
    infoUser: { access },
  } = useInfoUser();

  const getQuest = (idQuest) => {
    api.get(`/goals/${idQuest}/`).then((response) => setTask(response));
  };

  const getQuestsFromGuild = (idGroup) => {
    console.log(idGroup);
    api
      .get(`/goals/?group=${idGroup}`)
      .then((response) => setTasksFromGuild(response.data.results));
  };

  const createQuest = (data) => {
    api
      .post("/goals/", data, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const createActivity = (data) => {
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateQuest = (idQuest) => {
    api.patch(
      `goals/${idQuest}/`,
      {
        // so mandar a(s) key a ser atualizada
        title: "Dado a ser alterado",
        difficulty: "Dado a ser alterado",
        how_much_achieved: "Dado a ser alterado",
      },
      {
        headers: `Bearer ${access}`,
      }
    );
  };

  const deleteQuest = (idQuest) => {
    api.delete(`/goals/${idQuest}/`, {
      headers: `Bearer ${access}`,
    });
  };

  return (
    <TasksGuildContext.Provider
      value={{
        task,
        tasksFromGuild,
        getQuestsFromGuild,
        createQuest,
        createActivity,
      }}
    >
      {children}
    </TasksGuildContext.Provider>
  );
};

export const useTasksGuild = () => useContext(TasksGuildContext);
