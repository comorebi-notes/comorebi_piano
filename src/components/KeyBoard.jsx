import React, { useEffect, useState } from 'react'
import Key from './Key'
import styles from './KeyBoard.module.sass'

const KeyBoard = () => {
  const keyMap = {
    'C4':  [67,  60],
    'C#4': [70,  61],
    'D4':  [86,  62],
    'D#4': [71,  63],
    'E4':  [66,  64],
    'F4':  [78,  65],
    'F#4': [74,  66],
    'G4':  [77,  67],
    'G#4': [75,  68],
    'A4':  [188, 69],
    'A#4': [76,  70],
    'B4':  [190, 71],
    'C5':  [191, 72]
  }
  const [audioContext, setAudioContext] = useState()
  const [gain, setGain] = useState()
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const atx = new AudioContext()
    const gainNode = atx.createGain()
    gainNode.gain.value = 1 / 12
    gainNode.connect(atx.destination)

    setAudioContext(atx)
    setGain(gainNode)
  }, [])

  const [activeKeys, setActiveKeys] = useState([])
  const handleKeyDown = (e) => {
    if (e.repeat) return
    setActiveKeys(activeKeys.concat(e.keyCode))
  }
  const handleKeyUp = (e) => {
    setActiveKeys(activeKeys.filter((n) => n !== e.keyCode))
  }
  return (
    <div
      className={styles.keyboard}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {audioContext && (
        <>
          {['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'].map((scale) => (
            <Key key={scale} type="white" audioContext={audioContext} destination={gain} activeKeys={activeKeys} keyMap={keyMap[scale]} />
          ))}
          <div className={styles.black_wrapper}>
            {['C#4', 'D#4', 'F#4', 'G#4', 'A#4'].map((scale) => (
              <Key key={scale} type="black" audioContext={audioContext} destination={gain} activeKeys={activeKeys} keyMap={keyMap[scale]} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default KeyBoard
