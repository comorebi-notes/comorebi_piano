import React, { useState } from 'react'
import localStorage from 'localStorage'

const VolumeSlider = ({ volumeNode }) => {
  const [volume, setVolume] = useState(localStorage.getItem('volume') || -4)

  const handleVolumeChange = (e) => {
    volumeNode.volume.value = e.target.value
    setVolume(e.target.value)
    localStorage.setItem('volume', e.target.value)
  }
  const minVolume = -20
  const humanVolume = (volume) => (parseInt(volume) + Math.abs(minVolume)) * 5

  return (
    <div className="range-slider">
      <label className="range-slider-label input-ui-label" htmlFor="volume">
        Volume
      </label>
      <input
        className="range-slider-input"
        id="volume"
        type="range"
        min={minVolume + 1}
        max="0"
        step="1"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span className="range-slider-value">
        {humanVolume(volume)}
      </span>
    </div>
  )
}

export default VolumeSlider
