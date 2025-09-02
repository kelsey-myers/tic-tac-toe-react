# Tic-Tac-Toe React

A classic tic-tac-toe game built with React, featuring an interactive game board, move history, and time travel functionality.

## Live Demo

🎮 **[Play the game here!](https://kelsey-myers.github.io/tic-tac-toe-react)**

## Screenshot

![Tic-Tac-Toe Game](https://github.com/user-attachments/assets/53d74b39-9546-4648-ba30-ac3e103cbba2)

## Features

- **Interactive Gameplay**: Click on squares to place X or O marks
- **Player Turn Indication**: Clear display of whose turn it is with FontAwesome icons
- **Winner Detection**: Automatically detects and announces the winner with animated effects
- **Game History**: Stores complete game history as you play
- **Time Travel**: Jump back to any previous move in the game
- **Responsive UI**: Clean, centered design optimized for desktop use

## Technologies Used

- **React** (16.13.1) - Frontend framework
- **FontAwesome** - Icons for X and O players
- **CSS3** - Custom styling with animations
- **GitHub Pages** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (version 10 or higher)
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
   
   **Note**: If you encounter OpenSSL errors with newer Node.js versions, use:
   ```bash
   NODE_OPTIONS="--openssl-legacy-provider" npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## How to Play

1. The game starts with player X
2. Click on any empty square to make your move
3. Players alternate turns (X and O)
4. First player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. Use the game history buttons to jump back to previous moves
6. Click "Go to game start" to restart the game

## Project Structure

```
src/
├── index.js          # Main game components and logic
├── index.css         # Styling and animations
public/
├── index.html        # HTML template
├── favicon.ico       # Site favicon
package.json          # Project dependencies and scripts
```

## Key Components

- **Game**: Main component managing game state and history
- **Board**: Renders the 3x3 game grid
- **Square**: Individual clickable squares
- **calculateWinner**: Helper function to determine game winner

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## Author

Created by [Kelsey Myers](https://github.com/kelsey-myers)

## License

This project is open source and available under the [MIT License](LICENSE).