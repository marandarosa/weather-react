import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Hartford" />
      </header>
    </div>
  );
}

export default App;
