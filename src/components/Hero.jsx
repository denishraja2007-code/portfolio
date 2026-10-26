import TypingText from './TypingText'
import WavingBoy from './WavingBoy'
import SocialLinks from './SocialLinks'

const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'AI Enthusiast',
  'Hackathon Participant',
]

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-3xl text-center">
        <WavingBoy />

        <p className="text-sky-400 mb-4">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Denishraja I</h1>

        <p className="text-2xl md:text-3xl font-semibold mb-4 h-10">
          <TypingText words={roles} />
        </p>

        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Building AI-powered web apps with React, Node.js and Python.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors"
          >
            View Projects
          </a>
          <a
            href="/Denishraja_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-slate-950 font-semibold transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero