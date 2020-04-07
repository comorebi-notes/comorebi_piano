import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './Key.module.sass'

const Key = ({ type, keyMap: [keyCode, midiKey], activeKeys }) => {
  const freq = 440.0 * Math.pow(2.0, (midiKey - 69.0) / 12.0)

  const [active, setActive] = useState(false)
  const [oscillator, setOscillator] = useState(false)

  const buildOscillator = useCallback(() => {
    const audioContext = new AudioContext()
    const oscillatorNode = audioContext.createOscillator()
    oscillatorNode.type = 'triangle'
    oscillatorNode.frequency.value = freq
    oscillatorNode.connect(audioContext.destination)
    setOscillator(oscillatorNode)
  }, [freq])
  useEffect(buildOscillator, [])

  const start = useCallback(() => {
    if (active) return
    oscillator.start()
    setActive(true)
  }, [active, oscillator])
  const stop = useCallback(() => {
    if (!active) return
    oscillator.stop()
    setActive(false)
    buildOscillator()
  }, [active, oscillator, buildOscillator])

  useEffect(() => {
    if (activeKeys.includes(keyCode)) {
      start()
    } else {
      stop()
    }
  }, [activeKeys, keyCode, start, stop])
  return (
    <div className={classNames(styles[type], { [styles.active]: active })} onMouseDown={start} onMouseUp={stop} />
  )
}

export default Key
