import React, { useState, useRef } from 'react';
import './index.css';
import './boton.css';
import { Howl } from 'howler';

const boton_music = new Howl({
    src: ['./src/assets/sound-audio.mp3'], // Efecto click
});

const background_music = new Howl({
    src: ['./src/assets/background-sound2.mp3'], // Musica de fondo
    volume: 1,
    loop: true,
});


function Loading(){
  // SVG
  return(
    <div className='loader-container'>
      <svg className='loader' width="100%" height="50" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="white"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" /><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" /></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" /><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" /></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" /><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" /></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" /><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" /></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite" /><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite" /></rect></svg>
    </div>
    )
}


function Boton_sound() {
  // Fondo del boton estados
    const [colorFondo, setColorFondo] = useState('#12051a');

    const cambiarColorFondo = () => {
        const nuevoColor = colorFondo === '#12051a' ? '#071bdf' : '#12051a';
        setColorFondo(nuevoColor);
    };

    // Efectos de sonido
    function sound_efect() {
        if (background_music.playing()) {
            background_music.fade(background_music.volume(), 0, 1000);
            background_music.once('fade', () => {
                background_music.stop();
            });
        } else {
            background_music.play();
            background_music.fade(0, 1, 5000);
        }

        boton_music.play();
    }

    function boton_event() {
        sound_efect();
        cambiarColorFondo();
    }

    return (
        <div onClick={boton_event} style={{ backgroundColor: colorFondo }} className="boton_music">
            {/* EFECTO */}
            <Loading/>
        </div>
    );
}

export default Boton_sound;
