import { useState, useEffect, useRef, useCallback } from "react";

export default function useTypingAnimation(
  strings,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1800
) {
  const [displayText, setDisplayText] = useState("");
  const state = useRef({ index: 0, charPos: 0, isDeleting: false, isPaused: false });

  const tick = useCallback(() => {
    const s = state.current;
    const current = strings[s.index];

    if (s.isPaused) {
      s.isPaused = false;
      s.isDeleting = true;
      return deletingSpeed;
    }

    if (!s.isDeleting) {
      s.charPos++;
      setDisplayText(current.substring(0, s.charPos));
      if (s.charPos === current.length) {
        s.isPaused = true;
        return pauseTime;
      }
      return typingSpeed;
    } else {
      s.charPos--;
      setDisplayText(current.substring(0, s.charPos));
      if (s.charPos === 0) {
        s.isDeleting = false;
        s.index = (s.index + 1) % strings.length;
      }
      return deletingSpeed;
    }
  }, [strings, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    let id;
    function loop() {
      const delay = tick();
      id = setTimeout(loop, delay);
    }
    id = setTimeout(loop, typingSpeed);
    return () => clearTimeout(id);
  }, [tick, typingSpeed]);

  return displayText;
}
