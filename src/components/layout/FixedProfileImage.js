"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function FixedProfileImage({ setActiveSection }) {
  const jobs = ["Freelancer", "Developer", "Designer"];
  const [currentJob, setCurrentJob] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJob((prev) => (prev + 1) % jobs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-20 h-[560px] w-[330px] lg:rounded-tl-[15rem] rounded-[2rem] border-2 border-white/80 p-4 md:h-[680px] md:w-[420px] lg:h-[860px] lg:w-[540px]">
      <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[15rem] rounded-[2rem] shadow-2xl">
        <Image
          src="/images/Nicolas-L.webp"
          alt="Portrait de Nicolas Lestrez"
          fill
          sizes="(min-width: 1024px) 540px, (min-width: 768px) 420px, 330px"
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 bg-[#1f2937]/85 p-6 text-center text-white backdrop-blur-md">
          <h2 className="text-3xl font-bold md:text-4xl">Nicolas Lestrez</h2>

          <p className="mt-2 text-base uppercase tracking-widest md:text-lg">
            {jobs[currentJob]}
          </p>

          <button
            onClick={() => setActiveSection("contact")}
            className="mt-6 w-full rounded-xl bg-emerald-400 py-4 font-bold text-black"
          >
            @ Contactez-moi
          </button>
          <div className="flex flex-row gap-3 justify-center mt-3">
            <a
              href="https://www.facebook.com/nicolas.lestrez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook
                size={30}
                className="text-[#55E6A5] hover:scale-110 hover:text-white transition-all duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-lestrez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-[#55E6A5] hover:scale-110 hover:text-white transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
