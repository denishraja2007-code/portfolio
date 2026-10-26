import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Certifications</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-300 hover:border-sky-500 transition-colors"
            >
              🎓 {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications