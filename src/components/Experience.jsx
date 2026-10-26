import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="border-l-2 border-slate-800 pl-8 space-y-10">
          {experience.map((item) => (
            <div key={item.company} className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-950" />
              <p className="text-sm text-sky-400 mb-1">{item.period}</p>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-slate-400 mb-2">{item.company}</p>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience