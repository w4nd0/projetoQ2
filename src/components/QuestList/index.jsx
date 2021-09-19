import { useInfoQuests } from "../../provider/quests";
import "./styles";
import { useEffect } from "react";
import RankQuests from "./RankQuests";
import DailyQuests from "./DailyQuests";

const QuestList = () => {
  const { getQuests } = useInfoQuests();

  useEffect(() => {
    getQuests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <DailyQuests />
        <RankQuests />
      </div>
    </>
  );
};

export default QuestList;
