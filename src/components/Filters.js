import React, { Component, PropTypes } from 'react'
import DatePicker from './DatePicker'
import SelectFilter from './SelectFilter'
import { connect } from 'react-redux'
import { searchArticles } from '../AC/articles'

class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = () => {
        const { searchArticles, filters } = this.props
        searchArticles(filters);
    }
    render() {
        const { articles } = this.props

        return (
            <div>
                <DatePicker />
                <SelectFilter articles = {articles} />
                <button onClick={this.handleChange}>Search</button>
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}), { searchArticles })(Filter);