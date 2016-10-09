import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { selectArticles } from '../AC/filters'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = (selected) => {
        this.setState({ selected })
        const { selectArticles } = this.props
        var ids = [];
        if (selected.length) {
            for (var i = 0, length = selected.length; i < length; i++) {
                ids.push(selected[i]['value']);
            }
        }
        selectArticles(ids)
    }

    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(null, { selectArticles })(SelectFilter)