import React, { useEffect, useState } from 'react'
import Key from './Key'
import VolumeSlider from './VolumeSlider'
import TransposeSlider from './TransposeSlider'
import ReverbSwitch from './ReverbSwitch'
import styles from './KeyBoard.module.sass'
import { initializeTone, keyboardCodeMap, transposeNote } from '../utils/tone'

const KeyBoard = () => {
  const [started, setStarted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sampler, setSampler] = useState()
  const [volumeNode, setVolumeNode] = useState()
  const [reverbNode, setReverbNode] = useState()
  const [activeKeys, setActiveKeys] = useState([])
  const [transpose, setTranspose] = useState(0)

  const handleKeyDown = (e) => {
    if (e.repeat) return
    setActiveKeys(activeKeys.concat(e.code))
  }
  const handleKeyUp = (e) => {
    setActiveKeys(activeKeys.filter((n) => n !== e.code))
  }
  const handleMouseDown = (keyCode) => {
    setActiveKeys(activeKeys.concat(keyCode))
    window.addEventListener('mouseup', handleMouseUp, true)
  }
  const handleMouseUp = (keyCode) => {
    setActiveKeys(activeKeys.filter((n) => n !== keyCode))
    window.removeEventListener('mouseup', handleMouseUp, true)
  }

  useEffect(() => {
    if (started) initializeTone({ setLoaded, setVolumeNode, setReverbNode, setSampler })
  }, [started])

  return (
    <div
      className={styles.wrapper}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onTouchStart={handleKeyDown}
      onTouchEnd={handleKeyUp}
    >
      <div className={styles.controls}>
        <VolumeSlider volumeNode={volumeNode} />
        <TransposeSlider transpose={transpose} setTranspose={setTranspose} />
        <ReverbSwitch reverbNode={reverbNode} setReverbNode={setReverbNode} />
      </div>
      <div className={styles.keyboards}>
        {[2, 3, 4, 5].map((octave) => (
          <div key={octave} className={styles.keyboard}>
            {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((scale) => (
              <Key
                key={scale}
                type="white"
                activeKeys={activeKeys}
                note={transposeNote(`${scale}${octave}`, transpose)}
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
                  note={transposeNote(`${scale}${octave}`, transpose)}
                  keyCode={keyboardCodeMap[`${scale}${octave}`]}
                  sampler={sampler}
                  handleMouseDown={handleMouseDown}
                  handleMouseUp={handleMouseUp}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {!(started && loaded) && (
        <button className={styles.start_btn} onClick={() => setStarted(true)}>
          {started ? 'Loading...' : 'Click to Start'}
        </button>
      )}
    </div>
  )
}

export default KeyBoard
