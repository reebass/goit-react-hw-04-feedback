import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export const FeeadbackOptions = ({options, onLeaveFeedback}) => (
    <Container className='btn-container'>
    {options.map((feedback)=> (
        <Button
          className='btn'
          type="button"
          key={feedback}
          id={feedback}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback}
        </Button>
    ))}
  </Container>
) 


FeeadbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
}