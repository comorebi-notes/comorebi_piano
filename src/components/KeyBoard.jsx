import React, { useState } from 'react'
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
  const [activeKeys, setActiveKeys] = useState([])
  const handleKeyDown = (e) => {
    if (e.repeat) return
    setActiveKeys(activeKeys.concat(e.keyCode))
  }
  const handleKeyUp = (e) => {
    setActiveKeys(activeKeys.filter((n) => n !== e.keyCode))
  }
  console.log(activeKeys)
  return (
    <div
      className={styles.keyboard}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <Key type="white" keyMap={keyMap['C4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['D4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['E4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['F4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['G4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['A4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['B4']} activeKeys={activeKeys} />
      <Key type="white" keyMap={keyMap['C5']} activeKeys={activeKeys} />
      <div className={styles.black_wrapper}>
        <Key type="black" keyMap={keyMap['C#4']} activeKeys={activeKeys} />
        <Key type="black" keyMap={keyMap['D#4']} activeKeys={activeKeys} />
        <Key type="black" keyMap={keyMap['F#4']} activeKeys={activeKeys} />
        <Key type="black" keyMap={keyMap['G#4']} activeKeys={activeKeys} />
        <Key type="black" keyMap={keyMap['A#4']} activeKeys={activeKeys} />
      </div>
    </div>
  )
}

export default KeyBoard
