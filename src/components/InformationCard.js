import React from "react";
import moment from "moment";
import CallModal from "./CallModal";

import {
  TelephoneFill,
  SignpostSplitFill,
  ChatLeftDotsFill,
} from "react-bootstrap-icons";

function InformationCard() {
  const now = moment().format("DD MMM YYYY, h:mm a");

  return (
    <div className="InformationCard">
      <h5>Now preparing...</h5>
      <h1 className="OrderNumber">#241</h1>
      <h5>{now}</h5>
      <div className="RestaurantName">
        <h1>Hua Bee Bak Chor Mee</h1>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div style={{ marginRight: "3px" }}>
          <CallModal></CallModal>
          {/* <TelephoneFill size="38px" /> */}
          <p>Call</p>
        </div>
        <div style={{ marginLeft: "3px" }}>
          <SignpostSplitFill size="38px" />
          <p>Directions</p>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <ChatLeftDotsFill />
        <h4>Get notified through SMS!</h4>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <input className="NumberInput" placeholder="e.g. 9123 4567" />
        <button className="GoButton">Go</button>
      </div>
    </div>
  );
}

export default InformationCard;
