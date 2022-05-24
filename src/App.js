import logo from "./logo.svg";
import "./App.css";
import Notification from "./components/Notification";
// import { sendMessage } from "./services/send-notification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center bg-red-500 underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Notification />
        {/* <button onClick={() => sendMessage()}>Send</button> */}
      </header>
    </div>
  );
}

export default App;
