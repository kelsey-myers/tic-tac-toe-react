# Tic-Tac-Toe React Game ⭕❌

> A modern, interactive tic-tac-toe game built with React featuring time travel, animations, and beautiful UI

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://kelsey-myers.github.io/tic-tac-toe-react)
[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![FontAwesome](https://img.shields.io/badge/FontAwesome-5.13.1-brightgreen.svg)](https://fontawesome.com/)

## ✨ Features

This enhanced tic-tac-toe game goes beyond the classic game with modern web features:

- 🎮 **Interactive Gameplay** - Click to place X's and O's with immediate visual feedback
- 🏆 **Smart Win Detection** - Automatic detection of all winning combinations (rows, columns, diagonals)
- 📚 **Game History & Time Travel** - Complete move history with ability to jump to any previous game state
- 🎨 **Beautiful UI** - Clean design with FontAwesome icons and smooth animations
- ✨ **Winner Animations** - Pulsing animation effects when a player wins
- 🔄 **Game State Management** - Robust state management with React class components
- 💻 **Desktop Optimized** - Designed for optimal desktop/laptop experience

## 🚀 Live Demo

**Play Now:** [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## 🛠️ Development Setup

### Prerequisites

- **Node.js** (v14+ recommended, v16+ for best compatibility)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/kelsey-myers/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   # For Node.js v17+, use the legacy OpenSSL provider
   NODE_OPTIONS=--openssl-legacy-provider npm start
   
   # For older Node.js versions
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start playing!

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run tests (if available)
npm run deploy     # Deploy to GitHub Pages
```

## 🎯 How to Play

1. **Starting the Game** - Player X always goes first
2. **Making Moves** - Click any empty square to place your mark
3. **Winning** - Get three of your marks in a row (horizontal, vertical, or diagonal)
4. **Time Travel** - Use the move history buttons to jump back to any previous game state
5. **New Game** - Click "Go to game start" to reset the board

## 🏗️ Technical Architecture

### Built With

- **⚛️ React 16.13.1** - Component-based UI framework
- **🎨 FontAwesome 5.13.1** - Beautiful icons for game pieces
- **💅 CSS3** - Custom styling with animations and responsive design
- **🏗️ Create React App** - Development toolchain and build system

### Key Components

- **`Game`** - Main game logic and state management
- **`Board`** - 3x3 grid rendering and move handling  
- **`Square`** - Individual square components with click handlers
- **`calculateWinner`** - Pure function for win condition checking

### Styling Features

- **Responsive Layout** - Flexbox-based design
- **CSS Animations** - Pulsing effects for winners
- **Custom Typography** - Century Gothic font family
- **Dark Theme** - Black squares with white text for contrast

## 🐛 Troubleshooting

### Node.js Compatibility Issues

If you encounter OpenSSL errors when starting the development server:

```bash
# Error: digital envelope routines::unsupported
NODE_OPTIONS=--openssl-legacy-provider npm start
```

This is common with Node.js v17+ due to OpenSSL 3.0 changes in older React Scripts versions.

### Common Issues

- **Port 3000 in use** - Stop other applications or use a different port
- **Build failures** - Clear `node_modules` and reinstall dependencies
- **Outdated browsers** - Use a modern browser with ES6+ support

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages:

```bash
npm run build      # Build production version
npm run deploy     # Deploy to GitHub Pages
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `build/` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🎨 Customization

### Styling

Edit `src/index.css` to customize:
- Colors and themes
- Animations and transitions  
- Board size and layout
- Typography and fonts

### Game Logic

Modify `src/index.js` to add:
- Different board sizes
- Additional game modes
- Player vs Computer AI
- Online multiplayer

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/kelsey-myers/tic-tac-toe-react/issues).

---

**Happy Gaming!** 🎮 Built with ❤️ using React