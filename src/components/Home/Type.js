import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI & Data Science Engineer",
          "Data Scientist / ML Engineer at Renault Group",
          "Passionate about LLMs, RAG and Data Analytics",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
