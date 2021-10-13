import React from "react";
import Pin from "./Pin";

function Feed({ pins }) {
  return (
    <div className="feed-container">
      {pins.map((pin) => (
        <Pin
          name={pin.name}
          suggestedLibrary={"Manga..."}
          imageURL={pin.imageURL}
          id={pin.id}
        />
      ))}
    </div>
  );
}

export default Feed;
