import React from "react";
import NoteBody from "./NoteBody";


function NoteArchiveList({notes, onArchive, onDelete}) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? 
                notes.map(note=> 
                <NoteBody
                    key={note.id}
                    onArchive={onArchive}
                    {...note}
                    onDelete={onDelete}
                />)
                : <div>Tidak Ada Catatan</div>
            }
        </div>
    )
}

export default NoteArchiveList