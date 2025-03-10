import React, { useState, useEffect } from "react";

export const SequentialText = () => {
  const texts = ["At Scale", "Globally", "Securely"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Typing speed in ms
  const deleteSpeed = 50; // Deleting speed in ms
  const delayBeforeDelete = 1000; // Delay before starting to delete
  const delayBeforeNext = 500; // Delay before typing new word

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayedText.length < texts[currentTextIndex].length) {
      // Typing animation
      typingTimeout = setTimeout(() => {
        setDisplayedText(
          texts[currentTextIndex].slice(0, displayedText.length + 1)
        );
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === texts[currentTextIndex].length) {
      // Wait before deleting
      typingTimeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting animation
      typingTimeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deleteSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      typingTimeout = setTimeout(() => {}, delayBeforeNext);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <div className="text-3xl md:text-5xl font-normal text-primery">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};
