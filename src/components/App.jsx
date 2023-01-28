import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeeadbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
// import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.id]: prevState[e.target.id] + 1,
    }));
  };

  countTotalFeedBack = () => {
    let total = 0;
    for (const value of Object.values(this.state)) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedBack()) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeeadbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrementLeaveFeedback}
          />
        </Section>
        <Section title="Statisctics">
          {!this.countTotalFeedBack() ? (
            <Notification message="There is no feedback"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedBack}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
