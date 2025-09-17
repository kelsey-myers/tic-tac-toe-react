# Tic-Tac-Toe React Game

Welcome to the **Tic-Tac-Toe React Project**! This is a modern, interactive implementation of the classic tic-tac-toe game built using React.js.

## 🎯 Purpose

This repository contains a fully functional tic-tac-toe game that demonstrates React concepts including:
- Component-based architecture
- State management
- Event handling
- Game logic implementation
- User interface design with CSS styling

## ✨ Game Features

This interactive minigame includes the following features:

- **Play Tic-Tac-Toe**: Classic 3x3 grid gameplay for two players (X and O)
- **Winner Detection**: Automatically detects and announces the winner with animated visual feedback
- **Game History**: Stores complete game history as the game progresses
- **Time Travel**: Navigate through previous moves and board states
- **Turn Indicators**: Visual indicators showing whose turn it is using FontAwesome icons
- **Responsive Design**: Clean, centered layout optimized for desktop viewing

## 🛠 Technologies Used

- **React 16.13.1**: Core JavaScript library for building the user interface
- **React DOM**: For rendering React components to the DOM
- **FontAwesome**: Icons for X (times) and O (circle) symbols with enhanced visual appeal
- **CSS3**: Custom styling with animations and responsive design
- **Create React App**: Development environment and build tools

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kelsey-myers/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   
   The game will open in your browser at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```

### Deployment

This project is configured for deployment to GitHub Pages:
```bash
npm run deploy
```

## 🎮 How to Play

1. **Starting the Game**: The game begins with Player X's turn
2. **Making Moves**: Click on any empty square to place your mark (X or O)
3. **Winning**: Get three of your marks in a row (horizontally, vertically, or diagonally)
4. **Game History**: Use the move history buttons on the right to jump to any previous game state
5. **New Game**: Click "Go to game start" to reset the board

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Browser tab icon
│   └── manifest.json       # Web app manifest
├── src/
│   ├── index.js           # Main React component with game logic
│   └── index.css          # Styling and animations
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
└── helloworld.md         # This documentation file
```

## 🏗 Component Architecture

- **Game Component**: Main component managing game state and history
- **Board Component**: Renders the 3x3 game grid
- **Square Component**: Individual clickable squares
- **calculateWinner()**: Utility function to determine game winner

## 🎨 Visual Design

- **Clean Interface**: Centered layout with modern typography (Century Gothic font)
- **Interactive Elements**: Hover effects and button styling
- **Animated Winner Display**: Pulsing animation when a player wins
- **Icon Integration**: FontAwesome icons for enhanced visual appeal
- **Color Scheme**: High contrast black and white design with subtle accents

## 🌐 Live Demo

The game is deployed and accessible at: https://kelsey-myers.github.io/tic-tac-toe-react

## 📱 Browser Compatibility

This game is optimized for desktop viewing and modern web browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 🔧 Development Notes

- Built with Create React App for easy development and building
- Uses React class components (legacy pattern, but functional)
- State management through React's built-in setState
- No external state management libraries required
- Follows React best practices for component composition

## 📋 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run deploy`: Deploys to GitHub Pages

---

**Note**: This is a desktop-optimized game. For the best experience, please use a desktop or laptop computer.

Enjoy playing! 🎯