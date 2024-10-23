import React from "react";

export const Jumbotron = ({ title, description }) => {
  return (
    <section
      style={{
        borderBottom: "2px solid #ddd",
        marginBottom: "20px",
        width: "100%",
      }}
    >
      <h1
        style={{
          width: "100%",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
        }}
      >
        {description}
      </p>
    </section>
  );
};
