import React from 'react';
import "../../../../App.css"
import {Link} from "react-router-dom"

const DashBoard = ({Name}) => {
    return (
        <div className="dashboard">
            <h1>Welcome to {Name}'s DashBoard</h1>
            <h2>News Baord is Working with Latest News</h2>
            <p><Link className="linkk" to="/Users">User Entry</Link>|<Link className="linkk" to="/News"> Latest News</Link></p>
        </div>
    );
}

export default DashBoard;
