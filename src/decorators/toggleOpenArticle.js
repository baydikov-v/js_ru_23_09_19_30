import React from 'react'

export default function toggleOpenArticle (Component) {
    return class WrappedComponent extends React.Component {
        state = {
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            this.setState({
                openArticleId: id
            })
        }
    }
}