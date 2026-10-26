import { achievements, events } from '../data/achievements'

function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Achievements & Events</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">
              Awards
            </h3>
            <ul className="space-y-3 text-slate-300">
              {achievements.map((item) => (
                <li key={item}>🏆 {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">
              Events & Participation
            </h3>
            <ul className="space-y-3 text-slate-300">
              {events.map((item) => (
                <li key={item}>🎤 {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements