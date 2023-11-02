import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddPage () { 

    const navigate = useNavigate()

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/')
    }

    return (
        <div className="add-new-page__input">
            <NoteInput addNote={onAddNoteHandler}/>
        </div>
    )
}

export default AddPage