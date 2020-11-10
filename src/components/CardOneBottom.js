import React from "react";
import {
  TelephoneFill,
  SignpostSplitFill,
  ChatLeftDotsFill,
} from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

function CardOneBottom() {
  const history = useHistory();

  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        <ChatLeftDotsFill style={{ marginRight: "4px" }} />
        <h4 style={{ fontSize: "18px", marginLeft: "4px" }}>
          Get notified through SMS!
        </h4>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <input
          className="NumberInput"
          placeholder="e.g. 9123 4567"
          style={{ marginRight: "3px", borderRadius: "5px" }}
        />
        <button
          className="GoButton"
          style={{
            marginLeft: "3px",
            backgroundColor: "#ffdb58",
            borderRadius: "5px",
          }}
          onClick={() => history.push("/registered")}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default CardOneBottom;
