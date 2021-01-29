import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            {/* 리액트가 죽고 새 페이지가 새로고침됨 */}
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;