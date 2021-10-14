import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";

function Home({ pins, setPins }) {
  return (
    <div>
      {/* <Header pins={pins} setPins={setPins} /> */}
      <Feed pins={pins} />
    </div>
  );
}

export default Home;
