import React from 'react'
import localStorage from 'localStorage'

const TransposeSlider = ({ transpose, setTranspose }) => {
  const handleTransposeChange = (e) => {
    setTranspose(e.target.value)
    localStorage.setItem('transpose', e.target.value)
  }
  return (
    <div className="range-slider">
      <label className="range-slider-label input-ui-label" htmlFor="transpose">
        Transpose
      </label>
      <input
        className="range-slider-input"
        id="transpose"
        type="range"
        min="-6"
        max="6"
        step="1"
        value={transpose}
        onChange={handleTransposeChange}
      />
      <span className="range-slider-value">
      {transpose >= 0 && '+'}{transpose}
    </span>
    </div>
  )
}

export default TransposeSlider
