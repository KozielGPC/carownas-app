import "./App.css";
import cellularConnection from "./assets/cellularConnection.svg";
import wifi from "./assets/wifi.svg";
import battery from "./assets/battery.svg";
import homeIndicator from "./assets/homeIndicator.svg";
import pngwing1 from "./assets/pngwing1.png";
const App = () => {
  return (
    <div className="tela-de-bem-vindo">
      <div className="rectangle-324">
        <div className="flex-container">
          <span className="time">9:41</span>
          <img className="cellular-connection" src={cellularConnection} />
          <img className="wifi" src={wifi} />
          <img className="battery" src={battery} />
        </div>
        <img className="pngwing-1" src={pngwing1} />
        <span className="encontre-sua-carona">Encontre sua Carona</span>
        <span className="app-utilizado-na-utf">
          App utilizado na UTFPR para ajudar a locomoção dos alunos
        </span>
        <button className="frame-31">
          <span className="vamos-comear">Vamos começar!</span>
        </button>
        <img className="home-indicator" src={homeIndicator} />
      </div>
    </div>
  );
};
export default App;
