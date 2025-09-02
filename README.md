# Tic-Tac-Toe React Game

A classic Tic-Tac-Toe game built with React featuring an intuitive interface, game history, and time travel functionality.

![Tic-Tac-Toe Game Screenshot](https://github.com/user-attachments/assets/6051d8ec-5ce4-4216-be5f-bed5407931a9)

## 🎮 Live Demo

**[Play the game here!](https://kelsey-myers.github.io/tic-tac-toe-react/)**

## ✨ Features

- **Interactive Gameplay**: Play tic-tac-toe with a clean, responsive interface
- **Win Detection**: Automatically detects and announces the winner with visual effects
- **Game History**: Stores complete game history as you play
- **Time Travel**: Jump back to any previous move in the game
- **Visual Indicators**: Uses FontAwesome icons for X and O players
- **Responsive Design**: Optimized for desktop viewing
- **Animation Effects**: Winner announcement includes pulse animation

## 🛠️ Technologies Used

- **React** (v16.13.1) - UI library for building the interactive interface
- **JavaScript (ES6+)** - Core programming language
- **CSS3** - Styling and animations
- **FontAwesome** - Icons for X and O players
- **GitHub Pages** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
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
   # For newer Node.js versions (v17+), use:
   export NODE_OPTIONS="--openssl-legacy-provider"
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the game in action!

### Building for Production

```bash
# Set legacy OpenSSL provider for compatibility
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

### Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

## 🎯 How to Play

1. **Starting the Game**: The game begins with player X
2. **Making Moves**: Click on any empty square to place your mark
3. **Winning**: Get three marks in a row (horizontally, vertically, or diagonally)
4. **Game History**: Use the buttons on the right to jump to any previous move
5. **Reset**: Click "Go to game start" to restart the game

## 📁 Project Structure

```
src/
├── index.js          # Main game components and logic
├── index.css         # Styling and animations
└── ...

public/
├── index.html        # HTML template
├── favicon.ico       # Site icon
└── ...

package.json          # Dependencies and scripts
```

### Key Components

- **`Game`**: Main component managing game state and history
- **`Board`**: Renders the 3x3 game board
- **`Square`**: Individual clickable squares
- **`calculateWinner`**: Utility function to determine game winner

## 🎨 Styling Features

- **Pulse Animation**: Winners are highlighted with a pulsing effect
- **FontAwesome Icons**: Clean X (times) and O (circle) icons
- **Responsive Layout**: Flexbox-based layout for optimal viewing
- **Color Scheme**: Black squares with white text for high contrast

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Creates production build
- `npm test` - Runs the test suite
- `npm run deploy` - Deploys to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Notes

- This project was bootstrapped with Create React App
- Uses an older version of React Scripts that requires the `--openssl-legacy-provider` flag for Node.js v17+
- Optimized for desktop viewing (mobile responsiveness can be improved)

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy playing Tic-Tac-Toe! 🎉**