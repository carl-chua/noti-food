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
        <Route exact path="/" component={Main} />
        <Route exact path="/registered" component={Registered} />
        <Route exact path="/notified" component={Completed} />
      </Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "28px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
