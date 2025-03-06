import React, { useState, useEffect, useRef } from 'react'

export const AudioDownloader = ({ base64AudioData, mensaje }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (base64AudioData) {
      setAudioUrl(base64AudioData);
      setIsLoading(false);
    }
  }, [base64AudioData]);

  return (
    <div className='audio-player-container'>
      {isLoading ? (
        <p>Descargando el archivo de audio...</p>
      ) : (
        <div className='audio-player'> 
          {audioUrl ? (
            <audio controls >
              <source src={audioUrl} type="audio/wav"/>
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p>No se pudo cargar el archivo de audio.</p>
          )}
        </div>
        
      )}
    </div>
  );
};
