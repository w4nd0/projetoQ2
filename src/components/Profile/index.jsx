import { Container } from "./styles";
import QuestsCard from "./QuestsCard";
import PersonIcon from "@material-ui/icons/Person";
import ExperienceBar from "../ExperienceBar";

const ResumeUser = ({ user }) => {
  return (
    <Container>
      <div className="user-profile">
        <PersonIcon />
        <div className="info">
          <span>
            Name: <span className="name">{user.username}</span> Level:
            <span className="lvl"> {user.level}</span>
          </span>
          <span>
            Role: <span className="rank">{user.guildRank}</span> Cash:
            <span className="cash"> $20</span>
          </span>
          <ExperienceBar experience={user.exp} />
        </div>
      </div>

      <div className="quests-container">
        <h2>Recent Quests</h2>
        <QuestsCard />
      </div>
    </Container>
  );
};

export default ResumeUser;
