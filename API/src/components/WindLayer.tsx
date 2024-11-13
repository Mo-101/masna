import React, { useEffect, useRef } from 'react';
import { WindGL } from '../utils/wind-gl';
import { getJSON, updateWind } from '../utils/api';
import * as dat from 'dat.gui';

interface WindLayerProps {
  visible: boolean;
}

const WindLayer: React.FC<WindLayerProps> = ({ visible }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const coastlineRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !coastlineRef.current || !visible) return;

    const canvas = canvasRef.current;
    const pxRatio = Math.max(Math.floor(window.devicePixelRatio) || 1, 2);
    
    const updateCanvasDimensions = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth * pxRatio;
        canvas.height = canvas.parentElement.clientHeight * pxRatio;
        canvas.style.width = `${canvas.parentElement.clientWidth}px`;
        canvas.style.height = `${canvas.parentElement.clientHeight}px`;
      }
    };

    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const wind = new WindGL(gl);
    wind.resize();
    wind.numParticles = 65536;

    // Initialize GUI controls
    const gui = new dat.GUI({ autoPlace: false });
    gui.add(wind, 'numParticles', 1024, 589824);
    gui.add(wind, 'fadeOpacity', 0.96, 0.999).step(0.001);
    gui.add(wind, 'speedFactor', 0.05, 1.0);
    gui.add(wind, 'dropRate', 0, 0.1);
    gui.add(wind, 'dropRateBump', 0, 0.2);

    // Animation frame
    let animationFrameId: number;
    const frame = () => {
      if (wind.windData) {
        wind.draw();
      }
      animationFrameId = requestAnimationFrame(frame);
    };
    frame();

    // Load coastline data
    getJSON('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_coastline.geojson', (data) => {
      const coastline = coastlineRef.current;
      if (!coastline) return;

      coastline.width = coastline.clientWidth * pxRatio;
      coastline.height = coastline.clientHeight * pxRatio;

      const ctx = coastline.getContext('2d');
      if (!ctx) return;

      ctx.lineWidth = pxRatio;
      ctx.lineJoin = ctx.lineCap = 'round';
      ctx.strokeStyle = 'white';
      ctx.beginPath();

      for (let i = 0; i < data.features.length; i++) {
        const line = data.features[i].geometry.coordinates;
        for (let j = 0; j < line.length; j++) {
          ctx[j ? 'lineTo' : 'moveTo'](
            (line[j][0] + 180) * coastline.width / 360,
            (-line[j][1] + 90) * coastline.height / 180
          );
        }
      }
      ctx.stroke();
    });

    // Load initial wind data
    updateWind('0', wind);

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
      gui.destroy();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <canvas
        ref={coastlineRef}
        className="absolute inset-0 w-full h-full bg-black"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default WindLayer;