# Hello World! 🎯

Welcome to the **Tic-Tac-Toe React** repository! This is a modern, interactive tic-tac-toe game built with React that brings the classic game to your web browser.

## 🎮 What is this repository?

This repository contains a fully-featured tic-tac-toe game implementation using React.js. It's designed as a desktop-focused web application that showcases modern React development practices while providing an engaging gaming experience.

## ✨ Features

This tic-tac-toe game includes the following exciting features:

- **Interactive Gameplay**: Click to place your X or O on the game board
- **Win Detection**: Automatically detects when a player has won the game with visual feedback
- **Game History**: Stores complete game history as you play, allowing you to review past moves
- **Time Travel**: Navigate back to any previous state of the game board
- **Beautiful Icons**: Uses FontAwesome icons for X (times) and O (circle) symbols
- **Responsive Design**: Clean, centered layout optimized for desktop usage
- **Move Navigation**: Jump to any point in the game with the move history buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16+ recommended)
- npm or yarn package manager

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
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

## 🎯 How to Play

1. **Start Playing**: The game begins with player X's turn
2. **Make Your Move**: Click on any empty square to place your symbol
3. **Win the Game**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Review History**: Use the move history buttons on the right to jump back to any previous game state
5. **Start Over**: Click "Go to game start" to begin a new game

## 🛠 Technical Details

- **Framework**: React.js (Functional and Class Components)
- **Styling**: Custom CSS with responsive design
- **Icons**: FontAwesome React components
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/           # Static assets
├── src/
│   ├── index.js      # Main game logic and components
│   ├── index.css     # Game styling and animations
│   └── ...
├── package.json      # Dependencies and scripts
└── helloworld.md     # This documentation file
```

## 🌟 Key Components

- **Game**: Main component managing game state and history
- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable game squares
- **calculateWinner**: Utility function for win detection

## 📋 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

The game features a clean, modern design with:
- Animated winner announcements
- Hover effects and smooth transitions
- FontAwesome icons for game pieces
- Responsive layout for different screen sizes

## 🤝 Contributing

This is a learning project showcasing React development. Feel free to fork, modify, and enhance the game with your own features!

## 📄 License

This project is open source and available under standard GitHub terms.

---

**Enjoy playing tic-tac-toe! May the best strategist win!** 🏆