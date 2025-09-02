# Tic-Tac-Toe React

A classic tic-tac-toe game built with React, featuring an intuitive interface with FontAwesome icons and game history functionality.

## 🎮 Live Demo

Play the game live at: [https://kelsey-myers.github.io/tic-tac-toe-react](https://kelsey-myers.github.io/tic-tac-toe-react)

**Note: This game is optimized for desktop use only.**

## ✨ Features

- **Interactive Gameplay**: Click on any square to place your X or O
- **Winner Detection**: Automatically detects and highlights when a player wins
- **Game History**: Navigate through previous moves with the game history panel
- **Move Navigation**: Jump back to any previous state of the game
- **Responsive Icons**: Uses FontAwesome icons for a polished visual experience
- **Clean UI**: Modern styling with smooth animations and hover effects

## 🛠️ Technologies Used

- **React** (v16.13.1) - Frontend framework
- **FontAwesome** - Icons for X and O symbols
- **CSS3** - Custom styling and animations
- **Create React App** - Project bootstrapping and build tooling
- **GitHub Pages** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or earlier recommended due to compatibility with older react-scripts)
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

4. Open [http://localhost:3000](http://localhost:3000) to view the game in your browser.

## 🎯 How to Play

1. The game starts with Player X
2. Click on any empty square to place your symbol
3. Players alternate turns (X and O)
4. First player to get three symbols in a row (horizontally, vertically, or diagonally) wins
5. Use the game history panel on the right to navigate to previous moves
6. Click "Go to game start" to reset the game

## 📁 Project Structure

```
src/
├── index.js          # Main game components and logic
├── index.css         # Styling and animations
public/
├── index.html        # HTML template
└── ...               # Static assets
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using the following commands:

```bash
npm run build        # Create production build
npm run deploy       # Deploy to GitHub Pages
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or bug fixes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Screenshots

The game features a clean, modern interface with:
- Dark game board with white text
- Smooth hover effects on squares
- Animated winner announcement
- Intuitive game history navigation

---

*Built with ❤️ using React*