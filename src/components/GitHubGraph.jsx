import { useState, useEffect } from "react";

const WEEKS = 13;
const DAYS = 7;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  return 3;
}

const LEVEL_CLASSES = [
  "bg-gray-100 dark:bg-gray-800",
  "bg-accent/25 dark:bg-accent-light/25",
  "bg-accent/50 dark:bg-accent-light/50",
  "bg-accent dark:bg-accent-light",
];

export default function GitHubGraph({ username }) {
  const [grid, setGrid] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = sessionStorage.getItem(`gh-events-${username}`);
    if (cached) {
      setGrid(JSON.parse(cached));
      return;
    }

    fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed");
        return r.json();
      })
      .then((events) => {
        const counts = {};
        events.forEach((e) => {
          const day = e.created_at.substring(0, 10);
          counts[day] = (counts[day] || 0) + 1;
        });

        const today = new Date();
        const cells = [];
        for (let w = WEEKS - 1; w >= 0; w--) {
          for (let d = 0; d < DAYS; d++) {
            const date = new Date(today);
            date.setDate(today.getDate() - (w * 7 + (today.getDay() - d)));
            const key = date.toISOString().substring(0, 10);
            cells.push({ date: key, count: counts[key] || 0 });
          }
        }
        setGrid(cells);
        sessionStorage.setItem(`gh-events-${username}`, JSON.stringify(cells));
      })
      .catch(() => setError(true));
  }, [username]);

  if (error) return null;

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        GitHub Activity
      </h2>
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          <div className="flex flex-col gap-1 mr-2 pt-0">
            {DAY_LABELS.map((label, i) => (
              <div key={i} className="h-3 text-[10px] text-gray-400 leading-3 w-6">
                {label}
              </div>
            ))}
          </div>
          {grid
            ? Array.from({ length: WEEKS }, (_, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {Array.from({ length: DAYS }, (_, d) => {
                    const cell = grid[w * DAYS + d];
                    return (
                      <div
                        key={d}
                        className={`w-3 h-3 rounded-sm ${LEVEL_CLASSES[getLevel(cell?.count || 0)]}`}
                        title={cell ? `${cell.date}: ${cell.count} events` : ""}
                      />
                    );
                  })}
                </div>
              ))
            : Array.from({ length: WEEKS }, (_, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {Array.from({ length: DAYS }, (_, d) => (
                    <div
                      key={d}
                      className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800 animate-pulse"
                    />
                  ))}
                </div>
              ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 text-[10px] text-gray-400">
        <span>Less</span>
        {LEVEL_CLASSES.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
        ))}
        <span>More</span>
      </div>
    </section>
  );
}
