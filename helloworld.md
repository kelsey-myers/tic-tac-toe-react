# Hello World! 👋 Welcome to Tic-Tac-Toe React

This repository contains a fully functional **Tic-Tac-Toe game** built with React! 🎮

## 🎯 What is this project?

This is an interactive tic-tac-toe game that runs in your web browser. It's built using modern React concepts and provides a classic gaming experience with some enhanced features.

## ✨ Features

This minigame includes the following awesome features:

- ✅ **Play Tic-Tac-Toe**: Classic 3x3 grid gameplay for two players
- 🏆 **Winner Detection**: Automatically detects and announces the winner with animated icons
- 📚 **Game History**: Stores complete game history as you play
- ⏪ **Time Travel**: Jump back to any previous move and replay from that point
- 🎨 **Beautiful UI**: FontAwesome icons for X (✖️) and O (⭕) with CSS animations
- 💻 **Desktop Optimized**: Designed specifically for desktop browsers

## 🛠️ Technology Stack

- **React 16.13.1**: Component-based UI framework
- **FontAwesome**: Beautiful icons for game pieces
- **CSS3**: Custom styling with animations and responsive design
- **Create React App**: Modern React development setup

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher recommended)
- npm or yarn package manager

### Installation & Setup

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

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game!

## 🎮 How to Play

1. The game starts with Player X's turn
2. Click any empty square on the 3x3 grid to make your move
3. Players alternate turns (X then O)
4. Get three in a row (horizontally, vertically, or diagonally) to win!
5. Use the game history buttons on the right to jump back to previous moves
6. Start a new game by clicking "Go to game start"

## 📁 Project Structure

```
src/
├── index.js          # Main game logic and React components
├── index.css         # Styling and animations
public/
├── index.html        # HTML template
├── favicon.ico       # Browser icon
package.json          # Dependencies and scripts
```

## 🧩 Key Components

- **Game**: Main component managing game state and history
- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable game squares
- **calculateWinner()**: Logic to determine game winner

## 🎨 Special Features

- **Animated Winner Announcement**: Winner display pulses with CSS animations
- **FontAwesome Integration**: Professional-looking X and O symbols
- **Move History Navigation**: Click any previous move to replay from that point
- **Responsive Status Display**: Shows current player or winner with icons

## 🌐 Live Demo

This project is configured for GitHub Pages deployment. You can see it live at:
`https://kelsey-myers.github.io/tic-tac-toe-react`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Gaming! 🎲** Enjoy playing this classic game with a modern React twist!