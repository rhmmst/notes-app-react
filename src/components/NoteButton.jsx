import React from "react";
import PropTypes from 'prop-types';


function NoteButton ({onDelete, onArchive, id}) {
    return (
        <div className="detail-page__action">
            <button className="action" onClick={()=>onDelete(id)}>Del</button>
            <button className="action" onClick={()=>onArchive(id)}>Arc</button>
        </div>
    )
}

// NoteButton.propTypes = {
//     onDelete: PropTypes.func.isRequired,
//     onArchive: PropTypes.func.isRequired
// }

export default NoteButton;