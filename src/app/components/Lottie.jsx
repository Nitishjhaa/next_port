'use client';

import Lottie from 'lottie-react';

export default function PricingLottie({ animationData }) {
  return (
    <div className="w-[680px] h-[680px]">
      <Lottie
        animationData={animationData}
        loop
        autoplay
      />
    </div>
  );
}
