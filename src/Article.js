import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.any.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    }

    state = {
        opened: {
            a: true
        }
    }

    render() {
        const { article, isOpen, openArticle } = this.props

        const body = isOpen ? (<section>
            <div onClick = {openArticle}>{article.text}</div>
            <CommentList comments = {article.comments}/>
        </section>) : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
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
