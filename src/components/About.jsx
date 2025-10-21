import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 lg:px-32 pt-8 pb-16 gap-10"
    >
      <div className="flex-1 text-left">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          About <span className="text-[#00ADB5]">me</span>
        </h2>

        <p className="text-slate-300 text-2xl leading-relaxed max-w-md">
          I have 2 years of experience designing websites and mobile apps using{" "}
          <span className="text-white font-semibold">Figma</span>, and I also
          have hands-on experience developing mobile apps with{" "}
          <span className="text-white font-semibold">Kotlin</span> and{" "}
          <span className="text-white font-semibold">React Native</span>.
          Besides my passion for design and mobile development, I’m also really
          into technology because it’s constantly evolving, and I want to stay
          up to date with it.
        </p>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/assets/About.png"
          alt="About Illustration"
          className="w-[350px] md:w-[450px] lg:w-[500px] object-contain"
        />
      </div>
    </section>
  );
};
