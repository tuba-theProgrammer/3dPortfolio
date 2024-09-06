import { Html, useProgress } from '@react-three/drei';
import { a, useSpring } from '@react-spring/web';
import React from 'react';

export default function Loader() {
  const { progress } = useProgress();
  const props = useSpring({ width: progress + '%' });

  return (
    <Html center>
      <div className="loading">
        <div className="loading-bar-container">
          <a.div className="loading-bar" style={props} />
        </div>
        <p>{Math.round(progress)} % loaded</p>
      </div>
    </Html>
  );
}
