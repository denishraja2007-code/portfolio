import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, categories } from '../data/skills'

function Skills() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill tiles */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {visible.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  borderColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}55`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-6 cursor-pointer"
              >
                <Icon size={40} style={{ color: skill.color }} />
                <span className="text-sm text-slate-300">{skill.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills