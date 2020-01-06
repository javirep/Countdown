import React from 'react'
import {FormattedMessage} from "react-intl"

export default function BlueBox(props) {
    return (
        <div className="blue-box">
        <h2>{props.value}</h2>
            <FormattedMessage id={props.units}>
                {message => <h3>{message.toUpperCase()}</h3>}
            </FormattedMessage>
        </div>
    )
}
