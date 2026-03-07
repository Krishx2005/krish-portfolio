const COLORS = ["#d33682", "#ff8ac1", "#ffd700", "#2aa198", "#6c71c4", "#ffffff"];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function Confetti() {
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${randomBetween(0, 100)}%`,
    width: randomBetween(6, 10),
    height: randomBetween(6, 14),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: `${randomBetween(0, 2.5)}s`,
    duration: `${randomBetween(2, 4)}s`,
  }));

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute confetti-piece"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}
