import "./App.css";
import cellularConnection from "./assets/cellularConnection.svg";
import wifi from "./assets/wifi.svg";
import seta from "./assets/seta.svg";
import bell from "./assets/bell.svg";
import iconUser1 from "./assets/iconUser1.svg";
import homeIndicator from "./assets/homeIndicator.svg";
import iconUser from "./assets/iconUser.svg";
import seta1 from "./assets/seta1.svg";
import battery from "./assets/battery.svg";
import destino from "./assets/destino.svg";
import vector1 from "./assets/vector1.svg";
import calendarClockIcon from "./assets/calendarClockIcon.png";
import frame31 from "./assets/frame31.svg";
import info from "./assets/info.svg";
import vector from "./assets/vector.svg";
import ellipse57 from "./assets/ellipse57.svg";
import group from "./assets/group.svg";
const App = () => {
  return (
    <div className="tela-principal">
      <div className="background">
        <div className="flex-container">
          <span className="time">9:41</span>
          <img className="cellular-connection" src={cellularConnection} />
          <img className="wifi" src={wifi} />
          <img className="battery" src={battery} />
        </div>
        <div className="flex-container-1">
          <div className="flex-container-2">
            <img className="ellipse-57" src={ellipse57} />
            <img className="bell" src={bell} />
          </div>
          <span className="notificaes">Notificações</span>
          <img className="info" src={info} />
          <span className="ajuda">Ajuda</span>
          <img className="seta" src={seta1} />
        </div>
        <div className="flex-container-3">
          <span>Caronas Disponíveis</span>
          <img className="group" src={group} />
        </div>
        <div className="rectangle-327">
          <div className="flex-container-4">
            <img className="icon-user" src={iconUser} />
            <div className="flex-container-5">
              <img className="vector-4" src={vector1} />
              <img className="vector-3" src={vector1} />
              <img className="vector-2" src={vector1} />
              <img className="vector-1" src={vector1} />
              <img className="vector-5" src={vector1} />
            </div>
          </div>
          <div className="flex-container-6">
            <img className="vector" src={vector} />
            <img className="calendar-clock-icon" src={calendarClockIcon} />
            <div className="flex-container-7">
              <img className="icon-user-1" src={iconUser1} />
              <img className="icon-user-3" src={iconUser1} />
              <img className="icon-user-2" src={iconUser1} />
            </div>
          </div>
          <div className="flex-container-8">
            <span className="centro">Centro</span>
            <span className="num-1930">19:30</span>
            <span className="num-34">3&#x2F;4 </span>
          </div>
          <img className="seta-1" src={seta} />
        </div>
        <div className="rectangle-327-1">
          <div className="flex-container-9">
            <img className="icon-user-4" src={iconUser} />
            <div className="flex-container-10">
              <img className="vector-9" src={vector1} />
              <img className="vector-8" src={vector1} />
              <img className="vector-7" src={vector1} />
            </div>
          </div>
          <div className="flex-container-11">
            <img className="vector-6" src={vector} />
            <img className="calendar-clock-icon-1" src={calendarClockIcon} />
            <div className="flex-container-12">
              <img className="icon-user-5" src={iconUser1} />
              <img className="icon-user-7" src={iconUser1} />
              <img className="icon-user-6" src={iconUser1} />
            </div>
          </div>
          <div className="flex-container-13">
            <span className="jd-aeroporto">J.D Aeroporto</span>
            <span className="num-2245">22:45</span>
            <div className="flex-container-14">
              <span>0&#x2F;4 </span>
              <img className="seta-1" src={seta1} />
            </div>
          </div>
        </div>
        <div className="flex-container-15">
          <button className="boto-aceitar">
            <span className="mapa">Mapa</span>
          </button>
          <button className="boto-aceitar-1">
            <span className="recentes">Recentes</span>
          </button>
        </div>
        <div className="flex-container-16">
          <div className="flex-container-17">
            <span>DE :</span>
            <span>PARA :</span>
          </div>
          <div className="flex-container-18">
            <input className="destino" type="text" />
            <img className="destino-1" src={destino} />
          </div>
          <img className="frame-31" src={frame31} />
        </div>
        <img className="home-indicator" src={homeIndicator} />
      </div>
    </div>
  );
};
export default App;
