import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const inputClass =
  'w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors'

function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-14 text-left space-y-4"
    >
      <h3 className="text-xl font-semibold text-center mb-6">
        Or send me a message
      </h3>

      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Your email"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your message"
        required
        className={inputClass}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-slate-950 font-semibold transition-colors"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-400">
          Message sent! I'll get back to you soon. 🎉
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}

export default ContactForm