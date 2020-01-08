import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import imageHead from "./img/header.jpg";
import Logo from "./img/logo.png";
import AppImage from "./img/app.png";
import AppImage2 from "./img/altr-bottom.png";
import backImage from "./img/cat.jpg";
import drible from "./img/dribbble-logo.png";
import Pearson from "./img/Pearson.svg";
import nba from "./img/NBA.svg";
import rmit from "./img/RMIT.svg";
import afl from "./img/AFL.svg";
import peterMac from "./img/PeterMac.svg";
import threefifty from "./img/350.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="mainLogo" src={Logo} />
        <NavBar />
        <div>
          <img className="mainImage" height="600" width="690" src={imageHead} />
        </div>
        <div className="imageText">
          <p>UX and UI for your users,</p>
          <p>not your ego.</p>
        </div>
      </div>
      {/* middle part */}
      <div className="middle">
        <img className="appImage" height="600" width="291" src={AppImage}></img>
        <img
          className="appImage2"
          height="480"
          width="232"
          src={AppImage2}
        ></img>
        <div className="textMiddle">
          <p>
            <strong>
              Empowering coaches and <br />
              athletes. See how we helped <br /> ALTR Project.
            </strong>
          </p>
          <p style={{ marginTop: "20px" }}>
            <strong>View</strong> the case study
          </p>
        </div>
      </div>
      {/* third part */}
      <div className="thirdPart">
        <div className="thirdPartText">
          <p>
            We're a small, focused team with
            <br /> the skills to make it happen
          </p>
          <p>
            <strong>Find out</strong> what we can do for you
          </p>
        </div>
        <img src={backImage} className="backImage" width="525" height="346" />
        <div className="blueBg"></div>
      </div>
      {/* fourth part */}
      <div className="fourthPart">
        <div className="dribbble">
          <p>
            <strong>Top 50 'Most liked'</strong> design team on <span></span>
            <img src={drible} className="dribleLogo" width="146" height="36" />
          </p>
        </div>
        <blockquote className="qouteContent">
          <div className="qoute">
            <q>
              Alyoop were on-time and on-point from day one until project
              completion - enhancing our ideas, and making them even better than
              we hoped!
            </q>
          </div>
          <p className="author">Jamie Appleby, Founder - Back to My Body</p>
        </blockquote>
      </div>
      {/* fifth part */}
      <div className="fifthPart">
        <p>
          <strong>Check out some great brands we've worked with:</strong>
        </p>
        <div className="companies">
          <img src={Pearson} />
          <img src={nba} />
          <img src={rmit} />
          <img src={afl} />
          <img src={peterMac} />
          <img src={threefifty} />
        </div>
        <div className="footer">
          <p>Something on your mind? contact</p>
        </div>
      </div>
    </div>
  );
}

export default App;
