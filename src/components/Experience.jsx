import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Experience
      </h2>

      <div className="space-y-8 mb-12">
        {experience.map((job) => (
          <div
            key={job.company}
            className="border-l-2 border-accent dark:border-accent-light pl-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {job.company}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {job.date}
              </span>
            </div>
            <p className="text-sm text-accent dark:text-accent-light mb-3">
              {job.role} &middot; {job.location}
            </p>
            <ul className="space-y-2">
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Education
      </h2>
      <div className="border-l-2 border-accent dark:border-accent-light pl-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {education.school}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {education.graduation}
          </span>
        </div>
        <p className="text-sm text-accent dark:text-accent-light mb-3">
          {education.degree} &middot; {education.location}
        </p>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((c) => (
            <span
              key={c}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
