import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {
    };

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        const { articleId, addComment } = this.props
        addComment({...this.state, articleId});
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, { addComment })(NewCommentForm)