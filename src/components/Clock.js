import React, { Component } from 'react'
import axios from "axios"
import BlueBox from './BlueBox'
import timeManager from '../services/timeManager'
import {FormattedMessage} from "react-intl"
import Video from './video/Video'

export default class Clock extends Component {

    state = {
        time: 0,
        days: 0, 
        hours: 0,
        min: 0,
        seconds: 0,
        deadline: new Date("2020-12-25"),
        loading: true
    }

    async componentDidMount () {

        const {data} = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Madrid")
        const time = Math.floor((Date.parse(this.state.deadline) - Date.parse(data.datetime) ) / 1000) // Seconds left till deadline 

        this.setState({
            time,
            days: timeManager.remainingDays(time),
            hours: timeManager.remainingHours(time),
            min: timeManager.remainingMinutes(time),
            seconds: timeManager.remainingSeconds(time)
        })   
        
        setInterval(()=> this.setState({
            time: this.state.time - 1,
            days: timeManager.remainingDays(this.state.time - 1),
            hours: timeManager.remainingHours(this.state.time - 1),
            min: timeManager.remainingMinutes(this.state.time - 1),
            seconds: timeManager.remainingSeconds(this.state.time - 1)

        }), 1000)

        this.setState({loading: false})
}

    correctValue(value) {
        if (value < 10){
            value = "0" + value
        }
        return value
    }
    

    render() {
        const {time, days, hours, min, seconds, loading} = this.state
        return (
            <>
            {loading ? 
            <FormattedMessage id="loading">
                {message => <p> {message} </p>}
            </FormattedMessage>
            :
            <div className="clock">
                {
                    time > 0 ? (
                        <>
                        <FormattedMessage id="title">
                            {message => <h1>{message}</h1>}
                        </FormattedMessage>
                        <div className="blue-box-container">
                        <BlueBox units="days" value={(this.correctValue(days))}/>
                        <BlueBox units="hours" value={this.correctValue(hours)}/>
                        <BlueBox units="minutes" value={(this.correctValue(min))}/>
                        <BlueBox units="seconds" value={(this.correctValue(seconds))}/>
                        </div>
                        </>
                    ) : (
                        <Video/>
                    )
                }
            </div>}
            </>
        )
    }
}
