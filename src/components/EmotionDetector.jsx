import React, { useRef, useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import ParticlesBackground from "./ParticlesBackground";

const EmotionDetector = ({ user }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const detectRef = useRef(null);

  const [emotion, setEmotion] = useState(null);
  const [lastEmotion, setLastEmotion] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 🎨 Emotion Colors
  const getColor = (emotion) => {
    const colors = {
      happy: "#00f5a0",
      sad: "#60a5fa",
      angry: "#f87171",
      surprised: "#facc15",
      fearful: "#c084fc",
      disgusted: "#4ade80",
      neutral: "#94a3b8",
    };
    return colors[emotion] || "#00ffff";
  };

  // 😊 Emoji
  const getEmoji = (emotion) => {
    const emojis = {
      happy: "😄",
      sad: "😢",
      angry: "😠",
      surprised: "😲",
      fearful: "😨",
      disgusted: "🤢",
      neutral: "😐",
    };
    return emojis[emotion] || "🙂";
  };

  // 🔊 Voice
  const speakEmotion = (text) => {
    if (isSpeaking) return;

    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  // 🎥 Camera
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Camera error ❌", err);
    }
  };

  // 📦 Load Models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      startVideo();
    };
    loadModels();
  }, []);

  // 🎯 Detect Emotion
  const detectEmotion = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const size = {
      width: videoRef.current.videoWidth,
      height: videoRef.current.videoHeight,
    };

    canvas.width = size.width;
    canvas.height = size.height;

    faceapi.matchDimensions(canvas, size);
    const resized = faceapi.resizeResults(detections, size);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (resized.length > 0) {
      const expressions = resized[0].expressions;

      const maxEmotion = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b
      );

      const confidence = (expressions[maxEmotion] * 100).toFixed(2);

      setEmotion({ type: maxEmotion, value: confidence });

      if (maxEmotion !== lastEmotion && !isSpeaking) {
        speakEmotion(`Hey ${user}, you seem ${maxEmotion}`);
        setLastEmotion(maxEmotion);
      }

      // ✨ Glow Face Box
      resized.forEach((det) => {
        const { x, y, width, height } = det.box;
        const color = getColor(maxEmotion);

        ctx.shadowColor = color;
        ctx.shadowBlur = 25;
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;

        ctx.strokeRect(x, y, width, height);
        ctx.shadowBlur = 0;
      });
    }
  };

  // Safe Ref
  useEffect(() => {
    detectRef.current = detectEmotion;
  });

  // Interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSpeaking && detectRef.current) {
        detectRef.current();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isSpeaking]);

  const cardColor = emotion ? getColor(emotion.type) : "#00ffff";

  return (
    <div className="app-container">
      <ParticlesBackground />

      <div
        className={`card ${emotion ? emotion.type : "neutral"}`}
        style={{
          background: `linear-gradient(135deg, ${cardColor}33, rgba(0,0,0,0.7))`,
          boxShadow: `0 0 40px ${cardColor}`,
        }}
      >
        <h1 className="title">
          <span className="ai">EMOTION</span>
          <span className="detector">DETECTOR</span>
        </h1>

        <div className="video-container">
          <video ref={videoRef} autoPlay muted />
          <canvas ref={canvasRef} />
        </div>

        {emotion && (
          <div className="result">
            <h2 className="emotion-text">
              {getEmoji(emotion.type)} {emotion.type}
            </h2>
            <p>{emotion.value}% confidence</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionDetector;