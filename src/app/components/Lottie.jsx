'use client';

import Lottie from 'lottie-react';

export default function PricingLottie({ animationData,width,height }) {
  return (
    <div style={{
      height:`${height}`,
      width:`${width}`,
      transition:'1s ease'
    }}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
      />
    </div>
  );
}
