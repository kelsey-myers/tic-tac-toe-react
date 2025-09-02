# Tic-Tac-Toe React Game

A classic tic-tac-toe game built with React.js featuring an interactive game board, move history, and winner detection with animations.

## 🎮 Live Demo

Play the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## ✨ Features

- **Interactive Gameplay**: Click to place X's and O's on the game board
- **Winner Detection**: Automatically detects and announces the winner with animated display
- **Game History**: Keep track of all moves made during the game
- **Move Navigation**: Jump back to any previous move to see the board state
- **Visual Feedback**: Uses FontAwesome icons for a polished look
- **Responsive Design**: Optimized for desktop viewing

## 🚀 Getting Started

### Prerequisites

- Node.js (tested with v20.x)
- npm or yarn package manager

### Installation

1. Clone the repository:
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
# For newer Node.js versions (16+), use:
NODE_OPTIONS=--openssl-legacy-provider npm start

# For older Node.js versions:
npm start
```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:
```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

### Deployment

The project is configured for GitHub Pages deployment:
```bash
npm run deploy
```

## 🎯 How to Play

1. The game starts with player X
2. Click on any empty square to place your mark
3. Players alternate turns (X and O)
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. Use the move history buttons to jump back to any previous game state
6. Click "Go to game start" to restart the game

## 🛠️ Technology Stack

- **React 16.13.1** - JavaScript library for building user interfaces
- **React DOM** - React package for working with the DOM
- **FontAwesome** - Icon library for X and O symbols
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons` (for X)
  - `@fortawesome/free-regular-svg-icons` (for O)
- **React Scripts** - Build tools and configuration
- **CSS3** - Custom styling with animations

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Site icon
│   └── manifest.json       # Web app manifest
├── src/
│   ├── index.js           # Main React components and game logic
│   └── index.css          # Styling and animations
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## 🎨 Game Components

- **Square**: Individual clickable squares on the game board
- **Board**: 3x3 grid of squares that handles the game board display
- **Game**: Main component that manages game state, history, and turn logic

## 🐛 Known Issues

- **Node.js Compatibility**: This project was built with older React Scripts and may require the `--openssl-legacy-provider` flag for Node.js versions 16 and above
- **Desktop Only**: The game is optimized for desktop viewing as noted in the UI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built following React's official tic-tac-toe tutorial as a foundation
- FontAwesome for providing beautiful icons
- React team for the excellent documentation and tools