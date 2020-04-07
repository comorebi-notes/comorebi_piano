import React, { useEffect, useState } from 'react'
import styles from './Key.module.sass'

const Key = ({ midiKey, type }) => {
  const freq = 440.0 * Math.pow(2.0, (midiKey - 69.0) / 12.0)

  const [active, setActive] = useState(false)
  const [oscillator, setOscillator] = useState(false)
  const buildOscillator = () => {
    const audioContext = new AudioContext()
    const oscillatorNode = audioContext.createOscillator()
    oscillatorNode.type = 'triangle'
    oscillatorNode.frequency.value = freq
    oscillatorNode.connect(audioContext.destination)
    setOscillator(oscillatorNode)
  }
  useEffect(buildOscillator, [])

  const startSound = () => {
    if (!active) {
      oscillator.start()
      setActive(true)
    } else {
      oscillator.stop()
      setActive(false)
      buildOscillator()
    }
  }
  return (
    <div className={styles[type]} onClick={startSound} />
  )
}

export default Key
