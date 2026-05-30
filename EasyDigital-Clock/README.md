# ⏰ Digital Clock

A simple and responsive Digital Clock built using **HTML, CSS, and JavaScript**. The clock displays the current time in real-time with a modern glassmorphism-inspired UI and gradient background.

## 📸 Preview

![Digital Clock Screenshot](./assets/Screenshot%202026-05-30%20155754.png)

## 🚀 Features

- Real-time clock updates every second
- 12-Hour / 24-Hour format support
- Responsive design
- Modern gradient background
- Clean and minimal UI
- Lightweight and beginner-friendly project

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 📂 Project Structure

```bash
Digital-Clock/
│
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md
```

## ⚙️ How It Works

1. JavaScript creates a new Date object.
2. Current hours, minutes, and seconds are extracted.
3. Time updates every second using `setInterval()`.
4. Values are displayed dynamically on the webpage.

## 📜 JavaScript Logic

```javascript
function time() {
  const date = new Date();

  hour.innerText = date.getHours();
  min.innerText = date.getMinutes();
  sec.innerText = date.getSeconds();
}

setInterval(time, 1000);
```

## 🎯 Learning Outcomes

Through this project, I learned:

- DOM Manipulation
- JavaScript Date Object
- setInterval()
- CSS Flexbox
- Responsive UI Design

## 🔮 Future Improvements

- Add Dark/Light Mode
- Add Date Display
- Add Multiple Time Zones
- Add Alarm Functionality
- Add Smooth Animations

## 🤝 Contributing

Feel free to fork this repository and submit pull requests.

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.

---

Made with ❤️ using HTML, CSS & JavaScript.
