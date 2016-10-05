import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

function sunday(day) {
    return day.getDay() === 0;
}

class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null,
        from: null,
        to: null
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }
    convertDate (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-');
    }

    render() {
        const { from, to } = this.state
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select
                    options = {options}
                    value = {selected}
                    multi = {true}
                    onChange = {this.handleChange}
                />
                <DayPicker
                    disabledDays={ sunday }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick.bind(this) }
                />
                { from && to &&
                <p style={{textAlign: "center"}}>
                Date selected form { this.convertDate(from) } to { this.convertDate(to) }.<br />
                    <a href="" onClick={this.handleResetClick.bind(this)}>Reset</a>
                </p>
                    }
            </div>
        )
    }
}

export default Filter