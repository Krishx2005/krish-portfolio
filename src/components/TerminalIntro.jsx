import { useState, useEffect } from "react";
import { personalInfo } from "../data/content";

export default function TerminalIntro() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const text = personalInfo.bio;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(text.substring(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mb-8 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-gray-500 font-mono">krish@osu ~ %</span>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-[#1a1a2e] font-mono text-sm">
        <span className="text-accent dark:text-accent-light">$ </span>
        <span className="text-gray-600 dark:text-gray-400">{displayText}</span>
        {!done && <span className="typing-cursor">|</span>}
        {done && <span className="typing-cursor">|</span>}
      </div>
    </div>
  );
}
