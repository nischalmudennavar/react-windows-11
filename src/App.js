import { useState } from "react";
import "./App.css";

// import image as a variable from assets folder
import discord from "./assets/discord.png";
import excel from "./assets/excel.png";
import gmail from "./assets/gmail.png";
import micro from "./assets/microsoft.png";
import netflix from "./assets/netflix.png";
import office from "./assets/office.png";
import trip from "./assets/tripadvisor.png";
import xbox from "./assets/xbox.png";
import plant from "./assets/plant.png";
import windows11 from "./assets/windows11.svg";
import react from "./assets/logo.svg";

function App() {
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Developed with  💗 &
        <span>
          <img
            src={react}
            style={{ height: "40px", transform: "translateY(10px)" }}
            alt="asd"
          />
        </span>{" "}
        for
        <br />
        <span>
          <img
            src={windows11}
            style={{ height: "40px", marginTop: "20px" }}
            alt="asd"
          />
        </span>{" "}
      </h1>
      <div className={menu ? "start-menu show" : "start-menu hide"}>
        <div className="start-search"></div>
        <div className="start-menu-icons-container">
          <div className="start-menu-icons">
            <div className="icon-container">
              <img src={discord} className="icons" alt="discord" />
              <h3 className="icon-heading">Discord</h3>
            </div>
            <div className="icon-container">
              <img src={excel} className="icons" alt="excel" />
              <h3 className="icon-heading">Excel</h3>
            </div>
            <div className="icon-container">
              <img src={gmail} className="icons" alt="gmail" />
              <h3 className="icon-heading">Gmail</h3>
            </div>
            <div className="icon-container">
              <img src={micro} className="icons" alt="microsoft" />
              <h3 className="icon-heading">icon name</h3>
            </div>
            <div className="icon-container">
              <img src={netflix} className="icons" alt="netflix" />
              <h3 className="icon-heading">icon name</h3>
            </div>
            <div className="icon-container">
              <img src={office} className="icons" alt="office" />
              <h3 className="icon-heading">icon name</h3>
            </div>
            <div className="icon-container">
              <img src={trip} className="icons" alt="tripadvisor" />
              <h3 className="icon-heading">icon name</h3>
            </div>
            <div className="icon-container">
              <img src={xbox} className="icons" alt="xbox" />
              <h3 className="icon-heading">Xbox </h3>
            </div>

            <div className="icon-container">
              <img src={plant} className="icons" alt="netflix" />
              <h3 className="icon-heading">plant</h3>
            </div>
            <div className="icon-container">
              <img src={office} className="icons" alt="office" />
              <h3 className="icon-heading">Office</h3>
            </div>
            <div className="icon-container">
              <img src={trip} className="icons" alt="tripadvisor" />
              <h3 className="icon-heading">Trip advisor</h3>
            </div>
            <div className="icon-container">
              <img src={xbox} className="icons" alt="xbox" />
              <h3 className="icon-heading">Xbox</h3>
            </div>
          </div>

          <div className="start-pinned">
            <h3>
              <span>Recommended</span>
            </h3>
            <div className="start-pinned-icons">
              <div className="icon-container">
                <img src={office} className="icons" alt="office" />
                <h3 className="icon-heading">icon name</h3>
              </div>
              <div className="icon-container">
                <img src={trip} className="icons" alt="tripadvisor" />
                <h3 className="icon-heading">icon name</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="start-menu-footer">
          <div className="start-menu-footer-icons">
            <img
              src="https://64.media.tumblr.com/2ca2d3087760a85155b84a60e9de4684/88a3bf1d1e87f0ee-51/s400x600/6d0f9910e1d3352257581035b3ea5f3d57b289f3.gifv"
              // className="icons"
              alt="office"
            />
            <h3 className="icon-heading">John Doe</h3>
          </div>
          <div
            className={submenu ? "powermenu menu show" : "powermenu menuhide"}
          >
            <ul>
              <li>ShutDown</li>
              <li>Sign Out</li>
              <li>Lock</li>
              <li
                onClick={(event) => {
                  setSubmenu(false);
                  event.preventDefault();
                }}
              >
                {"👈🏻"}
              </li>
            </ul>
          </div>
          <div className="power-btn">
            <i
              style={{
                color: "#535353",
                fontWeight: "light",
                cursor: "pointer",
                fontSize: "20px",
              }}
              className="fas fa-power-off"
              onClick={() => setSubmenu(!submenu)}
            ></i>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="windows-btn" onClick={() => setMenu(!menu)}>
          <img className="micro-logo" src={windows11} alt="start logo" />
        </button>
      </div>
    </div>
  );
}

export default App;
