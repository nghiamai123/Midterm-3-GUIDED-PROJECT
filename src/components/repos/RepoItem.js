import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RepoItem = (props) => {
    const { name, full_name, owner } = props.repos;

    return (
    <div className="card text-left" style={{width: "auto"}}>
        <img
        src={owner.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
        />

        <h3>name: <Link to={name}>{name}</Link></h3>
        <div>full_name: <Link to={full_name}>{full_name}</Link></div>
        <div>overview: <Link to={owner.html_url}>{owner.html_url}</Link></div>
    </div>
    );
};
export default RepoItem;