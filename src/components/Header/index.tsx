import { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const ROCK = ['🪨', '✊']
  const PAPER = ['📄', '✋']
  const SCISSORS = ['✂️', '✌️']

  const [sub, setSub] = useState(ROCK[1] + PAPER[1] + SCISSORS[1])

  const binaryAleatory = () => {
    return Math.round(Math.random())
  }

  useEffect(() => {
    const animation = setInterval(() => {
      setSub(ROCK[binaryAleatory()] + PAPER[binaryAleatory()] + SCISSORS[binaryAleatory()])
    }, 1000)
    return () => clearInterval(animation)
  }, [])

  return (
    <header>
      <h1><Link to={'/'} className='text-decoration-none'>Rock Paper Scissors</Link></h1>
      <h2 className='text-secondary'>Settle your disputes like an adult!</h2>
      <p className='fadeIn'>{sub}</p>
    </header>
  )
}
