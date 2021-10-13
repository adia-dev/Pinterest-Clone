//* Components
import { useState } from "react/cjs/react.development";
import Feed from "./components/Feed";
import Header from "./components/Header";

//* Styles
import "./scss/App.scss";

function App() {
  const [pins, setPins] = useState([]);

  return (
    <div>
      <Header pins={pins} setPins={setPins} />
      <Feed pins={pins} />
    </div>
  );
}

export default App;
