function ProjectCard({ title, description, tags, github, live }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-500 transition-colors flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-sky-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="hover:text-sky-400">
            Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="hover:text-sky-400">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard