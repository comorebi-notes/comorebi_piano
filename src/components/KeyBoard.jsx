import React, { useEffect, useState } from 'react'
import Key from './Key'
import styles from './KeyBoard.module.sass'

const KeyBoard = () => {
  const keyMap = {
    'C2':  [81,  36],
    'C#2': [50,  37],
    'D2':  [87,  38],
    'D#2': [51,  39],
    'E2':  [69,  40],
    'F2':  [82,  41],
    'F#2': [53,  42],
    'G2':  [84,  43],
    'G#2': [54,  44],
    'A2':  [89,  45],
    'A#2': [55,  46],
    'B2':  [85,  47],
    'C3':  [73,  48],
    'C#3': [57,  49],
    'D3':  [79,  50],
    'D#3': [48,  51],
    'E3':  [80,  52],
    'F3':  [192, 53],
    'F#3': [187, 54],
    'G3':  [219, 55],
    'G#3': [65,  56],
    'A3':  [90,  57],
    'A#3': [83,  58],
    'B3':  [88,  59],
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
  }
  const [audioContext, setAudioContext] = useState()
  const [gain, setGain] = useState()
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const atx = new AudioContext()
    const gainNode = atx.createGain()
    gainNode.gain.value = .25
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
      className={styles.wrapper}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onTouchStart={handleKeyDown}
      onTouchEnd={handleKeyUp}
    >
      {audioContext && (
        <>
          {[2, 3, 4].map((octave) => (
            <div key={octave} className={styles.keyboard}>
              {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((scale) => (
                <Key key={scale} type="white" audioContext={audioContext} destination={gain} activeKeys={activeKeys} keyMap={keyMap[`${scale}${octave}`]} />
              ))}
              <div className={styles.black_wrapper}>
                {['C#', 'D#', 'F#', 'G#', 'A#'].map((scale) => (
                  <Key key={scale} type="black" audioContext={audioContext} destination={gain} activeKeys={activeKeys} keyMap={keyMap[`${scale}${octave}`]} />
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default KeyBoard
