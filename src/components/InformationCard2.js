import React, { useEffect } from "react";
import moment from "moment";
import CallModal from "./CallModal";
import Button from "react-bootstrap/Button";
import CardTwoBottom from "./CardTwoBottom";
import { useHistory } from "react-router-dom";
import { SignpostSplitFill } from "react-bootstrap-icons";

function InformationCard2() {
  const now = moment().format("DD MMM YYYY, h:mm a");
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/notified");
    }, 5000);
  }, []);

  return (
    <div
      className="InformationCard"
      style={{
        paddingTop: "20px",
        backgroundColor: "#ffffff",
        width: "330px",
        height: "510px",
        borderRadius: "15px",
        border: "1px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{ marginBottom: "10px", marginTop: "12px", color: "#a7a3a3" }}
      >
        <h5>Now preparing...</h5>
      </div>
      <h1 className="OrderNumber">#241</h1>
      <h5>{now}</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            width: "250px",
          }}
        >
          <h1>Hua Bee Bak Chor Mee</h1>
        </div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "15px" }}
      >
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
      <CardTwoBottom />
    </div>
  );
}

export default InformationCard2;
