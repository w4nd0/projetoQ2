import { useEffect } from "react";
import Quest from "../Quest";
import { useInfoQuests } from "../../provider/quests";

import "./styles";
import {
  BlueDisplayButton,
  DisplayButton,
  DisplayTitle,
  QuestsContainer,
  QuestsDisplay,
  StyledInput,
} from "./styles";
import { useState } from "react";

const DailyQuests = () => {
  const [show, setShow] = useState(true);
  const [questName, setQuestName] = useState("");
  // const [chosenRank, setChosenRank] = useState('D')

  const { getQuests, addQuest, addDaily, dailyQuests, getDailyQuests } =
    useInfoQuests();

  const handleShow = () => {
    setShow(!show);
    getQuests();
    getDailyQuests();
  };

  const handleAdd = () => {
    const data = {
      title: questName,
      difficulty: "D",
    };

    addQuest(data);
    addDaily(data);
    setQuestName("");
    handleShow();
  };

  useEffect(() => {
    getQuests();
    getDailyQuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuestsContainer>
      {dailyQuests.slice(0, 4).map((quest, i) => (
        <Quest
          name={quest.title}
          rank={quest.difficulty}
          quest={quest}
          id={quest.id}
          key={i}
          type="daily"
        />
      ))}
      <BlueDisplayButton onClick={handleShow} variant="outlined" fullWidth>
        Add quest
      </BlueDisplayButton>
      <QuestsDisplay show={show}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <DisplayTitle>Daily Quests</DisplayTitle>
          <StyledInput
            onChange={(e) => setQuestName(e.target.value)}
            value={questName}
            label="New Quest"
            name="title"
            placeholder="New Quest"
            autoComplete="off"
            type="text"
          />
          <DisplayButton onClick={handleAdd}>Add new quest</DisplayButton>
          <DisplayButton onClick={handleShow}>Show quests</DisplayButton>
        </div>
      </QuestsDisplay>
    </QuestsContainer>
  );
};

export default DailyQuests;
