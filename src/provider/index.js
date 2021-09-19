import { UserProvider } from "./user";
import { GuildProvider } from "./guild";
import { QuestsProvider } from "./quests";
import { TasksGuildProvider } from "./tasksguilds";
import { EventsGuildProvider } from "./eventsguild";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <QuestsProvider>
        <GuildProvider>
          <TasksGuildProvider>
            <EventsGuildProvider>{children}</EventsGuildProvider>
          </TasksGuildProvider>
        </GuildProvider>
      </QuestsProvider>
    </UserProvider>
  );
};

export default Provider;
