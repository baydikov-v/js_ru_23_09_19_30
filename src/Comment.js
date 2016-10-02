import React, { Component, PropTypes } from 'react'

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        const { text, user } = this.props.comment
        return (
            <p>
                {text}
                <strong>by {user}</strong>
            </p>
        )

    }
}