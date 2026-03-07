export default function ProjectCard({ title, tech, description }) {
  return (
    <div className="group relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-accent-light/10 transition-all duration-200 bg-white dark:bg-darkcard">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="relative text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="relative flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium group-hover:bg-accent/10 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
