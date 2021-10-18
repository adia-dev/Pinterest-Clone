import React from "react";
import Feed from "../components/Feed";
import FloatingActions from "../components/FloatingActions";

function Home({ pins, setPins }) {
  return (
    <div>
      {/* <Header pins={pins} setPins={setPins} /> */}
      <FloatingActions />
      <Feed pins={pins} />
    </div>
  );
}

export default Home;
