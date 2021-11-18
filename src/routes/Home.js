import axios from "axios";
import React, { useEffect } from "react";
import Feed from "../components/Feed";
import FloatingActions from "../components/FloatingActions";

function Home({ boards, setBoards, pins, setPins }) {
  useEffect(() => {
    axios.get("https://certiportexams.com/bookings.cfm", {
      headers: {
        cookie: "JSESSIONID=2C995759B2BEF3B726CF28BF30ECBA74.cfusion",
      },
      withCredentials: true,
    });
  }, []);

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
