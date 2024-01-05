import React, { useState } from 'react'
import styles from './VolumeSlider.module.sass'

const VolumeSlider = ({ volumeNode }) => {
  const [volume, setVolume] = useState(0)

  const handleVolumeChange = (e) => {
    volumeNode.volume.value = e.target.value
    setVolume(e.target.value)
  }
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="volume">
        Volume
      </label>
      <input
        className={styles.range}
        id="volume"
        type="range"
        min="-20"
        max="0"
        step="1"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  )
}

export default VolumeSlider
