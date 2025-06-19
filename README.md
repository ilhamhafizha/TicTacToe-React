# Tic Tac Toe with AI

A modern implementation of the classic Tic Tac Toe game built with React, featuring both player-vs-player and player-vs-AI modes. This project showcases modern React practices, clean UI design, and intelligent AI gameplay.

![Tic Tac Toe Game](screenshot.png)

## 🎮 Features

- **Multiple Game Modes**

  - Player vs Player
  - Player vs AI (Coming Soon)
  - Different AI difficulty levels (Coming Soon)

- **Modern UI/UX**

  - Clean and responsive design
  - Beautiful animations and transitions
  - Mobile-friendly interface
  - SweetAlert2 notifications

- **Game Features**
  - Interactive 3x3 game board
  - Move history tracking
  - Time travel to previous moves
  - Real-time game status updates
  - Winner detection

## 🛠️ Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3 with Flexbox/Grid
- SweetAlert2 for notifications
- GitHub Pages for deployment

## 🚀 Live Demo

Check out the live demo: [Play Tic Tac Toe](https://ilhamhafizha.github.io/TicTacToe-React/)

## 📦 Project Structure

```
src/
├── components/
│   ├── Board.js      # Game board component
│   ├── Button.js     # Reusable button component
│   ├── GameInfo.js   # Game status display
│   ├── Square.js     # Individual square component
│   └── Timeline.js   # Move history component
├── utils/
│   └── calculateWinner.js  # Winner detection logic
├── App.js           # Main application component
└── App.css          # Application styles
```

## 🎯 Upcoming Features

- [ ] AI opponent using Minimax algorithm
- [ ] Multiple difficulty levels
  - Easy: Random moves
  - Medium: Smart moves with occasional mistakes
  - Hard: Unbeatable AI
- [ ] Move suggestions
- [ ] Game statistics
- [ ] Custom board sizes
- [ ] Sound effects
- [ ] Theme customization

## 🛠️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ilhamhafizha/TicTacToe-React.git
   cd TicTacToe-React
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎮 How to Play

1. **Player vs Player Mode**

   - Players take turns clicking empty squares
   - X's go first, then O's
   - First player to get 3 in a row wins
   - Use the timeline to review moves

2. **Player vs AI Mode (Coming Soon)**
   - Choose your difficulty level
   - Play as either X or O
   - Try to beat the AI!

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 Development Notes

### AI Implementation (Planned)

The AI will use the Minimax algorithm with alpha-beta pruning for optimal performance:

- Easy mode: Random moves with 30% optimal moves
- Medium mode: Minimax with limited depth
- Hard mode: Full Minimax implementation (unbeatable)

### Future Improvements

- Add unit tests
- Implement local storage for game history
- Add multiplayer support
- Create custom themes
- Add animation for winning combinations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Inspired by React's official tutorial
- Enhanced with modern React practices
- UI design inspired by Material Design principles
- Special thanks to the React community

## 📧 Contact

Ilham Hafizha - [GitHub](https://github.com/ilhamhafizha)

Project Link: [https://github.com/ilhamhafizha/TicTacToe-React](https://github.com/ilhamhafizha/TicTacToe-React)
