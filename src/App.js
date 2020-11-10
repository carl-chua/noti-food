import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CallModal from "./components/CallModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InformationCard from "./components/InformationCard";
import Main from "./screens/Main";
import Registered from "./screens/Registered";
import Completed from "./screens/Completed";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/numberEntered" component={Registered} />
        <Route exact path="/notified" component={Completed} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
