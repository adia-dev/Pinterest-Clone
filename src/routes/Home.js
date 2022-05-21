import React from "react";
import Feed from "../components/Feed";
import FloatingActions from "../components/FloatingActions";

function Home({ boards, setBoards, pins, setPins }) {
  return (
    <div>
      {/* <Header pins={pins} setPins={setPins} /> */}
      <FloatingActions />
      <Feed
        boards={boards}
        setBoards={setBoards}
        pins={pins}
        setPins={setPins}
      />
    </div>
  );
}

export default Home;
