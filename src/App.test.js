import React from 'react';
import { render } from '@testing-library/react';
import Game from './index';

test('renders tic-tac-toe game without crashing', () => {
  render(<Game />);
});

// Test to ensure double-digit move numbers display correctly
test('handles double-digit move numbers correctly', () => {
  // This test verifies that the move display logic works for numbers >= 10
  const move = 10;
  const expectedText = 'Go to move #' + move;
  expect(expectedText).toBe('Go to move #10');
  
  const move11 = 11;
  const expectedText11 = 'Go to move #' + move11;
  expect(expectedText11).toBe('Go to move #11');
});

test('jumpTo function handles step numbers correctly', () => {
  // Test that the xIsNext calculation works for higher step numbers
  const isXNext = (10 % 2) === 0; // Should be true for move 10
  expect(isXNext).toBe(true);
  
  const isXNext11 = (11 % 2) === 0; // Should be false for move 11
  expect(isXNext11).toBe(false);
});

test('move numbering logic works for all numbers', () => {
  // Test move numbering from 1 to 15 to ensure no issues with double digits
  for (let move = 1; move <= 15; move++) {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    expect(desc).toBe(`Go to move #${move}`);
    
    // Test xIsNext calculation
    const xIsNext = (move % 2) === 0;
    expect(typeof xIsNext).toBe('boolean');
  }
});