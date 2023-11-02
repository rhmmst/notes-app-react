import React from "react";
import NoteBody from "./NoteBody";
import PropTypes from 'prop-types';

function NoteList({notes}) {
    return (
        <div className="notes-list">
            {notes.map((note)=>(
                <NoteBody key={note.id} {...note}/>
            ))}
        </div>
    )
}

// NoteList.propTypes = {
//     notes: PropTypes.array,
// }

export default NoteList;