import React, { useEffect, useState } from 'react'
import Key from './Key'
import styles from './KeyBoard.module.sass'
import { initializeTone, keyboardCodeMap } from '../utils/tone'

const KeyBoard = () => {
  const [started, setStarted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sampler, setSampler] = useState()
  const [activeKeys, setActiveKeys] = useState([])

  const handleKeyDown = (e) => {
    if (e.repeat) return
    setActiveKeys(activeKeys.concat(e.code))
  }
  const handleKeyUp = (e) => {
    setActiveKeys(activeKeys.filter((n) => n !== e.code))
  }
  const handleMouseDown = (keyCode) => setActiveKeys(activeKeys.concat(keyCode))
  const handleMouseUp = (keyCode) => setActiveKeys(activeKeys.filter((n) => n !== keyCode))

  useEffect(() => {
    if (started) initializeTone({ setLoaded, setSampler })
  }, [started])

  useEffect(() => {
    if (activeKeys.length === 0) console.log('========')
  }, [activeKeys])

  return (
    <div
      className={styles.wrapper}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onTouchStart={handleKeyDown}
      onTouchEnd={handleKeyUp}
    >
      <>
        {[2, 3, 4, 5].map((octave) => (
          <div key={octave} className={styles.keyboard}>
            {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((scale) => (
              <Key
                key={scale}
                type="white"
                activeKeys={activeKeys}
                note={`${scale}${octave}`}
                keyCode={keyboardCodeMap[`${scale}${octave}`]}
                sampler={sampler}
                handleMouseDown={handleMouseDown}
                handleMouseUp={handleMouseUp}
              />
            ))}
            <div className={styles.black_wrapper}>
              {['C#', 'D#', 'F#', 'G#', 'A#'].map((scale) => (
                <Key
                  key={scale}
                  type="black"
                  activeKeys={activeKeys}
                  note={`${scale}${octave}`}
                  keyCode={keyboardCodeMap[`${scale}${octave}`]}
                  sampler={sampler}
                  handleMouseDown={handleMouseDown}
                  handleMouseUp={handleMouseUp}
                />
              ))}
            </div>
          </div>
        ))}
      </>
      {!(started && loaded) && (
        <button className={styles.start_btn} onClick={() => setStarted(true)}>
          {started ? 'Loading...' : 'CLICK START'}
        </button>
      )}
    </div>
  )
}

export default KeyBoard
