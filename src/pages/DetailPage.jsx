import React from "react";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import { useParams, useNavigate } from "react-router-dom";
import NoteButton from "../components/NoteButton";
import { deleteNote, archiveNote, unarchiveNote, getAllNotes } from "../utils/local-data";

function DetailPageWrapper () {
const {id} = useParams();
const navigate = useNavigate();

    return (
        <DetailPage id={id} navigate={navigate}/>
    )
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getNote: getNote(props.id),
            notes: getAllNotes()
        }
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    }

    onDeleteNoteHandler(id){ {
        deleteNote(id)
        const { navigate } = this.props
        navigate('/')
    }}

    render() {
        if (this.state.getNote === undefined) {
            return (
                <div className="app-container">
                    <p>404 Pages! Not Found</p>
                </div>
            );
        }
        return (
            <section>
                <NoteDetail {...this.state.getNote} onDelete={this.onDeleteNoteHandler}/>
            </section>
        )
    }
}

export default DetailPageWrapper