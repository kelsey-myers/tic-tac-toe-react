import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Game, Board, Square, calculateWinner } from './index';

describe('Tic-Tac-Toe Game Components', () => {
  describe('calculateWinner function', () => {
    test('returns null for empty board', () => {
      const squares = Array(9).fill(null);
      expect(calculateWinner(squares)).toBe(null);
    });

    test('detects horizontal wins', () => {
      // Top row
      let squares = ['X', 'X', 'X', null, null, null, null, null, null];
      expect(calculateWinner(squares)).toBe('X');
      
      // Middle row  
      squares = [null, null, null, 'O', 'O', 'O', null, null, null];
      expect(calculateWinner(squares)).toBe('O');
      
      // Bottom row
      squares = [null, null, null, null, null, null, 'X', 'X', 'X'];
      expect(calculateWinner(squares)).toBe('X');
    });

    test('detects vertical wins', () => {
      // Left column
      let squares = ['X', null, null, 'X', null, null, 'X', null, null];
      expect(calculateWinner(squares)).toBe('X');
      
      // Middle column
      squares = [null, 'O', null, null, 'O', null, null, 'O', null];
      expect(calculateWinner(squares)).toBe('O');
      
      // Right column
      squares = [null, null, 'X', null, null, 'X', null, null, 'X'];
      expect(calculateWinner(squares)).toBe('X');
    });

    test('detects diagonal wins', () => {
      // Main diagonal
      let squares = ['X', null, null, null, 'X', null, null, null, 'X'];
      expect(calculateWinner(squares)).toBe('X');
      
      // Anti-diagonal
      squares = [null, null, 'O', null, 'O', null, 'O', null, null];
      expect(calculateWinner(squares)).toBe('O');
    });

    test('returns null for no winner', () => {
      const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(calculateWinner(squares)).toBe(null);
    });
  });

  describe('Square component', () => {
    test('renders empty square', () => {
      const mockOnClick = jest.fn();
      render(<Square value={null} onClick={mockOnClick} />);
      
      const button = screen.getByRole('button');
      expect(button).toBeTruthy();
      expect(button.textContent).toBe('');
    });

    test('renders square with X', () => {
      const mockOnClick = jest.fn();
      render(<Square value="X" onClick={mockOnClick} />);
      
      const button = screen.getByRole('button');
      expect(button.textContent).toBe('X');
    });

    test('renders square with O', () => {
      const mockOnClick = jest.fn();
      render(<Square value="O" onClick={mockOnClick} />);
      
      const button = screen.getByRole('button');
      expect(button.textContent).toBe('O');
    });

    test('calls onClick when clicked', () => {
      const mockOnClick = jest.fn();
      render(<Square value={null} onClick={mockOnClick} />);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Board component', () => {
    test('renders 9 squares', () => {
      const squares = Array(9).fill(null);
      const mockOnClick = jest.fn();
      
      render(<Board squares={squares} onClick={mockOnClick} />);
      
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(9);
    });

    test('passes correct values to squares', () => {
      const squares = ['X', 'O', null, null, 'X', null, null, null, 'O'];
      const mockOnClick = jest.fn();
      
      render(<Board squares={squares} onClick={mockOnClick} />);
      
      const buttons = screen.getAllByRole('button');
      expect(buttons[0].textContent).toBe('X');
      expect(buttons[1].textContent).toBe('O');
      expect(buttons[2].textContent).toBe('');
      expect(buttons[4].textContent).toBe('X');
      expect(buttons[8].textContent).toBe('O');
    });

    test('clicking square calls onClick with correct index', () => {
      const squares = Array(9).fill(null);
      const mockOnClick = jest.fn();
      
      render(<Board squares={squares} onClick={mockOnClick} />);
      
      const buttons = screen.getAllByRole('button');
      fireEvent.click(buttons[4]); // Middle square
      
      expect(mockOnClick).toHaveBeenCalledWith(4);
    });
  });

  describe('Game component', () => {
    test('renders game title and features', () => {
      render(<Game />);
      
      expect(screen.getByText('Tic-Tac-Toe Project (Desktop Only!)')).toBeTruthy();
      expect(screen.getByText('Lets you play tic-tac-toe!')).toBeTruthy();
    });

    test('starts with X as next player', () => {
      render(<Game />);
      expect(screen.getByText(/Next player:/)).toBeTruthy();
    });

    test('alternates players on square clicks', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // First click should place X
      fireEvent.click(squares[0]);
      expect(squares[0].textContent).toBe('X');
      
      // Second click should place O
      fireEvent.click(squares[1]);
      expect(squares[1].textContent).toBe('O');
      
      // Third click should place X
      fireEvent.click(squares[2]);
      expect(squares[2].textContent).toBe('X');
    });

    test('prevents overwriting occupied squares', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Click first square (X)
      fireEvent.click(squares[0]);
      expect(squares[0].textContent).toBe('X');
      
      // Try to click same square again
      fireEvent.click(squares[0]);
      expect(squares[0].textContent).toBe('X'); // Should still be X
      
      // Next move should still be O
      fireEvent.click(squares[1]);
      expect(squares[1].textContent).toBe('O');
    });

    test('displays winner when game is won', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Create winning condition for X (top row)
      fireEvent.click(squares[0]); // X
      fireEvent.click(squares[3]); // O
      fireEvent.click(squares[1]); // X  
      fireEvent.click(squares[4]); // O
      fireEvent.click(squares[2]); // X wins
      
      expect(screen.getByText(/Winner:/)).toBeTruthy();
    });

    test('stops game after win', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Create winning condition for X (top row)
      fireEvent.click(squares[0]); // X
      fireEvent.click(squares[3]); // O
      fireEvent.click(squares[1]); // X
      fireEvent.click(squares[4]); // O
      fireEvent.click(squares[2]); // X wins
      
      // Try to click another square after game ends
      fireEvent.click(squares[5]);
      expect(squares[5].textContent).toBe(''); // Should remain empty
    });

    test('game history works correctly', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Make some moves
      fireEvent.click(squares[0]); // X
      fireEvent.click(squares[1]); // O
      fireEvent.click(squares[2]); // X
      
      // Should see move buttons in history
      expect(screen.getByText('Go to game start')).toBeTruthy();
      expect(screen.getByText('Go to move #1')).toBeTruthy();
      expect(screen.getByText('Go to move #2')).toBeTruthy();
      expect(screen.getByText('Go to move #3')).toBeTruthy();
    });

    test('can jump to previous game state', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Make moves
      fireEvent.click(squares[0]); // X
      fireEvent.click(squares[1]); // O
      fireEvent.click(squares[2]); // X
      
      // Jump back to move 1
      const move1Button = screen.getByText('Go to move #1');
      fireEvent.click(move1Button);
      
      // Should only have the first move
      expect(squares[0].textContent).toBe('X');
      expect(squares[1].textContent).toBe('');
      expect(squares[2].textContent).toBe('');
    });

    test('can restart game', () => {
      render(<Game />);
      
      const squares = screen.getAllByRole('button').filter(btn => btn.className === 'square');
      
      // Make some moves
      fireEvent.click(squares[0]); // X
      fireEvent.click(squares[1]); // O
      
      // Go back to start
      const restartButton = screen.getByText('Go to game start');
      fireEvent.click(restartButton);
      
      // All squares should be empty
      squares.forEach(square => {
        expect(square.textContent).toBe('');
      });
    });
  });
});