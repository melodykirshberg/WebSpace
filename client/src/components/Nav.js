import React from "react";
import Search from "./Search";

function Nav(props) {
    return (
        <nav className="navbar">
            <div className="search-area col-4">
                <Search {...props} /
                >
            </div>
        </nav>
    )
};

export default Nav;