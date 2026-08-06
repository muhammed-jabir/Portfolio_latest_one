import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = ["Loading assets", "Compiling modules", "Initializing core", "Almost ready"];

function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        return next > 100 ? 100 : next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, [onComplete]);

  const dotsActive = Math.min(4, Math.floor(percent / 25));
  const message = messages[Math.min(messages.length - 1, Math.floor(percent / 26))];

  return (
    <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="loader-top">
        <div className="loader-dots">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`loader-dot ${i < dotsActive ? "active" : ""}`} />
          ))}
        </div>
        <span className="loader-message">{message}...</span>
      </div>

      <div className="loader-bottom">
        <span className="loader-percent">{percent}%</span>
        <span className="loader-tag">System Check</span>
      </div>
    </motion.div>
  );
}

export default Loader;