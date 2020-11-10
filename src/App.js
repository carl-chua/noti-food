import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/numberEntered" component={} />
        <Route exact path="/notified" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
