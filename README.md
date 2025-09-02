# Tic-Tac-Toe React Game

A beautifully designed, interactive Tic-Tac-Toe game built with React and FontAwesome icons. This game features a complete game history system, winner detection with animations, and a clean desktop-focused interface.

![Tic-Tac-Toe Game Screenshot](https://github.com/user-attachments/assets/fee2f69a-1837-458a-803e-f69282f6ce36)

## 🎮 Live Demo

Experience the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## ✨ Features

- **Interactive Gameplay** - Click on any square to make your move
- **Winner Detection** - Automatically detects and announces the winner with animated display
- **Game History** - Complete move-by-move history of the game
- **Time Travel** - Jump back to any previous move to see or continue from that state
- **Visual Icons** - Beautiful FontAwesome icons for X (✕) and O (○) symbols
- **Responsive Design** - Optimized for desktop viewing
- **Animated Winners** - Winning announcement includes pulse animation

## 🛠️ Technology Stack

- **React 16.13.1** - UI framework
- **FontAwesome** - Icon library for X and O symbols
- **CSS3** - Custom styling with animations
- **Create React App** - Build tooling and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14+ recommended)
- npm or yarn package manager

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
   # For newer Node.js versions (17+), use the legacy OpenSSL provider
   export NODE_OPTIONS="--openssl-legacy-provider"
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to play the game!

### Building for Production

```bash
# Set the legacy provider for older React Scripts compatibility
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

### Running Tests

```bash
npm test
```

## 🎯 How to Play

1. **Start the Game** - The game begins with X as the first player
2. **Make Moves** - Click on any empty square to place your symbol
3. **Win Condition** - Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Game History** - Use the history panel to review previous moves
5. **Time Travel** - Click any "Go to move #" button to jump back to that game state
6. **New Game** - Click "Go to game start" to reset the board

## 📱 Browser Compatibility

This game is optimized for desktop browsers and supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

> **Note:** This application is designed primarily for desktop use.

## 🏗️ Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── index.js          # Main React components and game logic
│   ├── index.css         # Styling and animations
│   └── ...
├── package.json
└── README.md
```

## 🔧 Development Notes

- This project uses an older version of React Scripts that requires `NODE_OPTIONS="--openssl-legacy-provider"` for newer Node.js versions
- The game uses React class components (pre-hooks era)
- FontAwesome icons are used for a polished visual experience
- CSS includes custom animations for winner announcements

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons provided by [FontAwesome](https://fontawesome.com/)
- Inspired by the classic Tic-Tac-Toe game

---

**Enjoy playing!** 🎉