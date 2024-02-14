import React, { useState, useEffect, FC } from "react";

interface Typewriter {
  text: string;
  delay: number;
  fontsize: string;
  fontcolor: string;
}

const TypewriterComponent: FC<Typewriter> = ({
  text,
  delay,
  fontsize,
  fontcolor,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  if (currentIndex == text.length) {
    const refresh = setTimeout(() => {
      setCurrentText("");
      setCurrentIndex(0);
    }, 1000);
  }

  return <p style={{ fontSize: fontsize, color: fontcolor }}>{currentText}</p>;
};

export default TypewriterComponent;
