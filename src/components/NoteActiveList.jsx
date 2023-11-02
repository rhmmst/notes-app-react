import React from "react";
import NoteBody from "./NoteBody";


function NoteActiveList({notes, onDelete}) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? 
                notes.map(note=> 
                <NoteBody
                    key={note.id}
                    {...note}
                    onDelete={onDelete}
                />)
                : <div>Tidak Ada Catatan</div>
            }
        </div>
    )
}

export default NoteActiveList