import axios from "axios";
import React, { useEffect, useState } from "react";
import Users from "./Users";
const Search = () => {
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        const search = localStorage.getItem("search");
        const text = localStorage.getItem("text");
        if (search && text) {
            setUsers(JSON.parse(search));
            setText(text);
        }
    },[]);

    const searchUsers = async (text) => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
            setUsers(response.data.items);
            localStorage.setItem("search", JSON.stringify(response.data.items));
            } 
        catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const onSubmit = (e) => {
            e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } 
        else {
            searchUsers(text);
            localStorage.setItem("text", text);
            setText("");
        }
    };
    const clearUsers = () => {
        setUsers([]);
        localStorage.removeItem("search");
        localStorage.removeItem("text");
        setText("");
    };

    const onChange = (e) => setText(e.target.value);

return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
            <button className="btn btn-danger btn-block" onClick={clearUsers}>Clear</button>
        )}
      <Users users={users} />
    </div>
    );
};
export default Search;