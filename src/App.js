import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CallModal from "./components/CallModal";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Route exact path="/" component={CallModal} />
        {/* <Route exact path="/numberEntered" component={} />
        <Route exact path="/notified" component={} /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
