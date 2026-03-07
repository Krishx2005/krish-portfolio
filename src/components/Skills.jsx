import { skills } from "../data/content";

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Technologies", items: skills.technologies },
  { label: "Concepts", items: skills.concepts },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-darkcard text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
