import React from "react";
import { useParams } from "react-router";

function Library({ pins, setPins }) {
  const { id } = useParams();

  return (
    <div>
      <h1>Library : {id}</h1>
    </div>
  );
}

export default Library;
