import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main.js";
import Registered from "./screens/Registered.js";
import Completed from "./screens/Completed.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/registered" component={Registered} />
        <Route exact path="/completed" component={Completed} />
      </Router>
    </div>
  );
}

export default App;
