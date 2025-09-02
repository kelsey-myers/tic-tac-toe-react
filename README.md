# Tic-Tac-Toe React Game

A modern, interactive tic-tac-toe game built with React, featuring game history and beautiful FontAwesome icons.

## 🎮 Live Demo

Play the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

**Note: This game is optimized for desktop viewing.**

## ✨ Features

This tic-tac-toe game includes the following features:

- 🎯 **Interactive Gameplay**: Click to place X's and O's on the game board
- 🏆 **Winner Detection**: Automatically detects and announces the winner with animated effects
- 📚 **Game History**: Stores complete game history as you play
- ⏪ **Time Travel**: Review and jump to any previous move in the game
- 🎨 **Beautiful Icons**: Uses FontAwesome icons for X (times) and O (circle) symbols
- ✨ **Smooth Animations**: Winner announcement includes pulse animation effects
- 🎮 **Turn Indicator**: Clear indication of whose turn it is next

## 🛠 Technologies Used

- **React** (v16.13.1) - Component-based UI framework
- **React DOM** (v16.13.1) - DOM rendering for React
- **FontAwesome** - Beautiful icons for game symbols
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons`
  - `@fortawesome/free-regular-svg-icons`
- **Create React App** - Build toolchain and development server
- **CSS3** - Custom styling with animations and responsive design

## 🚀 Installation

### Prerequisites

- **Node.js** (v14.x or v16.x recommended)
- **npm** (comes with Node.js)

> **Note**: This project uses older dependencies that may require the `--openssl-legacy-provider` flag with newer Node.js versions (v17+).

### Setup Instructions

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
   # For Node.js v16 and below:
   npm start
   
   # For Node.js v17+ (if you encounter OpenSSL errors):
   NODE_OPTIONS=--openssl-legacy-provider npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to play the game!

## 🎮 How to Play

1. **Starting the Game**: The game starts with player X's turn
2. **Making Moves**: Click on any empty square to place your symbol
3. **Winning**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Game History**: Use the history buttons on the right to jump to any previous move
5. **New Game**: Click "Go to game start" to restart the game

## 🏗 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # Web app manifest
│   └── ...
├── src/
│   ├── index.js           # Main React components (Game, Board, Square)
│   ├── index.css          # Game styling and animations
│   └── ...
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🧩 Component Architecture

- **Game**: Main component that manages game state and history
- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable squares on the board
- **calculateWinner**: Utility function to determine game winner

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

> **Note**: For Node.js v17+, you may need to use:
> ```bash
> NODE_OPTIONS=--openssl-legacy-provider npm run build
> ```

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run deploy`
Deploys the built app to GitHub Pages.

## 🚨 Troubleshooting

### OpenSSL Error (Node.js v17+)
If you encounter an OpenSSL error when building or starting the app:

```bash
# Use the legacy OpenSSL provider
NODE_OPTIONS=--openssl-legacy-provider npm start
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

### Dependencies
This project uses some older dependencies. If you encounter issues:

1. Try using Node.js v14.x or v16.x
2. Use the `--openssl-legacy-provider` flag as shown above
3. Run `npm audit fix` to address known vulnerabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built following the [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- Icons provided by [FontAwesome](https://fontawesome.com/)
- Deployed with [GitHub Pages](https://pages.github.com/)

---

*Enjoy playing tic-tac-toe! 🎮*