//* Components
import { useState } from "react/cjs/react.development";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* Styles
import "./scss/App.scss";
import Home from "./routes/Home";
import Library from "./routes/Library";
import Profile from "./routes/Profile";
import Header from "./components/Header";

function App() {
  const [pins, setPins] = useState([]);

  console.log(window.location.href);

  return (
    <div className="app-container">
      <Router>
        <Header pins={pins} setPins={setPins} />
        <Switch>
          <Route exact path="/">
            <Home pins={pins} setPins={setPins} />
          </Route>

          <Route path="/:uid/:section">
            <Profile pins={pins} setPins={setPins} />
          </Route>

          <Route path="/library/:id">
            <Library />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
