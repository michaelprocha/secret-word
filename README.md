# Secret word

This website is a web-based word guessing game where the player must discover the hidden word by guessing letters. The player starts with three attempts. When a guessed letter is correct, the number of attempts does not decrease; when the guess is wrong, one attempt is lost. To avoid unnecessary penalties, the game keeps a history of guessed letters, preventing the player from repeating the same letter and losing an attempt for nothing.
Each time the player successfully guesses the full word, they earn 100 points, and a new word is presented to continue the game.

---

## ✨ Features

- Three-attempt system with penalty only for wrong guesses

- Guessed letters history to prevent repeated guesses

- Score system with 100 points awarded per correct word

- Automatic generation of a new word after each successful round

---

## 📷 Screenshots

### Desktop
![screenshot-desktop](/public/secret_word_screen_shot.png)

---

## 🚀 Technologies

- React

- Tailwind

- Vite

---

## 📦 How to use

1. Clone the repository:
```bash
git clone https://github.com/michaelprocha/secret-word
```

2. Dowloand [NodeJS](https://nodejs.org/en/download).

3. Install dependencies:
```bash
npm install
```

4. Run locally
```bash
npm run dev
```

---

## 👨‍💻 Author

Made by [Michael Rocha](https://github.com/michaelprocha)

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.