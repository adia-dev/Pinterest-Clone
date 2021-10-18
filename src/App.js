//* Components
import { useState } from "react/cjs/react.development";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//* Styles
import "./scss/App.scss";
import Home from "./routes/Home";
import Board from "./routes/Board";
import Profile from "./routes/Profile";
import Header from "./components/Header";
import PinViewer from "./routes/PinViewer";
import PinBuilder from "./routes/PinBuilder";

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

          <Route path="/profile/:username">
            <Profile pins={pins} setPins={setPins} />
          </Route>

          <Route path="/board/:name">
            <Board />
          </Route>

          <Route path="/pin">
            <PinViewer />
          </Route>

          <Route path="/pin-builder">
            <PinBuilder />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
