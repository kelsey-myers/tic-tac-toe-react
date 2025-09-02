# Tic-Tac-Toe React Game

A feature-rich, interactive tic-tac-toe game built with React that goes beyond the basic gameplay with advanced features like game history, time travel, and smooth animations.

![Tic-Tac-Toe Game](https://img.shields.io/badge/React-16.13.1-blue.svg) ![Build Status](https://img.shields.io/badge/build-passing-green.svg) ![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎮 Live Demo

Play the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## ✨ Features

This isn't just any ordinary tic-tac-toe game! It includes several advanced features:

- **🎯 Classic Gameplay**: Play tic-tac-toe with two players (X and O)
- **🏆 Winner Detection**: Automatically detects and celebrates the winner with animations
- **📚 Game History**: Stores a complete history of all moves made during the game
- **⏰ Time Travel**: Jump back to any previous move and continue playing from that point
- **🎨 Smooth Animations**: Winner celebration with pulsing animations
- **🖥️ Desktop Optimized**: Designed for desktop gameplay experience
- **🎭 FontAwesome Icons**: Beautiful X and O symbols using FontAwesome icons

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kelsey-myers/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   The game will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
# For newer Node.js versions, you may need to set the OpenSSL legacy provider
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

## 🎯 How to Play

1. **Starting the Game**: The game board displays a 3x3 grid of empty squares
2. **Making Moves**: Players take turns clicking on empty squares
   - Player 1 uses **X** (represented by a ✕ icon)
   - Player 2 uses **O** (represented by a ○ icon)
3. **Winning**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Game History**: 
   - View all previous moves in the sidebar
   - Click "Go to move #X" to jump back to any previous game state
   - Click "Go to game start" to restart the game
5. **Next Player**: The current player is indicated at the top of the game info panel

## 🏗️ Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Site favicon
│   └── manifest.json       # Web app manifest
├── src/
│   ├── index.js           # Main game components and logic
│   └── index.css          # Styles and animations
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Technical Details

### Built With

- **React 16.13.1** - Frontend framework
- **FontAwesome** - Icons for game symbols
- **CSS3** - Styling and animations
- **Create React App** - Development toolchain

### Key Components

- **`Game`** - Main game controller managing state and history
- **`Board`** - Renders the 3x3 game grid
- **`Square`** - Individual clickable square component
- **`calculateWinner`** - Algorithm to detect winning combinations

### Game Logic

The game implements several sophisticated features:

- **State Management**: Uses React's state to track game history, current move, and player turns
- **Immutability**: Game state is never mutated directly; new states are created for each move
- **Time Travel**: Maintains complete game history allowing players to jump to any previous state
- **Winner Detection**: Checks all possible winning combinations (rows, columns, diagonals)

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

The `homepage` field in `package.json` is set to the GitHub Pages URL, and the deployment script uses the `gh-pages` package.

## 🎨 Styling Features

- **Responsive Design**: Optimized for desktop viewing
- **Smooth Animations**: CSS keyframe animations for winner celebration
- **FontAwesome Integration**: Professional-looking game symbols
- **Clean Layout**: Centered design with intuitive game board and history panel

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built following React's official tutorial with additional enhancements
- FontAwesome for beautiful icon design
- Create React App for the development environment

---

**Note**: This game is optimized for desktop use. For the best experience, play on a desktop or laptop computer.