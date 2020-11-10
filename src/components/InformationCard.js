import React from "react";
import moment from "moment";
import CallModal from "./CallModal";
import Button from "react-bootstrap/Button";

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
          <a href="https://www.google.com.sg/maps/place/Hua+Bee+Restaurant/@1.2836901,103.8281873,17z/data=!3m1!4b1!4m5!3m4!1s0x31da197bcb82be39:0x3c7287c8deb5ae76!8m2!3d1.2836901!4d103.8303813">
            <Button variant="outline-primary">
              <SignpostSplitFill />
            </Button>
          </a>

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
