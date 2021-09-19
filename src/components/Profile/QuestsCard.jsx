import { useInfoQuests } from "../../provider/quests";

const QuestsCard = () => {
  const { infoQuests } = useInfoQuests();

  return (
    <ul>
      {infoQuests
        .filter((quest) => quest.achieved === true)
        .sort((a, b) => a.id - b.id)
        .slice(-4)
        .map((quest, index) => {
          return (
            <div className="quest" key={index}>
              <li>
                <h3>{quest.title}</h3>
                <span>
                  Rank: <span className="rank"></span>
                  {quest.difficulty}
                </span>
              </li>
            </div>
          );
        })}
    </ul>
  );
};

export default QuestsCard;
