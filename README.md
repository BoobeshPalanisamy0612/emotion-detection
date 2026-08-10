<div align="center">

# 🎭 EmoDetect — Emotion Detection AI

**Real-Time Facial Emotion Detection using AI**
Built with React + face-api.js + TensorFlow.js 🚀

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-blue?style=for-the-badge)](https://emotion-detection-five-inky.vercel.app/)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?style=for-the-badge&logo=vite)
![AI](https://img.shields.io/badge/AI-face--api.js-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

</div>

---

## ✨ Overview

**EmoDetect** is a real-time web application that uses your webcam to detect facial expressions and classify emotions such as:

😄 Happy &nbsp;|&nbsp; 😢 Sad &nbsp;|&nbsp; 😡 Angry &nbsp;|&nbsp; 😲 Surprised &nbsp;|&nbsp; 😐 Neutral &nbsp;|&nbsp; 😨 Fearful &nbsp;|&nbsp; 🤢 Disgusted

It leverages **face-api.js and TensorFlow.js** to deliver instant feedback through a smooth, interactive UI — and as a fun twist, it **auto-plays a matching Tamil song** based on your detected mood. Everything runs **locally in your browser**, so no video ever leaves your device.

---

## 🚀 Live Demo

👉 **Try it here:** [emotion-detection-five-inky.vercel.app](https://emotion-detection-five-inky.vercel.app/)

---

## 📸 Screenshots

<p align="center">
  <img src="./screenshots/hero.png" alt="EmoDetect Landing Page" width="800"/>
  <br/><sub><b>Landing page</b> — live emotion badge, mood-based Tamil music player, and one-click camera access</sub>
</p>

<p align="center">
  <img src="./screenshots/detection.png" alt="Webcam Emotion Detection" width="800"/>
  <br/><sub><b>Live detection view</b> — webcam feed with real-time confidence meter and session timer</sub>
</p>

<p align="center">
  <img src="./screenshots/result-card.png" alt="Emotion Result Card" width="800"/>
  <br/><sub><b>Emotion result card</b> — live probability breakdown across all 7 emotions plus an overall confidence score</sub>
</p>

<p align="center">
  <img src="./screenshots/history.png" alt="Detection History" width="800"/>
  <br/><sub><b>Detection history</b> — auto-logged emotion timeline with per-entry confidence bars and levels</sub>
</p>

---

## 🧠 Features

- ✨ Real-time face detection using your webcam
- ✨ Emotion recognition across 7 states (Happy, Sad, Angry, Surprised, Neutral, Fearful, Disgusted) with live confidence scoring
- ✨ **Mood-matched Tamil music player** that auto-plays a song based on your detected emotion
- ✨ Detailed **Emotion Result Card** showing per-emotion probability bars and an overall confidence ring
- ✨ **Detection History** page that auto-logs every reading with timestamp, confidence bar, and level (High/Med/Low)
- ✨ Session timer and live detection counter
- ✨ 100% client-side processing — no video or data leaves your browser
- ✨ Smooth, dark-themed UI with responsive design (mobile + desktop)
- ✨ Lightweight and fast performance

---

## 🛠️ Tech Stack

| Technology       | Usage                          |
| ----------------- | ------------------------------ |
| ⚛️ React          | Frontend UI                    |
| 🧠 face-api.js     | Facial detection & landmarks   |
| 🔢 TensorFlow.js   | Emotion classification model   |
| ⚡ Vite            | Fast build tool                |
| 🎨 CSS             | Styling                        |

---

## 📂 Project Structure

```bash
emotion-detection/
│
├── public/
│   └── models/                 # Pre-trained AI models
│
├── src/
│   ├── components/
│   │   ├── EmotionDetector.jsx
│   │   ├── ResultCard.jsx
│   │   ├── History.jsx
│   │   └── MusicPlayer.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/BoobeshPalanisamy0612/emotion-detection.git
cd emotion-detection
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the app
```bash
npm run dev
```
👉 Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Model Setup

Download the pre-trained face-api.js models from:
👉 [face-api.js weights](https://github.com/justadudewhohacks/face-api.js/tree/master/weights)

Place the downloaded files inside:
```bash
public/models/
```

---

## 🌐 Deployment

This project is deployed using **Vercel** ⚡

```bash
npm run build
```

Then deploy the generated `dist/` folder to Vercel (or any static hosting provider of your choice).

---

## 📌 Future Enhancements

- 🚀 Emotion history analytics dashboard
- 📊 Weekly/monthly mood trend charts
- 🌙 Light mode support
- 📷 Upload image detection (not just live webcam)
- 🔊 Voice feedback for detected emotions
- 🎵 Custom playlist selection per emotion

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- Open Source Community ❤️

---

## 👨‍💻 Author

**Boobesh Palanisamy**
🔗 GitHub: [@BoobeshPalanisamy0612](https://github.com/BoobeshPalanisamy0612)

---

<p align="center">
  ⭐ If you like this project, give it a star!
</p>
