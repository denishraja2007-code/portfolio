import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = ['Hi! 👋', 'hello! 👋 ']

function WavingBoy() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % greetings.length),
      2500
    )
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-44 mx-auto mb-8">
      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-2 -right-20 z-10 bg-white text-slate-900 font-semibold px-4 py-2 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap"
        >
          {greetings[index]}
        </motion.div>
      </AnimatePresence>

      {/* Avatar */}
      <motion.div
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/avatar.jpg"
          alt="Denishraja avatar"
          className="w-44 h-44 rounded-full object-cover object-top border-4 border-sky-500 shadow-lg shadow-sky-500/30"
        />
        <motion.span
          className="absolute -right-3 bottom-2 text-4xl"
          style={{ originX: 0.7, originY: 0.9 }}
          animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
        >
          
        </motion.span>
      </motion.div>
    </div>
  )
}

export default WavingBoy