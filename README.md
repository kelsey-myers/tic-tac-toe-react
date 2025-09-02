# Tic-Tac-Toe React Game

A modern, interactive tic-tac-toe game built with React, featuring game history tracking, move navigation, and sleek FontAwesome icons. This project demonstrates classic game logic implemented with modern React patterns and state management.

## 🎮 Features

- **Interactive Gameplay**: Click on any square to place your X or O
- **Winner Detection**: Automatically detects and announces game winners with animated display
- **Game History**: Stores complete game history as you play
- **Move Navigation**: Review previous moves and jump to any point in the game
- **Visual Enhancement**: FontAwesome icons for X and O symbols
- **Responsive Design**: Clean, centered layout optimized for desktop use
- **Animated Winner Display**: Pulsing animation effect when a player wins

## 🛠️ Technology Stack

- **React** (16.13.1) - Core framework for building the user interface
- **FontAwesome** - Icons for enhanced visual appeal
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons`
  - `@fortawesome/free-regular-svg-icons`
- **CSS3** - Custom styling with animations and responsive design
- **Create React App** - Development and build tooling

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

3. Start the development server:
```bash
npm start
```
*Note: If you encounter OpenSSL errors on newer Node.js versions, use:*
```bash
NODE_OPTIONS="--openssl-legacy-provider" npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

## 🎯 How to Play

1. The game starts with X as the first player
2. Click on any empty square to place your symbol
3. Players alternate between X and O
4. The first player to get three symbols in a row (horizontally, vertically, or diagonally) wins
5. Use the move history buttons on the right to review previous states of the game
6. Click "Go to game start" to restart or "Go to move #X" to jump to any previous move

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website icon
│   └── manifest.json       # Web app manifest
├── src/
│   ├── index.js           # Main game logic and components
│   └── index.css          # Styling and animations
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## 🏗️ Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run deploy` - Deploys the app to GitHub Pages

## 🌐 Live Demo

The game is deployed and available at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

## 🎨 Key Components

- **Square**: Individual clickable game squares
- **Board**: 3x3 grid of squares that manages the game board
- **Game**: Main component that handles game state, history, and move navigation
- **calculateWinner**: Utility function that determines if there's a winner

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [Kelsey Myers](https://github.com/kelsey-myers)

---

*Note: This game is optimized for desktop use. Mobile responsiveness may vary.*