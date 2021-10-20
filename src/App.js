import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
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

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.10:5000/board")
      .then((res) => {
        setBoards(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  console.log(window.location.href);

  return (
    <div className="app-container">
      <Router>
        <Header pins={pins} setPins={setPins} />
        <Switch>
          <Route exact path="/">
            <Home
              boards={boards}
              setBoards={setBoards}
              pins={pins}
              setPins={setPins}
            />
          </Route>

          <Route path="/profile/:username">
            <Profile
              boards={boards}
              setBoards={setBoards}
              pins={pins}
              setPins={setPins}
            />
          </Route>

          <Route path="/board/:id">
            <Board boards={boards} setBoards={setBoards} />
          </Route>

          <Route path="/pin/:id">
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
