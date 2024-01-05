import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './Key.module.sass'
import { keyMap } from '../utils/tone'

const Key = ({ type, note, keyCode, activeKeys, sampler, handleMouseDown, handleMouseUp }) => {
  const [active, setActive] = useState(false)

  const start = useCallback(() => {
    if (active) return

    setActive(true)
  }, [active])

  const stop = useCallback(() => {
    if (!active) return

    sampler.triggerRelease(note)
    setActive(false)
  }, [active, sampler, note])

  useEffect(() => {
    if (activeKeys.includes(keyCode) && !active) {
      start()
    } else if (!activeKeys.includes(keyCode) && active) {
      stop()
    }
  }, [active, start, stop, activeKeys, keyCode])

  useEffect(() => {
    if (active) sampler.triggerAttack(note)
  }, [active, sampler, note])

  return (
    <div
      className={classNames(styles[type], { [styles.active]: active })}
      onMouseDown={() => handleMouseDown(keyCode)}
      onMouseUp={() => handleMouseUp(keyCode)}
    >
      {keyMap[keyCode]}
    </div>
  )
}

export default Key
