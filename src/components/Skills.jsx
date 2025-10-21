import React from "react";
import { listTools } from "../data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-10 md:px-20 lg:px-32 pt-8 pb-16 gap-10"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {listTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-gray-700/80 hover:bg-gray-600/80 transition-all duration-300 rounded-xl
             p-6 w-40 h-40 md:w-48 md:h-48 flex flex-col justify-between"
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <div className="mt-4 min-h-[2.5rem] md:min-h-[2.75rem] flex items-center justify-center">
              <p className="text-white font-semibold text-lg leading-tight text-center whitespace-normal">
                {tool.nama}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
