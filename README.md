# Tic-Tac-Toe React Game

A classic tic-tac-toe game built with React, featuring a clean interface, game history, and time travel functionality.

![Tic-Tac-Toe Game Screenshot](https://github.com/user-attachments/assets/64aa2a42-f328-4c43-86aa-6ff9d8f9ad48)

## ✨ Features

- **Classic Gameplay**: Traditional 3x3 tic-tac-toe game for two players
- **Visual Icons**: Beautiful FontAwesome icons for X and O pieces
- **Turn Indicator**: Clear display of whose turn it is to play
- **Win Detection**: Automatic detection and celebration of winning combinations
- **Game History**: Complete history of all moves made during the game
- **Time Travel**: Jump back to any previous game state to explore different strategies
- **Responsive Design**: Clean, centered layout optimized for desktop browsers

## 🚀 Getting Started

### Prerequisites

- Node.js (tested with v20.x, but may require legacy OpenSSL support)
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
   # For newer Node.js versions, use:
   NODE_OPTIONS="--openssl-legacy-provider" npm start
   
   # Or for older Node.js versions:
   npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to play the game.

## 🎮 How to Play

1. **Starting the Game**: The game begins with X going first
2. **Making Moves**: Click on any empty square to place your piece
3. **Turn Alternation**: Players automatically alternate between X and O
4. **Winning**: Get three of your pieces in a row (horizontal, vertical, or diagonal)
5. **Game History**: Use the numbered buttons on the right to revisit any previous game state
6. **Time Travel**: Click "Go to game start" to reset the board to the beginning

## 🛠️ Technical Details

### Built With

- **React** 16.13.1 - JavaScript library for building user interfaces
- **FontAwesome** - Icon library for X and O pieces
- **CSS3** - Custom styling with animations
- **React Scripts** 2.1.8 - Development and build tooling

### Project Structure

```
src/
├── index.js          # Main React components and game logic
├── index.css         # Styling and animations
public/
├── index.html        # HTML template
├── favicon.ico       # App icon
package.json          # Dependencies and scripts
```

### Key Components

- **Game**: Main component managing game state and history
- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable game squares
- **calculateWinner**: Utility function to determine game winner

## 🚀 Deployment

This project is configured for deployment to GitHub Pages:

```bash
npm run build    # Create production build
npm run deploy   # Deploy to GitHub Pages
```

The live version is available at: https://kelsey-myers.github.io/tic-tac-toe-react

## 🐛 Troubleshooting

### Node.js Compatibility Issues

If you encounter build errors with newer Node.js versions, try:

```bash
# Use legacy OpenSSL provider
NODE_OPTIONS="--openssl-legacy-provider" npm start
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

### Common Issues

- **Build failures**: This project uses older React Scripts that may not be compatible with Node.js 17+
- **Deprecated warnings**: The project uses some older dependencies that may show deprecation warnings
- **Desktop Only**: The interface is optimized for desktop browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/kelsey-myers/tic-tac-toe-react/issues).

## 👥 Authors

- **Kelsey Myers** - [@kelsey-myers](https://github.com/kelsey-myers)

---

*This tic-tac-toe game was built as a learning project to explore React fundamentals, state management, and component interaction.*