import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export const EncryptedText = ({ text, className, interval = 50 }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10%" });

  const animate = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, interval);
  };

  useEffect(() => {
    if (isInView) {
      animate();
    } else {
      clearInterval(intervalRef.current);
      // Optional: Reset to original text or scrambled state when out of view?
      // Leaving it as-is freezes it, triggering animate() on re-entry restarts it.
    }
    return () => clearInterval(intervalRef.current);
  }, [isInView, text]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
};
