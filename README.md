# Tic-Tac-Toe React

A classic Tic-Tac-Toe game built with React, featuring an interactive game board, move history, and beautiful FontAwesome icons.

## 🎮 Live Demo

Play the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

*Note: This game is optimized for desktop use.*

## ✨ Features

- **Interactive Gameplay**: Click on any square to make your move
- **Turn-based Play**: Alternates between X and O players automatically  
- **Winner Detection**: Automatically detects and announces the winner with visual effects
- **Game History**: Track all moves made during the game
- **Time Travel**: Jump back to any previous move to see the board state
- **Visual Feedback**: Pulsing animation for winner announcements
- **Icon Integration**: Beautiful FontAwesome icons for X and O symbols
- **Responsive Design**: Clean, centered layout optimized for desktop

## 🛠 Technologies Used

- **React 16.13.1** - Frontend framework using class components
- **FontAwesome** - Icons for game symbols (X and O)
- **CSS3** - Custom styling with animations
- **JavaScript (ES6+)** - Game logic and state management
- **GitHub Pages** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
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
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

### Building for Production

To create an optimized production build:

```bash
# For newer Node.js versions, use the legacy OpenSSL provider
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

## 🎯 How to Play

1. **Starting the Game**: The game starts with X going first
2. **Making Moves**: Click on any empty square to place your symbol
3. **Winning**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Game History**: Use the move buttons on the right to jump back to previous game states
5. **New Game**: Click "Go to game start" to reset the board

## 📁 Project Structure

```
src/
├── index.js          # Main game components and logic
├── index.css         # Styling and animations
public/
├── index.html        # HTML template
├── favicon.ico       # Site icon
└── ...
```

## 🧠 Game Logic

The game implements a classic Tic-Tac-Toe algorithm:

- **Board State**: 3x3 grid stored as an array of 9 elements
- **Win Detection**: Checks all possible winning combinations (rows, columns, diagonals)
- **History Management**: Maintains a complete history of game states for time travel feature
- **Turn Management**: Alternates between X and O players based on move count

## 🎨 Styling Features

- **Pulse Animation**: Winner announcements include a scaling pulse effect
- **FontAwesome Integration**: Clean, professional icons for game symbols
- **Centered Layout**: Game board and controls are centered for optimal viewing
- **Button Styling**: Custom-styled buttons for move history navigation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kelsey Myers**
- GitHub: [@kelsey-myers](https://github.com/kelsey-myers)

---

*Built with ❤️ using React*