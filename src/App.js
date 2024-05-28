import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/pages/About.js";
import NotFound from "./components/pages/NotFound.js";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  try {
    const response = await axios.get("https://api.github.com/users");
    setUsers(response.data);
  } 
  catch (error) {
    console.error("Error fetching data:", error);
  }};

  fetchData();}, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={About} />
          <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;