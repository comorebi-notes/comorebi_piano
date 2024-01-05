import React, { useState } from 'react'

const ReverbSwitch = ({ reverbNode }) => {
  const [isEnabledReverb, setEnabledReverb] = useState(false)

  const enableReverb = () => {
    reverbNode.wet.value = .5
    setEnabledReverb(true)
  }
  const disableReverb = () => {
    reverbNode.wet.value = 0
    setEnabledReverb(false)
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
          value={isEnabledReverb || false}
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
