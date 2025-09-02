# Tic-Tac-Toe React

A modern, interactive tic-tac-toe game built with React that includes game history and move replay functionality.

🎮 **[Play the game online](https://kelsey-myers.github.io/tic-tac-toe-react)**

## Features

This tic-tac-toe game includes several enhanced features beyond the basic game:

- **Interactive Gameplay**: Click to place X or O symbols on the game board
- **Winner Detection**: Automatically detects and displays the winner with animated effects
- **Game History**: Stores complete game history as you play
- **Move Replay**: Review previous moves and jump back to any point in the game
- **Visual Feedback**: FontAwesome icons and CSS animations for better user experience
- **Responsive Design**: Optimized for desktop gameplay

## Technologies Used

- **React 16.13.1** - JavaScript library for building user interfaces
- **React DOM** - React package for working with the DOM
- **FontAwesome** - Icons for X and O symbols with visual appeal
- **CSS3** - Custom styling with animations and responsive design
- **Create React App** - React application boilerplate and build tools
- **GitHub Pages** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

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

To create a production build:

```bash
# For newer Node.js versions, use the legacy OpenSSL provider
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

The build files will be created in the `build` folder, ready for deployment.

### Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## How to Play

1. The game starts with X going first
2. Click on any empty square to place your symbol
3. Players alternate turns between X and O
4. The first player to get three symbols in a row (horizontally, vertically, or diagonally) wins
5. Use the game history buttons to review previous moves or restart the game

## Game History Feature

One of the standout features of this implementation is the complete game history functionality:

- Every move is recorded and stored
- Use the "Go to move #X" buttons to jump back to any previous state
- Review the progression of the game step by step
- Start over at any point by clicking "Go to game start"

## Project Structure

```
src/
├── index.js          # Main game components and logic
├── index.css         # Styling and animations
└── ...

public/
├── index.html        # HTML template
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built following React tutorial patterns for tic-tac-toe games
- FontAwesome for beautiful icons
- Create React App for the development environment