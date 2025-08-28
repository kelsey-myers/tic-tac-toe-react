# Hello World - Tic-Tac-Toe React Game

Welcome to this React-based Tic-Tac-Toe game! This project is a modern implementation of the classic Tic-Tac-Toe game built with React and featuring a polished user interface.

## 🎮 What is this project?

This is an interactive Tic-Tac-Toe game that runs in your web browser. It's built using React and provides a full-featured gaming experience with game history tracking and an intuitive interface.

## ✨ Features

This minigame includes the following features:

- **Play Tic-Tac-Toe**: Classic 3x3 grid gameplay for two players
- **Winner Detection**: Automatically detects and announces when a player wins
- **Game History**: Stores complete game history as you play
- **Time Travel**: Review previous moves and jump back to any point in the game
- **Animated UI**: Features pulse animations for winners and FontAwesome icons for X and O
- **Responsive Design**: Optimized for desktop use

## 🚀 How to Use

### Playing the Game

1. **Visit the live game**: [https://kelsey-myers.github.io/tic-tac-toe-react/](https://kelsey-myers.github.io/tic-tac-toe-react/)
2. **Take turns**: Players alternate clicking on empty squares
3. **Win condition**: Get three of your symbols (X or O) in a row - horizontally, vertically, or diagonally
4. **Review history**: Use the move history buttons to go back to previous game states
5. **Start over**: Click "Go to game start" to begin a new game

### Controls

- **Click any empty square** to place your symbol
- **Use the move list** on the right to jump to any previous game state
- **X always goes first**

## 💻 Development Setup

If you want to run this project locally or contribute to it:

### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kelsey-myers/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   export NODE_OPTIONS="--openssl-legacy-provider"
   npm start
   ```

4. **Open your browser** to `http://localhost:3000`

### Building for Production

```bash
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

### Deployment

This project is set up for GitHub Pages deployment:

```bash
npm run deploy
```

## 🛠 Technology Stack

- **React 16.13.1**: Core framework
- **FontAwesome**: Icons for X and O symbols
- **CSS3**: Styling with animations
- **GitHub Pages**: Hosting platform

## 📱 Browser Compatibility

This game is optimized for desktop browsers and supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: This game is designed for desktop use and may not work optimally on mobile devices.

## 🎯 Game Rules

1. The game is played on a 3×3 grid
2. Players take turns placing their mark (X or O) in empty squares
3. X always goes first
4. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 squares are filled and no player has 3 in a row, the game is a draw

---

**Enjoy playing Tic-Tac-Toe!** 🎉