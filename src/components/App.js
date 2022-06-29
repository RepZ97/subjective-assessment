import React from "react";
import InformationSurvey from "./InformationSurvey";
import logo from "../Logo/5G Innovation Center.png";
// eslint-disable-next-line
import TestAudio from "./testAudio";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <div style={{ marginLeft: "2%" }}>
            <h1
              style={{ marginTop: "7%", marginBottom: "6%", fontSize: "45px" }}
            >
              Subjective Audio Quality Assessment
            </h1>
          </div>
          <div className="image-box">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <InformationSurvey />
      </div>
    );
  }
}

export default App;
