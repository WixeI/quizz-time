import React from 'react';
import { render, screen,  } from '@testing-library/react'
import { beforeEach } from "node:test";
import QuizDisplay from './QuizDisplay';

describe('Display Quiz Component', () => {
  beforeEach(() => {
    render(<QuizDisplay />);
  });
});
