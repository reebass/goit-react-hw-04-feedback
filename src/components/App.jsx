import { useState } from 'react';
import { Section } from './Section/Section';
import { FeeadbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export const App = () => {
  const feedbackButton = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementLeaveFeedback = feedbackButton => {
    switch (feedbackButton) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedBack = good + bad + neutral;
  const countPositiveFeedbackPercentage = ((good / countTotalFeedBack) * 100).toFixed(0);

  return (
    <>
      <Section title="Please leave feedback">
        <FeeadbackOptions
          options={feedbackButton}
          onLeaveFeedback={handleIncrementLeaveFeedback}
        />
      </Section>
      <Section title="Statisctics">
        {!countTotalFeedBack ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedBack}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
