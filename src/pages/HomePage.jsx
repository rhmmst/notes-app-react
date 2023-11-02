import React from "react";
import { deleteNote, getActiveNotes, getAllNotes, unarchiveNote } from "../utils/local-data";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import NavAdd from "../components/NavAdd";
import { Routes, Route} from "react-router-dom";
import AddPage from "./AddPage";
import NoteActiveList from "../components/NoteActiveList";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNotes: getActiveNotes(),
            notes: getAllNotes()
        }
    }


    render () {
        return (
            <div> 
                <h2>Catatan Aktif</h2>
                <NoteSearch />
                <NoteActiveList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
                <NavAdd/>
            </div>
        )
    }
}

export default HomePage