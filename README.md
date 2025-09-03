# Tic-Tac-Toe React Game 🎮

A modern, interactive tic-tac-toe game built with React. This project showcases clean component architecture, state management, and engaging user interface design.

## 📸 Game Preview

![Tic-Tac-Toe Game](https://github.com/user-attachments/assets/db641531-6e03-4885-a241-fe4c10eab8b7)

## 🌟 Features

This tic-tac-toe game includes the following features:
- **Interactive Gameplay**: Click to place X's and O's on the game board
- **Win Detection**: Automatically detects when a player has won the game  
- **Game History**: Stores and displays the complete game history as you play
- **Time Travel**: Review previous moves and jump back to any point in the game
- **Visual Feedback**: Clean UI with FontAwesome icons and smooth animations

## 🚀 Quick Start

You can play the game immediately at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## 💻 Local Development

### Prerequisites
- Node.js (version 14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/kelsey-myers/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   NODE_OPTIONS="--openssl-legacy-provider" npm start
   ```
   *Note: The legacy provider flag may be needed for newer Node.js versions*

4. Open your browser and visit `http://localhost:3000` to play the game!

## 🎯 How to Play

1. The game starts with Player X
2. Click on any empty square to place your mark
3. Players alternate turns (X, then O, then X, etc.)
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins!
5. Use the game history on the right to jump back to previous moves

## 🏗️ Built With

- **React** - Frontend framework for building user interfaces
- **FontAwesome** - Icon library for X's and O's 
- **CSS3** - Modern styling with animations and responsive design
- **Create React App** - Development environment and build tools

## 📱 Compatibility Note

This game is optimized for desktop use. For the best experience, please play on a desktop or laptop computer.

## 🚀 Deployment

This project is automatically deployed to GitHub Pages. To deploy your own version:

```bash
npm run build
npm run deploy
```

---

**Enjoy playing tic-tac-toe!** 🎉