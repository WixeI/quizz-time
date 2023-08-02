import React from 'react';
import { render, screen, } from '@testing-library/react'
import { beforeEach } from 'node:test';
import QuizDisplay from './QuizDisplay';

describe('Display Quiz Component', () => {
  beforeEach(() => {
    render(<QuizDisplay />);
  });

  it('View total numbers', () => {
    const totalView = screen.getByTestId('quiz-display-total-view');

    expect(totalView).toBeInTheDocument();
  });

  test('View Actual number', () => {
    expect(screen.getByTestId('quiz-display-actual-view')).toBeInTheDocument();
  });
});
