# Hello World - Tic-Tac-Toe React

Welcome to the **Tic-Tac-Toe React** repository! 🎮

## 📖 About This Repository

This repository contains a fully functional, interactive tic-tac-toe game built with React. It serves as both a fun game to play and a demonstration of React development skills, including state management, component architecture, and modern UI design.

**Live Demo**: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## 🎯 Purpose

This project was created to showcase:
- Modern React development practices
- Interactive game logic implementation
- Clean, responsive UI design
- State management and component communication
- Git workflow and GitHub Pages deployment

## ✨ Features

This tic-tac-toe game includes several enhanced features:

- **🎮 Interactive Gameplay**: Click on any square to place your X or O
- **🏆 Winner Detection**: Automatically detects and announces the winner with animated effects
- **📚 Game History**: Keep track of all moves made during the game
- **⏮️ Time Travel**: Jump back to any previous move to see the board state
- **🎨 Visual Enhancements**: 
  - FontAwesome icons for X and O markers
  - Smooth animations and pulse effects for winners
  - Clean, modern styling with Century Gothic font
- **📱 Desktop Optimized**: Designed primarily for desktop use

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 12 or higher)
- **npm** (comes with Node.js)
- A modern web browser

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
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
# For newer Node.js versions, use legacy OpenSSL provider
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

## 🎮 How to Play

### Game Rules
1. **Objective**: Get three of your marks (X or O) in a row, column, or diagonal
2. **Players**: Two players take turns placing their marks
3. **Starting**: X always goes first
4. **Winning**: First player to get three in a row wins!

### Playing the Game

1. **Starting a Game**: The game automatically starts with X's turn
2. **Making a Move**: Click on any empty square to place your mark
3. **Turn Indication**: The interface shows whose turn it is next
4. **Winning**: When a player wins, the game displays a celebratory message with animated effects
5. **Game History**: Use the move history buttons to jump back to any previous game state
6. **New Game**: Click "Go to game start" to reset the board

### Interface Elements

- **Game Board**: 3x3 grid of clickable squares
- **Status Display**: Shows current player or winner
- **Move History**: List of buttons to navigate through game states
- **Visual Feedback**: Winning announcements include animated pulse effects

## 🛠️ Technology Stack

- **React 16.13.1**: Core framework for building the user interface
- **FontAwesome**: Icon library for X and O markers
- **CSS3**: Custom styling with animations and responsive design
- **Create React App**: Development environment and build tools
- **GitHub Pages**: Deployment platform

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   └── ...                 # Static assets
├── src/
│   ├── index.js            # Main React component and game logic
│   ├── index.css           # Styling and animations
│   └── ...
├── package.json            # Dependencies and scripts
└── helloworld.md          # This documentation file
```

## 🔧 Development

### Available Scripts

- `npm start`: Runs the development server
- `npm run build`: Creates a production build
- `npm test`: Runs the test suite
- `npm run deploy`: Deploys to GitHub Pages

### Code Structure

The main game logic is contained in `src/index.js` with three primary components:

- **Square**: Individual clickable game squares
- **Board**: 3x3 grid of squares
- **Game**: Main component managing state and game logic

## 🌐 Deployment

This project is automatically deployed to GitHub Pages at:
**https://kelsey-myers.github.io/tic-tac-toe-react**

To deploy updates:
```bash
npm run deploy
```

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Share feedback on the code or gameplay

## 📝 License

This project is open source and available under standard GitHub terms.

---

**Happy Gaming!** 🎊

Enjoy playing tic-tac-toe and exploring the React code. Whether you're here to play a quick game or learn from the implementation, I hope you find this project useful and entertaining!