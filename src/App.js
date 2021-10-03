import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/NewMeetup">
          <NewMeetupPage />
        </Route>
        <Route path="/Favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
