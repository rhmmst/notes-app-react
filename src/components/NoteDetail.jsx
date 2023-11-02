import React from "react";
import NoteButton from "./NoteButton";

function NoteDetail ({title, createdAt, body, onDelete}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{createdAt}</p>
            <p>{body}</p>
            <NoteButton onDelete={onDelete}/>
        </div>
    )
}

export default NoteDetail