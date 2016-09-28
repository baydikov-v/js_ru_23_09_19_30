import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        const commentComponents = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const btnText = (isOpen ? 'Закрыть' : 'Открыть') + ' комментарии'
        const commentBlock = isOpen ? (
            <ul className="comments">
                {commentComponents}
            </ul>
        ) : null

        return (
            <div>
                <button onClick = {this.toggleOpen}>{btnText}</button>
                {commentBlock}
            </div>
        )

    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}