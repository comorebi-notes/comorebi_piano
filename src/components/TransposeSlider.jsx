import React from 'react'

const TransposeSlider = ({ transpose, setTranspose }) => (
  <div className="range-slider">
    <label className="range-slider-label" htmlFor="transpose">
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
      onChange={(e) => setTranspose(e.target.value)}
    />
    <span className="range-slider-value">
      {transpose >= 0 && '+'}{transpose}
    </span>
  </div>
)

export default TransposeSlider
