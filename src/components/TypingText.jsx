import { useEffect, useState } from 'react'

function TypingText({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pause = 1500,
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1)
          )
        },
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className="text-sky-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingText