import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: true,
        opened: {
            a: true
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const body = isOpen ? <section>{article.text}</section> : null
        const comments = typeof article.comments != 'undefined' ? <CommentList comments={article.comments} /> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
/*

        this.setState({
            opened: {...this.state.opened, a: false}
        })
*/
    }
}



/*
export default (props) => {
    const { article } = props

    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
