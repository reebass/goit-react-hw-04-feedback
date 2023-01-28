import React from 'react';
import PropTypes from 'prop-types';
import { Item, List, Stats, Value } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
        <List className="Statistics">
            <Item>
              <Stats>Good:</Stats><Value>{good}</Value>
            </Item>
            <Item>
              <Stats>Neutral:</Stats><Value>{neutral}</Value>
            </Item>
            <Item>
              <Stats>Bad:</Stats><Value>{bad}</Value>
            </Item>
            <Item>
              <Stats>Total:</Stats><Value>{total()}</Value>
            </Item>
            <Item>
              <Stats>Positive feedback:</Stats><Value>{positivePercentage()}%</Value>
            </Item>
          </List>
)

Event.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
}