import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
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
