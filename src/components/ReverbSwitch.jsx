import React, { useState } from 'react'
import localStorage from 'localStorage'

const ReverbSwitch = ({ reverbNode }) => {
  const reverbWetValue = .5
  const [isEnabledReverb, setEnabledReverb] = useState(localStorage.getItem('reverb_wet') === reverbWetValue.toString() || false)

  const enableReverb = () => {
    reverbNode.wet.value = reverbWetValue
    setEnabledReverb(true)
    localStorage.setItem('reverb_wet', reverbNode.wet.value)
  }
  const disableReverb = () => {
    reverbNode.wet.value = 0
    setEnabledReverb(false)
    localStorage.setItem('reverb_wet', reverbNode.wet.value)
  }

  return (
    <div className="switch-check-box">
      <label className="switch-check-box-label" htmlFor="reverb">
        <span className="input-ui-label">
          Reverb
        </span>
        <input
          className="switch-check-box-input"
          id="reverb"
          type="checkbox"
          defaultChecked={isEnabledReverb || false}
          onChange={() => isEnabledReverb ? disableReverb() : enableReverb()}
        />
        <span className="switch-check-box-ui"/>
      </label>
      <span className="switch-check-box-value">
        {isEnabledReverb ? 'ON ' : 'OFF'}
      </span>
    </div>
  )
}

export default ReverbSwitch
