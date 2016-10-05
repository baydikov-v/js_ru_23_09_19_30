import React, { Component, PropTypes } from 'react'

class CommentForm extends Component {

    state = {
        name: '',
        comment: ''
    }
    handleChange = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    submit () {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <br />
                <p><b>Add your comment:</b></p>
                user name: <input type="text" name="name" value = {this.state.name} onChange = {this.handleChange}/><br />
                comment: <textarea name="comment" value = {this.state.comment} onChange = {this.handleChange}></textarea><br />
                <input type="submit" value="Submit" onClick = {this.submit.bind(this)}/>
            </div>
        );
    }
}

export default CommentForm