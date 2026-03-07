import { useState, useEffect, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const index = useRef(0);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === KONAMI[index.current]) {
        index.current++;
        if (index.current === KONAMI.length) {
          setActivated(true);
          index.current = 0;
          setTimeout(() => setActivated(false), 4000);
        }
      } else {
        index.current = 0;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return activated;
}
