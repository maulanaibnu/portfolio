import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function App() {
  return (
    <>
      {/* <div className="hero ">
        <div>
          <h1>Hi, i am</h1>
        </div>
      </div> */}
      <div className="min-h-screen flex items-start pt-32 md:pt-40 px-6">
        <div className="w-full max-w-6xl mx-auto sm:pl-8 md:pl-20">
          {/* Heading */}
          <h1 className="font-extrabold leading-tight text-white text-4xl sm:text-6xl lg:text-7xl">
            <span className="block text-slate-300 lowercase">hi, i am</span>
            <span className="block text-[#00ADB5]">Maulana Ibnu Fajar</span>
          </h1>

          {/* Subheadings */}
          <p className="mt-6 text-slate-200 text-xl sm:text-2xl lg:text-3xl">
            a Software Engineer, make{" "}
            <span className="text-white font-semibold">UI/UX Design</span>
          </p>
          <p className="mt-2 text-slate-200 text-xl sm:text-2xl lg:text-3xl">
            And <span className="text-white font-semibold">Mobile Apps</span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/maulanaibnu"
              className="px-5 py-3 rounded-xl bg-[#00ADB5] text-white font-medium hover:bg-teal-700 transition flex items-center gap-2"
            >
              <FiGithub className="text-xl" />
              Github
            </a>

            <a
              href="/assets/CV-maulana ibnu fajar.pdf"
              className="px-5 py-3 rounded-xl border border-[#00ADB5] text-[#00ADB5] font-medium hover:bg-teal-500/10 transition flex items-center gap-2"
            >
              <IoDocumentTextOutline className="text-xl" />
              My CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
