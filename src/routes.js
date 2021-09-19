import { Switch, Route } from "react-router-dom"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Styleguide from "./Styleguide";
import Dashboard from "./pages/Dashboard";
import GuildSelect from "./pages/GuildSelect";
import GuildDashboard from "./pages/GuildDashboard";
import PageNotFound from "./pages/PageNotFound";
import Shop from "./components/Shop";
import Settings from "./components/Settings";
import TutorialPage from "./pages/TutorialPage";
import GuildTasks from "./pages/GuildTasks";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/guildselect">
        <GuildSelect />
      </Route>
      <Route path="/guildboard">
        <GuildDashboard />
      </Route>
      <Route exact path="/styleguide" component={Styleguide} />
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/tutorial">
        <TutorialPage />
      </Route>
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/guildtask" component={GuildTasks} />
      <Route exact path="/settings" component={Settings} />
      <Route path={"*"} component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
