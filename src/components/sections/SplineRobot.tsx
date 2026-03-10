import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineRobot() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {/* Skeleton shown until Spline fires load event */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[260px] animate-pulse rounded-2xl bg-purple-900/20" />
          <div className="absolute h-14 w-14 rounded-full border-2 border-t-purple-500 border-purple-500/20 animate-spin" />
        </div>
      )}

      <Spline
        scene="https://prod.spline.design/6T1pVvuXC9ggdhxb/scene.splinecode"
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </div>
  );
}
