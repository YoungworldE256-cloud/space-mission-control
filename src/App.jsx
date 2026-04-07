import MissionControl from "./Components/MissionControl";
import INITIAL_MISSIONS from "./data.js";
import "./App.css";

function App() {


  return (
    <div className="App">
      <h1>Space Mission Control</h1>
      <MissionControl missions={INITIAL_MISSIONS} />
    </div>
  );
}

export default App;