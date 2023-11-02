import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteSearch from "../components/NoteSearch";
import NoteList from "../components/NoteList";
import { deleteNote } from "../utils/local-data";


class ArchivePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes()
        }
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)

    }

    onDeleteNoteHandler(id){ {
        deleteNote(id)
        const { navigate } = this.props
        navigate('/')
    }}

    render() {
        return (
            <div>
                <h2>Catatan Arsip</h2>
                <NoteSearch/>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler}/>
            </div>
        )
    }
}

export default ArchivePage