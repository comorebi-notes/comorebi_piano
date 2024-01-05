import { Note } from 'tonal'

let Tone

export const initializeTone = async ({ setLoaded, setVolumeNode, setReverbNode, setSampler }) => {
  Tone = await import('tone')

  const volumeOptions = -4
  const reverbOptions = { decay: 1.5, wet: 0 }
  const samplerOptions = {
    urls: {
      E2: 'e2.mp3',
      E3: 'e3.mp3',
      E4: 'e4.mp3',
      E5: 'e5.mp3'
    },
    baseUrl: './samples/',
  }

  const volumeNode = new Tone.Volume(volumeOptions).toDestination()
  const reverbNode = new Tone.Reverb(reverbOptions).connect(volumeNode)
  const sampler = new Tone.Sampler(samplerOptions).connect(reverbNode)

  setVolumeNode(volumeNode)
  setReverbNode(reverbNode)
  setSampler(sampler)

  Tone.loaded().then(() => setLoaded(true))
}

export const transposeNote = (note, interval) => Note.fromMidi(Note.midi(note) + parseInt(interval))

export const keyboardCodeMap = {
  'C2':  'KeyQ',
  'C#2': 'Digit2',
  'D2':  'KeyW',
  'D#2': 'Digit3',
  'E2':  'KeyE',
  'F2':  'KeyR',
  'F#2': 'Digit5',
  'G2':  'KeyT',
  'G#2': 'Digit6',
  'A2':  'KeyY',
  'A#2': 'Digit7',
  'B2':  'KeyU',
  'C3':  'KeyI',
  'C#3': 'Digit9',
  'D3':  'KeyO',
  'D#3': 'Digit0',
  'E3':  'KeyP',
  'F3':  'BracketLeft',
  'F#3': 'Equal',
  'G3':  'BracketRight',
  'G#3': 'KeyA',
  'A3':  'KeyZ',
  'A#3': 'KeyS',
  'B3':  'KeyX',
  'C4':  'KeyC',
  'C#4': 'KeyF',
  'D4':  'KeyV',
  'D#4': 'KeyG',
  'E4':  'KeyB',
  'F4':  'KeyN',
  'F#4': 'KeyJ',
  'G4':  'KeyM',
  'G#4': 'KeyK',
  'A4':  'Comma',
  'A#4': 'KeyL',
  'B4':  'Period',
  'C5':  'Slash',
  'C#5': 'Quote',
  'D5':  'IntlRo',
  'D#5': 'Backslash',
  'E5':  'ShiftRight',
  'F5':  '__F5',
  'F#5': '__F#5',
  'G5':  '__G5',
  'G#5': '__G#5',
  'A5':  '__A5',
  'A#5': '__A#5',
  'B5':  '__B5'
}

export const keyMap = {
  'KeyQ':         'Q',
  'Digit2':       '2',
  'KeyW':         'W',
  'Digit3':       '3',
  'KeyE':         'E',
  'KeyR':         'R',
  'Digit5':       '5',
  'KeyT':         'T',
  'Digit6':       '6',
  'KeyY':         'Y',
  'Digit7':       '7',
  'KeyU':         'U',
  'KeyI':         'I',
  'Digit9':       '9',
  'KeyO':         'O',
  'Digit0':       '0',
  'KeyP':         'P',
  'BracketLeft':  '@',
  'Equal':        '^',
  'BracketRight': ']',
  'KeyA':         'A',
  'KeyZ':         'Z',
  'KeyS':         'S',
  'KeyX':         'X',
  'KeyC':         'C',
  'KeyF':         'F',
  'KeyV':         'V',
  'KeyG':         'G',
  'KeyB':         'B',
  'KeyN':         'N',
  'KeyJ':         'J',
  'KeyM':         'M',
  'KeyK':         'K',
  'Comma':        ',',
  'KeyL':         'L',
  'Period':       '.',
  'Slash':        '/',
  'Quote':        ':',
  'IntlRo':       '_',
  'Backslash':    ']',
  'ShiftRight':   '⇧'
}
