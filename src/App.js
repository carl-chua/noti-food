import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CallModal from "./components/CallModal.js";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CallModal} />
        {/* <Route exact path="/numberEntered" component={} />
        <Route exact path="/notified" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
