import React from "react";
import { useState } from "react";
import { FiLinkedin, FiMail, FiSend } from "react-icons/fi";

export const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const to = "maulanaibnuf@gmail.com";
    const url = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <section
      id="contact"
      className="min-h-[80vh] px-10 md:px-20 lg:px-32 mt-32 pt-12 pb-20"
    >
      <div className="flex flex-col [@media(min-width:1279px)]:flex-row gap-12 [@media(min-width:1279px)]:gap-16">
        <div className="[@media(min-width:1279px)]:w-1/2 [@media(min-width:1279px)]:pr-12 [@media(min-width:1279px)]:border-r [@media(min-width:1279px)]:border-white/10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Reach out to <span className="text-[#00ADB5]">me?</span>
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/maulanaibnu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ADB5]/90 hover:bg-teal-700 text-white px-5 py-3 font-medium transition"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href="mailto:maulanaibnuf@gmail.com?subject="
              className="inline-flex items-center gap-2 rounded-xl border border-[#00ADB5] text-[#00ADB5] hover:bg-teal-500/10 px-5 py-3 font-medium transition"
            >
              <FiMail className="text-lg" />
              Email
            </a>
          </div>
        </div>

        <div className="[@media(min-width:1279px)]:w-1/2 [@media(min-width:1279px)]:pl-12 w-full">
          <form onSubmit={onSubmit} className="space-y-8 max-w-2xl w-full">
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Write your subject here..."
                className="w-full rounded-xl bg-white/5 text-slate-200 placeholder:text-slate-400
                       px-5 py-4 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#00ADB5]
                       text-base md:text-lg"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows={10}
                className="w-full rounded-xl bg-white/5 text-slate-200 placeholder:text-slate-400
                       px-5 py-4 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#00ADB5]
                       text-base md:text-lg"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#00ADB5]/90 hover:bg-teal-700
                     text-white font-semibold px-8 py-4 text-lg transition"
            >
              Send Message
              <FiSend className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
