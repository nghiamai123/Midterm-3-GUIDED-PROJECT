import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
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
    <Navbar />
    <div className="container">
      <h1>GitHub Users Data</h1>
    </div>
      <Users users={users} />
    </div>
  );
}

export default App;