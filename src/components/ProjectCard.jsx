export default function ProjectCard({ title, tech, description, link, github, featured }) {
  return (
    <div className={`group relative overflow-hidden border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-white dark:bg-darkcard ${
      featured
        ? 'border-accent dark:border-accent-light shadow-md shadow-accent/5 dark:shadow-accent-light/5 md:col-span-2 lg:col-span-3'
        : 'border-gray-200 dark:border-gray-700 hover:shadow-accent/10 dark:hover:shadow-accent-light/10'
    }`}>
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-light transition-transform duration-300 origin-left ${featured ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {featured && (
        <span className="relative inline-block text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-light mb-3">
          Featured Project
        </span>
      )}

      <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="relative text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="relative flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium group-hover:bg-accent/10 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>

      {(link || github) && (
        <div className="relative flex items-center gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-light hover:underline"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Source Code
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
