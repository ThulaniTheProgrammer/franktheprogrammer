'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Example() {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        className="w-full max-w-sm md:max-w-xl lg:max-w-4xl"
      >
        {/* Slide 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
          <div className="rounded-xl bg-yellow-500 p-4 text-center">
            <a href="">
              <div className="h-40 flex items-center justify-center text-lg font-semibold">ERP Software</div>
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
