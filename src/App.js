import './App.css';
import './heroku.css';
import Header from "./Header";
import MainContainer from "./MainContainer";
import About from "./About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <br></br>
      <span id="nav-2">
      <Link to="/about">
        <button className="route-link">About</button>
      </Link>
      <Link to="/">
        <button className="route-link">Home</button>
      </Link>
      </span>
      <Switch>
      <Route exact path = "/about" component={About} />
      <Route exact path="/" component={MainContainer} />
      </Switch >
    </div>
    </Router>
  );
}

export default App;
