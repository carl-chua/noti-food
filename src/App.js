import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={} />
        <Route exact path="/numberEntered" component={} />
        <Route exact path="/notified" component={} />
      </Router>
    </div>
  );
}

export default App;
