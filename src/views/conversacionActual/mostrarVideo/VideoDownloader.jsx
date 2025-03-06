import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

export const VideoDownloader = ({ base64VideoData }) => {
  const [videoUrl, setvideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (base64VideoData) {
      setvideoUrl(base64VideoData);
      setIsLoading(false);
    }
  }, [base64VideoData]);

  return (
    <div className='video-player-container'>
      {isLoading ? (<p>Descargando el archivo de video...</p>)
        : (
          <div className='video-player'>
            {videoUrl ? (
              <video controls ref={videoRef} width='75%' >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            ) : (
              <p>No se pudo cargar el archivo de video.</p>
            )}
          </div>
        )}
    </div>
  );
};
