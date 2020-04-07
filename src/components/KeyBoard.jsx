import React  from 'react'
import Key from './Key'
import styles from './KeyBoard.module.sass'

const KeyBoard = () => {
  return (
    <div className={styles.keyboard}>
      <Key type="white" midiKey={60} />
      <Key type="white" midiKey={62} />
      <Key type="white" midiKey={64} />
      <Key type="white" midiKey={65} />
      <Key type="white" midiKey={67} />
      <Key type="white" midiKey={69} />
      <Key type="white" midiKey={71} />
      <Key type="white" midiKey={72} />
      <div className={styles.black_wrapper}>
        <Key type="black" midiKey={61} />
        <Key type="black" midiKey={63} />
        <Key type="black" midiKey={66} />
        <Key type="black" midiKey={68} />
        <Key type="black" midiKey={70} />
      </div>
    </div>
  )
}

export default KeyBoard
