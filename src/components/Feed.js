import React from "react";
import Pin from "./Pin";

function Feed({ boards, setBoards, pins, setPins }) {
  console.log(pins);
  return (
    <div className="feed-container">
      {pins.map((pin) => {
        const size =
          pin.width / pin.height > 1
            ? pin.width / pin.height < 1.5
              ? "medium"
              : "small"
            : "large";
        return (
          <Pin
            size={size}
            boards={boards}
            setBoards={setBoards}
            pins={pins}
            setPins={setPins}
            name={pin.name}
            imageURL={pin.imageURL}
            id={pin.id}
            key={pin.id}
          />
        );
      })}
    </div>
  );
}

export default Feed;
