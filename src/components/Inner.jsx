import React from "react";

export default function Inner({ children }) {
  return (
    <div
      className="inner"
      style={{
        maxWidth: "1200px",
        minWidth: "800px",
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      {children}
    </div>
  );
}
