# Tic-Tac-Toe React

A modern, interactive tic-tac-toe game built with React featuring game history, move navigation, and enhanced visual design.

🎮 **[Live Demo](https://kelsey-myers.github.io/tic-tac-toe-react)**

## Features

- ✨ **Interactive Gameplay**: Click to place X's and O's on a 3x3 grid
- 🏆 **Winner Detection**: Automatically detects and announces the winner with animated effects
- 📚 **Game History**: Stores complete game history as you play
- ⏮️ **Time Travel**: Jump back to any previous move to see earlier board states
- 🎨 **Enhanced UI**: FontAwesome icons for X and O symbols
- 📱 **Desktop Optimized**: Designed for desktop browser experience
- ✨ **Smooth Animations**: Winner announcement features pulse animation

## Technologies Used

- **React** (16.13.1) - Frontend library
- **React DOM** - DOM rendering
- **FontAwesome** - Icon library for enhanced symbols
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons` (X symbol)
  - `@fortawesome/free-regular-svg-icons` (O symbol)
- **CSS3** - Custom styling and animations
- **Create React App** - Development toolchain

## Prerequisites

- Node.js (v14-v16 recommended due to legacy dependencies)
- npm or yarn package manager

## Installation

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
   # For newer Node.js versions (v17+), use:
   NODE_OPTIONS="--openssl-legacy-provider" npm start
   
   # For older Node.js versions (v14-v16):
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game!

## Usage

### Playing the Game

1. **Start Playing**: Click any empty square to place your symbol (X goes first)
2. **Take Turns**: Players alternate between X and O
3. **Win the Game**: Get three symbols in a row (horizontal, vertical, or diagonal)
4. **View History**: Use the move history buttons on the right to jump to previous game states
5. **Restart**: Click "Go to game start" to begin a new game

### Game Controls

- **Game Board**: 3x3 grid of clickable squares
- **Next Player Indicator**: Shows whose turn it is with FontAwesome icons
- **Move History**: Numbered list of all moves made
- **Time Travel**: Click any move number to return to that game state

## Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Site favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── index.js           # Main React components and game logic
│   └── index.css          # Styling and animations
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

### Key Components

- **`Game`** - Main component managing game state and history
- **`Board`** - Renders the 3x3 game grid
- **`Square`** - Individual clickable square component
- **`calculateWinner`** - Utility function for win detection

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages

## Build and Deployment

### Production Build

```bash
# For newer Node.js versions
NODE_OPTIONS="--openssl-legacy-provider" npm run build

# For older Node.js versions  
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

The app is automatically deployed to GitHub Pages at: https://kelsey-myers.github.io/tic-tac-toe-react

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

*Note: Optimized for desktop browsers. Mobile experience may vary.*

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Node.js Compatibility Issues

If you encounter build errors with newer Node.js versions (v17+), use the legacy OpenSSL provider:

```bash
export NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

### Common Issues

- **Build fails**: Try using Node.js v14-v16 or use the legacy OpenSSL flag
- **Icons not loading**: Ensure FontAwesome dependencies are properly installed
- **Styles missing**: Verify `index.css` is properly imported

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built following the official React tutorial patterns
- Icons provided by FontAwesome
- Deployed with GitHub Pages

---

*Built with ❤️ using React*