import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import NoteButton from "./NoteButton";


function NoteBody ({id, title, createdAt, body, onDelete}) {
    return (
        <div className="note-item">
            <h2 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h2>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

// NoteBody.propTypes = {
//     title: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
// }

export default NoteBody;