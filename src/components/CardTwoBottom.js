import React from "react";
import { CheckCircleFill } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

function CardTwoBottom() {
  return (
    <div>
      <CheckCircleFill style={{ color: "green" }} />
      <p>You will be notified through SMS!</p>
      <p>Didn't receive any confirmation?</p>
      <Link to="main">Try again!</Link>
    </div>
  );
}

export default CardTwoBottom;
