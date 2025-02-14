import React from 'react';

export default function Footer() {
  return (
    <div className="mx-4 sm:mx-10 py-5">
      <div className="border-2 border-yellow-500"></div>

      <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-between text-sm sm:text-black text-center sm:text-left">
        {/* Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <a href="https://github.com/ThulaniTheProgrammer/">Github</a>
          <a href="https://www.linkedin.com/in/frank-makeba-251ba1195">LinkedIn</a>
          <a href="mailto:frankmakeba0@gmail.com">Gmail</a>
        </div>

        {/* Copyright */}
        <div className="hidden lg:block">2024 All rights reserved.</div>
      </div>
    </div>
  );
}
