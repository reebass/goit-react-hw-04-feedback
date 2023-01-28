import React from 'react';
import PropTypes from 'prop-types';
import {Message} from './Notification.styled'

export const Notification = ({message}) => (
    <Message>{message}</Message>
)

Event.PropTypes = {
    message: PropTypes.string.isRequired,
}

