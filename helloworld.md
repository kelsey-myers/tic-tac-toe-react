# Hello World - Tic-Tac-Toe React Game! 🎮

Welcome to this interactive tic-tac-toe game built with React! This repository contains a fully functional, desktop-optimized tic-tac-toe game with advanced features like game history and move replay.

## 🎯 What is this?

This is a modern implementation of the classic tic-tac-toe (noughts and crosses) game built using React. The game features a clean, responsive interface with FontAwesome icons and smooth animations.

## 🌟 Features

- **Interactive Gameplay**: Click on any square to place your X or O
- **Winner Detection**: Automatically detects and celebrates the winner with a pulsing animation
- **Game History**: Complete history of all moves made during the game
- **Time Travel**: Jump back to any previous move to see the board state at that time
- **Move Replay**: Review and replay any point in the game
- **Visual Feedback**: Uses FontAwesome icons for X (✕) and O (○) symbols
- **Responsive Design**: Optimized for desktop viewing
- **Clean UI**: Minimalist design with smooth animations

## 🎮 How to Play

1. **Starting the Game**: The game begins with Player X's turn
2. **Making Moves**: Click on any empty square to place your symbol
3. **Winning**: Get three of your symbols in a row (horizontally, vertically, or diagonally) to win
4. **Game History**: Use the move history buttons on the right to jump to any previous state
5. **New Game**: Click "Go to game start" to restart the game

## 🚀 Live Demo

You can play the game online at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## 💻 Technology Stack

- **React 16.13.1**: Frontend framework
- **FontAwesome**: Icon library for X and O symbols
- **CSS3**: Custom styling with animations
- **HTML5**: Semantic markup
- **JavaScript ES6+**: Modern JavaScript features

## 🛠️ Running Locally

### Prerequisites
- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation & Setup

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

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

The build files will be created in the `build/` directory.

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

## 📱 Device Compatibility

This game is optimized for **desktop viewing only**. While it may work on mobile devices, the best experience is on desktop computers and laptops.

## 🎨 Game Interface

- **Game Board**: 3x3 grid with clickable squares
- **Status Display**: Shows whose turn it is or who won
- **Move History**: List of all moves with jump-to-move functionality
- **Animations**: Winner celebration with pulsing effect

## 🔧 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   └── ...                 # Static assets
├── src/
│   ├── index.js           # Main React components and game logic
│   └── index.css          # Styling and animations
├── package.json           # Project dependencies and scripts
└── helloworld.md         # This documentation file
```

## 🎲 Game Rules

1. The game is played on a 3×3 grid
2. Players take turns placing their symbol (X or O) in empty squares
3. The first player to get 3 of their symbols in a row (up, down, across, or diagonally) wins
4. If all 9 squares are filled and no player has 3 in a row, the game is a draw

## 🎉 Enjoy Playing!

Have fun playing this classic game with a modern twist! Feel free to explore the code, contribute improvements, or use it as a learning resource for React development.

---

*Built with ❤️ using React*