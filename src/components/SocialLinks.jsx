import { motion } from 'framer-motion'
import { socials } from '../data/socials'

function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {socials
        .filter((s) => s.name !== 'Email')
        .map((s) => {
          const Icon = s.icon
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
              whileHover={{ y: -4, scale: 1.15, boxShadow: `0 0 16px ${s.color}66` }}
              className="bg-slate-900 border border-slate-800 rounded-full p-3 text-2xl"
              style={{ color: s.color }}
            >
              <Icon />
            </motion.a>
          )
        })}
    </div>
  )
}

export default SocialLinks