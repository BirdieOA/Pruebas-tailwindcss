import React from "react";

const page = () => {
  return (
    <section className="container mx-auto flex h-screen flex-col items-center justify-center gap-4">
      <button className="animate-wiggle border border-cyan-900 bg-cyan-700 px-2.5 py-1 text-2xl text-white animate-infinite animate-duration-1000">
        Esta es una prueba
      </button>

      <button className="animate-rotate-x animate-ease-out border border-[#792970] bg-[#9A348E] px-2.5 py-1 text-2xl text-white animate-infinite animate-duration-1000">
        de tailwind-animated
      </button>
      <button className="animate-flip-down animate-ease-out border border-[#b76b31] bg-[#ec8536] px-2.5 py-1 text-2xl text-white animate-infinite animate-duration-1000">
        y prettier-plugin-tailwindcss
      </button>
    </section>
  );
};

export default page;
