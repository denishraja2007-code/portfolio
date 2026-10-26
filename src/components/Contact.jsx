import { motion } from 'framer-motion'
import { socials } from '../data/socials'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-300 text-lg mb-10">
          I'm open to full-stack developer opportunities and interesting
          projects. Find me on these platforms or send me a message.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{
                  y: -6,
                  borderColor: s.color,
                  boxShadow: `0 0 20px ${s.color}55`,
                }}
                className="w-40 sm:w-44 flex flex-col items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <Icon size={36} style={{ color: s.color }} />
                <p className="font-semibold">{s.name}</p>
                <p className="text-xs text-slate-400 break-all">{s.handle}</p>
              </motion.a>
            )
          })}
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact