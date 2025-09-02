# Tic-Tac-Toe React

A modern, interactive tic-tac-toe game built with React, featuring beautiful FontAwesome icons and game history tracking.

## 🎮 Live Demo

[Play the game here!](https://kelsey-myers.github.io/tic-tac-toe-react)

## ✨ Features

- **Interactive Gameplay**: Classic tic-tac-toe with intuitive click-to-play interface
- **Visual Icons**: Uses FontAwesome icons for X and O symbols instead of plain text
- **Winner Detection**: Automatically detects and announces the winner with a pulsing animation
- **Game History**: Tracks the complete history of moves throughout the game
- **Time Travel**: Jump back to any previous move to review or continue from that point
- **Next Player Indicator**: Shows whose turn it is with clear visual cues
- **Responsive Design**: Optimized for desktop experience

## 🛠️ Technologies Used

- **React** 16.13.1 - Frontend framework
- **FontAwesome** - Icon library for X and O symbols
- **CSS3** - Styling with animations and responsive design
- **GitHub Pages** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
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

### Running the Application

#### Development Mode
```bash
npm start
```
This will start the development server and open the game in your browser at `http://localhost:3000`.

#### Building for Production
**Note**: Due to compatibility issues with newer Node.js versions, you may need to use the legacy OpenSSL provider:

```bash
# For Linux/Mac
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build

# For Windows
set NODE_OPTIONS=--openssl-legacy-provider
npm run build
```

#### Deployment
```bash
npm run deploy
```
This will deploy the built application to GitHub Pages.

## 🎯 How to Play

1. Click on any empty square to place your symbol (X or O)
2. Players alternate turns automatically
3. Get three symbols in a row (horizontally, vertically, or diagonally) to win
4. Use the history buttons to review previous moves or restart the game
5. Click "Go to game start" to begin a new game

## 📁 Project Structure

```
src/
├── index.js        # Main game logic and components
├── index.css       # Styling and animations
public/
├── index.html      # HTML template
└── ...
```

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).