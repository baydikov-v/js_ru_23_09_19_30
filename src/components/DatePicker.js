import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import { selectDateRange } from '../AC/filters'
import { connect } from 'react-redux'

class DatePicker extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        const { selectDateRange } = this.props
        selectDateRange(range);
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, { selectDateRange })(DatePicker)