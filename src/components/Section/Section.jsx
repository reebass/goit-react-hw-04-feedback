// import { FeeadbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({title, children}) => (
  <section>
    <Title className='title'>{title}</Title>
    {children}
  </section>
) 

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}
