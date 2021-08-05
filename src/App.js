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
  const [ menu, setMenu ] = useState( false );
  const [ submenu, setSubmenu ] = useState( false );
  const [ toggle, setToggle ] = useState( false );
  const [ search, setSearch ] = useState( '' );

  const Applist = ( [
    {
      id: 1,
      image: discord,
      name: "discord",
    },

    {
      id: 2,
      image: excel,
      name: "excel",
    },

    {
      id: 3,
      image: gmail,
      name: "gmail",
    },

    {
      id: 4,
      image: micro,
      name: "micro ",
    },

    {
      id: 5,
      image: netflix,
      name: "netflix",
    },

    {
      id: 5,
      image: xbox,
      name: "xbox",
    },

    {
      id: 6,
      image: plant,
      name: "plant",
    },

    {
      id: 7,
      image: windows11,
      name: "windows11",
    },

    {
      id: 8,
      image: react,
      name: "react",
    },
  ] )

  const searchapp = Applist.filter( ( appelement ) => {
    return appelement.name.toLowerCase().includes( search.toLowerCase() )
  } )

  return (
    <div className="App">
      <h1 style={ { textAlign: "center" } }>
        Developed with  💗 &
        <span>
          <img
            src={ react }
            style={ { height: "40px", transform: "translateY(10px)" } }
            alt="asd"
          />
        </span>{ " " }
        for
        <br />
        <span>
          <img
            src={ windows11 }
            style={ { height: "40px", marginTop: "20px" } }
            alt="asd"
          />
        </span>{ " " }
      </h1>
      <div className={ menu ? "start-menu show" : "start-menu hide" }>
        <input type="text" className="start-search"
          onChange={ ( e ) => { setSearch( e.target.value ) } }
        >
        </input>


        <div className="start-menu-icons-container">


          <div className="All-apps" >
            { toggle === false ?
              <p onClick={ () => setToggle( true ) }>All apps <span>&#62;</span></p> :
              <p onClick={ () => setToggle( false ) }><span id="back">&#60;</span>Back</p> }
          </div>

          { toggle ?
            <div className="app-list">



              <h2 style={ { color: "white" } }>All apps</h2>
              <ul style={ { marginTop: "20px" } }>
                {
                  searchapp.map( ( app, idx ) => (
                    <div className="apps-icon" key={ idx }>
                      <img src={ app.image } className="icons" alt="excel" />
                      <h5>{ app.name }</h5>
                    </div>
                  ) )

                }


              </ul>
            </div>

            :

            <div className="start-menu-icons">
              {
                searchapp.map( ( app ) => (
                  <div className="icon-container">
                    <img src={ app.image } className="icons" alt="discord" />
                    <h3 className="icon-heading">{ app.name }</h3>
                  </div>
                ) )
              }
            </div>
          }

          { toggle === false ?
            <div className="start-pinned">
              <h3>
                <span>Recommended</span>
              </h3>
              <div className="start-pinned-icons">
                <div className="icon-container">
                  <img src={ office } className="icons" alt="office" />
                  <h3 className="icon-heading">icon name</h3>
                </div>
                <div className="icon-container">
                  <img src={ trip } className="icons" alt="tripadvisor" />
                  <h3 className="icon-heading">icon name</h3>
                </div>
              </div>
            </div> : null }
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
            className={ submenu ? "powermenu menu show" : "powermenu menuhide" }
          >
            <ul>
              <li>ShutDown</li>
              <li>Sign Out</li>
              <li>Lock</li>
              <li
                onClick={ ( event ) => {
                  setSubmenu( false );
                  event.preventDefault();
                } }
              >
                { "👈🏻" }
              </li>
            </ul>
          </div>
          <div className="power-btn">
            <i
              style={ {
                color: "#535353",
                fontWeight: "light",
                cursor: "pointer",
                fontSize: "20px",
              } }
              className="fas fa-power-off"
              onClick={ () => setSubmenu( !submenu ) }
            ></i>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="windows-btn" onClick={ () => setMenu( !menu ) }>
          <img className="micro-logo" src={ windows11 } alt="start logo" />
        </button>
      </div>
    </div>

  );
}

export default App;
