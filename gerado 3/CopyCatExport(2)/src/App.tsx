import "./App.css";
import destino from "./assets/destino.svg";
import homeIndicator from "./assets/homeIndicator.svg";
import cellularConnection from "./assets/cellularConnection.svg";
import wifi from "./assets/wifi.svg";
import battery from "./assets/battery.svg";
import frame31 from "./assets/frame31.svg";
const App = () => {
  return (
    <div className="mapa">
      <div className="background">
        <div className="flex-container">
          <span className="time">9:41</span>
          <img className="cellular-connection" src={cellularConnection} />
          <img className="wifi" src={wifi} />
          <img className="battery" src={battery} />
        </div>
        <div className="flex-container-1">
          <div className="rectangle-329">
            <div className="flex-container-2">
              <img className="frame-31" src={frame31} />
              <span className="mapa-1">Mapa</span>
            </div>
            <img className="destino" src={destino} />
            <div className="flex-container-3">
              <button className="boto-aceitar">Favoritos</button>
              <button className="boto-aceitar-1">
                <span className="recentes">Recentes</span>
              </button>
            </div>
            <div className="flex-container-4">
              <span className="de">DE :</span>
              <div className="destino-1">
                <div className="rectangle-329-1">UTFPR</div>
              </div>
            </div>
            <div className="flex-container-5">
              <span className="para">PARA :</span>
              <div className="destino-2">
                <div className="rectangle-329-2">Centro</div>
              </div>
            </div>
          </div>
          <img className="home-indicator" src={homeIndicator} />
        </div>
      </div>
    </div>
  );
};
export default App;
