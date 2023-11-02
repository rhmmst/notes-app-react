import React from "react";
import { Link } from "react-router-dom";

function NavAdd () {
    return (
        <div className="action add-new-page__action">
            <Link to="/notes/add">✔</Link>
        </div>
    )
}

export default NavAdd