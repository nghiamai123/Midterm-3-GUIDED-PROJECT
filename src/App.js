import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
function App() {

useEffect(() => {

  const fetchData = async () => {
  try {
    const response = await axios.get("https://api.github.com/users");
    console.log("GitHub Users:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();

}, []); 
return (
<div className="App">
  <Navbar />
  <div className="container">
    <h1>Hello from React</h1>
  </div>
</div>
);}
export default App;