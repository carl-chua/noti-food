import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./screens/Main";
import Registered from "./screens/Registered";
import Completed from "./screens/Completed";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="AppNotNotified">
          <Route exact path="/" component={Main} />
          <Route exact path="/registered" component={Registered} />
        </div>
        <div className="AppNotified">
          <Route exact path="/notified" component={Completed} />
        </div>
      </Router>
    </div>
  );
}

export default App;
