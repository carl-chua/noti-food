import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CardTwoBottom() {
  return (
    <div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CheckCircleFill
          size="40px"
          style={{ color: "green", marginRight: "4px" }}
        />
        <div style={{ width: "200px", marginLeft: "4px" }}>
          <h6 style={{ textAlign: "left" }}>
            You will be notified through SMS!
          </h6>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            color: "#a7a3a3",
            marginBottom: "0px",
            marginTop: "18px",
            fontSize: "14px",
            lineHeight: "10px",
          }}
        >
          Didn't receive any confirmation?
        </p>
        <Link to="main">
          <p style={{ textDecoration: "underline", fontSize: "14px" }}>
            Try again!
          </p>
        </Link>
      </div>
    </div>
  );
}

export default CardTwoBottom;
