import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Boton_sound from './boton'

const boton_music = new Howl({
  src: ['./src/assets/sound-audio.mp3'], // Efecto click
});

const background_music = new Howl({
  src: ['./src/assets/background-sound2.mp3'], // Musica de fondo
  volume: 1,
  loop: true,
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <Boton_sound/>
  </div>
)
