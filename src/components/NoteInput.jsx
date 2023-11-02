import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            body: ''
        }

        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeTitleHandler(event) {
        this.setState(()=>{
            return {
                title: event.target.value,
            }
        })
    }

    onChangeBodyHandler(event) {
        this.setState(()=>{
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render () {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder="Catatan rahasia" className="add-new-page__input__title" value={this.state.title} onChange={this.onChangeTitleHandler}/>
                <textarea type="text" placeholder="Sebenarnya saya adalah..." className="add-new-page__input__body" value={this.state.body} onChange={this.onChangeBodyHandler}/>
                <button type="submit" className="action add-new-page__action"></button>
            </form>
        )
    }
}

NoteInput.propType = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput