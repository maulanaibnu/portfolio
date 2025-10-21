import React from "react";
import { listProyek } from "../data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex flex-col items-center justify-center px-10 md:px-20 lg:px-32 mt-36 pt-8 pb-16 gap-10"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        <span className="text-white">My </span>
        <span className="text-[#00ADB5]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listProyek.map((p, i) => {
          const isSingleLastOnLg =
            listProyek.length % 3 === 1 && i === listProyek.length - 1;
          return (
            <article
              key={p.id}
              className={`rounded-2xl bg-gray-700/80 hover:bg-gray-600/80 border border-white/5
                    shadow-lg shadow-black/20 overflow-hidden transition-all duration-300
                    ${isSingleLastOnLg ? "lg:col-start-2" : ""}`}
            >
              <div className="w-full flex items-center justify-center pt-8">
                <img
                  src={p.gambar}
                  alt={p.nama}
                  className="h-40 md:h-48 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="px-6 pb-6 pt-6">
                <h3 className="text-white font-extrabold text-lg md:text-xl leading-tight">
                  {p.nama}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2 min-h-[3.5rem] md:min-h-[4rem]">
                  {p.desk}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
