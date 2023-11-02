import React from "react";
import { Link } from "react-router-dom";

function NoteNav () {
    return (
        <ul>
            <li><Link to="/">Aplikasi Catatan</Link></li>
            <li><Link to="/notes/archive">Arsip</Link></li>
        </ul>
    )
}

export default NoteNav