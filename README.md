# Tic-Tac-Toe React

A modern, interactive tic-tac-toe game built with React, featuring FontAwesome icons, game history tracking, and smooth animations. This project enhances the classic React tutorial with a polished user interface and additional functionality.

## 🎮 Live Demo

Play the game live: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## ✨ Features

- **Interactive Gameplay**: Click squares to place X's and O's
- **Winner Detection**: Automatically detects and announces the winner with animated effects
- **Game History**: Complete move history with the ability to jump back to any previous state
- **Visual Feedback**: 
  - FontAwesome icons for X (✕) and O (○) symbols
  - Pulse animation for winner announcement
  - Clean, centered layout optimized for desktop
- **Turn Indicator**: Clear display of whose turn it is next

## 🛠️ Technologies Used

- **React** (16.13.1) - Frontend framework
- **FontAwesome** - Icons for game symbols
- **CSS3** - Custom styling and animations
- **GitHub Pages** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14-v16 recommended, v17+ requires legacy OpenSSL provider)
- npm or yarn

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
   # For Node.js v17+ (recommended):
   NODE_OPTIONS=--openssl-legacy-provider npm start
   
   # For older Node.js versions:
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

## 🎯 How to Play

1. The game starts with X going first
2. Click any empty square to place your symbol
3. Players alternate turns (X and O)
4. The first player to get three symbols in a row (horizontally, vertically, or diagonally) wins
5. Use the move history buttons to jump back to any previous game state
6. Click "Go to game start" to restart the game

## 📜 Development Commands

- `npm start` or `NODE_OPTIONS=--openssl-legacy-provider npm start` - Runs the app in development mode (use the latter for Node.js v17+)
- `npm run build` or `NODE_OPTIONS=--openssl-legacy-provider npm run build` - Builds the app for production (use the latter for Node.js v17+)
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## 🚀 Deployment

This project is configured for GitHub Pages deployment. To deploy your own version:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run `npm run deploy` to build and deploy to GitHub Pages

## 💻 Browser Compatibility

This game is optimized for desktop browsers. Mobile support may be limited.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Based on the [React Tutorial](https://reactjs.org/tutorial/tutorial.html) tic-tac-toe example
- Enhanced with modern UI/UX improvements
- Uses FontAwesome for beautiful game symbols