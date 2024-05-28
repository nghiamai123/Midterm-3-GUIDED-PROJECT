import React from "react";
import RepoItem from "./RepoItem.js";
const Repos = (props) => {
    const { repos } = props;
    
    return (
    <div style={userStyle}>
        <h3>{repos.length > 0 && "Repository:" }</h3>
        { repos.map((repo) => (
            <RepoItem key={repo.id} repos={repo} />
        ))}
    </div>
);};


const userStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "auto",
    gap: "1rem",
};

export default Repos;