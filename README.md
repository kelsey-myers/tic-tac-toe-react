# Tic-Tac-Toe React Game

A modern, interactive tic-tac-toe game built with React featuring an elegant UI and enhanced gameplay experience.

## 🎮 Live Demo

**[Play the game here!](https://kelsey-myers.github.io/tic-tac-toe-react)**

## ✨ Features

This tic-tac-toe game includes several enhanced features beyond the basic gameplay:

- **Interactive Gameplay**: Click to play tic-tac-toe with smooth user interactions
- **Winner Detection**: Automatically detects and announces when a player wins
- **Game History**: Stores complete game history as you play
- **Time Travel**: Navigate through previous game states and see earlier board configurations
- **Visual Icons**: Uses FontAwesome icons for a polished X and O display
- **Responsive Design**: Optimized for desktop viewing
- **Animated Winner**: Pulsating animation when announcing the winner

## 🛠️ Technologies Used

- **React** (v16.13.1) - Frontend framework
- **React DOM** - DOM rendering
- **FontAwesome** - Icon library for X and O symbols
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons` 
  - `@fortawesome/free-regular-svg-icons`
- **CSS3** - Custom styling with animations
- **Create React App** - Project scaffolding and build tools

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
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
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎯 How to Play

1. Players take turns clicking on empty squares
2. X always goes first
3. The game displays whose turn is next
4. When someone wins, the winner is announced with a pulsating animation
5. Use the move history buttons to go back to any previous game state
6. Click "Go to game start" to restart the game

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   ├── index.html          # Main HTML template
│   └── ...
├── src/
│   ├── index.js           # Main React components (Game, Board, Square)
│   ├── index.css          # Styling and animations
│   └── ...
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## 🎨 Game Components

- **Game**: Main component managing game state and history
- **Board**: Renders the 3x3 grid of squares
- **Square**: Individual clickable game squares
- **calculateWinner**: Utility function to determine game winner

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🌟 Special Features

- **Move History**: Full game state preservation allows players to jump to any previous move
- **Visual Feedback**: Clear indication of next player and game status
- **Smooth Animations**: CSS animations enhance the user experience
- **Clean Design**: Minimalist interface focuses on gameplay

## 📱 Browser Compatibility

This game is optimized for desktop browsers and supports:
- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 👤 Author

**Kelsey Myers**
- GitHub: [@kelsey-myers](https://github.com/kelsey-myers)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/kelsey-myers/tic-tac-toe-react/issues).

---

*Built with ❤️ using React*