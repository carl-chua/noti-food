import React from "react";

export default function Footer() {
  return (
    <div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "330px",
        }}
      >
        <p>&copy;Notifood</p>
        <p>Help</p>
        <p>Feedback</p>
      </div>
    </div>
  );
}
