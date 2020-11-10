import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CallModal from "./components/CallModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InformationCard from "./components/InformationCard";

function App() {
  return (
    <div className="App">
      <Header />
      <InformationCard />
      <Footer />

      {/*
      <Router>
        <Route exact path="/" component={} />
        <Route exact path="/numberEntered" component={} />
        <Route exact path="/notified" component={} />
      </Router>
      <Footer />
      */}
    </div>
  );
}

export default App;
