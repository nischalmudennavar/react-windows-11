import { useState } from "react";
import "./App.css";

function App() {
  const [ menu, setMenu ] = useState( false );
  const [ submenu, setSubmenu ] = useState( false );
  const [ toggle, setToggle ] = useState( false );
  const [ search, setSearch ] = useState( '' );

  const Applist = ( [
    {
      id: 1,
      image: require( './assets/discord.png' ).default,
      name: "discord",
    },

    {
      id: 2,
      image: require( './assets/excel.png' ).default,
      name: "excel",
    },

    {
      id: 3,
      image: require( './assets/gmail.png' ).default,
      name: "gmail",
    },

    {
      id: 4,
      image: require( './assets/microsoft.png' ).default,
      name: "micro ",
    },

    {
      id: 5,
      image: require( './assets/netflix.png' ).default,
      name: "netflix",
    },

    {
      id: 5,
      image: require( './assets/xbox.png' ).default,
      name: "xbox",
    },

    {
      id: 6,
      image: require( './assets/plant.png' ).default,
      name: "plant",
    },

    {
      id: 7,
      image: require( './assets/windows11.svg' ).default,
      name: "windows11",
    },

    {
      id: 8,
      image: require( './assets/logo.svg' ).default,
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
            src={ require( './assets/logo.svg' ).default }
            style={ { height: "40px", transform: "translateY(10px)" } }
            alt="asd"
          />
        </span>{ " " }
        for
        <br />
        <span>
          <img
            src={ require( './assets/windows11.svg' ).default }
            style={ { height: "40px", marginTop: "20px" } }
            alt="asd"
          />
        </span>{ " " }
      </h1>
      <div className={ menu ? "start-menu show" : "start-menu hide" }>
        <input type="text" className="start-search" placeholder=" Type here to search"
          onChange={ ( e ) => { setSearch( e.target.value ) } }
        >
        </input>


        <div className="start-menu-icons-container">
          <div className="All-apps" >
            { toggle === false ?
              <p onClick={ () => setToggle( true ) }>All apps <span>⏭️</span></p> :
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
                searchapp.map( ( app, idx ) => (
                  <div className="icon-container" key={ idx }>
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
                  <img src={ require( './assets/office.png' ).default } className="icons" alt="office" />
                  <h3 className="icon-heading">icon name</h3>
                </div>
                <div className="icon-container">
                  <img src={ require( './assets/tripadvisor.png' ).default } className="icons" alt="tripadvisor" />
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
          <img className="micro-logo" src={ require( './assets/windows11.svg' ).default } alt="start logo" />
        </button>
      </div>
    </div>

  );
}

export default App;
