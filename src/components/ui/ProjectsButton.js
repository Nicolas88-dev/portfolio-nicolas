"use client";

export default function ProjectsButton({ setActiveSection }) {
  return (
    <button
      onClick={() => setActiveSection("portfolio")}
      className="absolute bottom-8 right-8 hidden items-center justify-center md:flex"
    >
      <div className="relative h-40 w-40">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full animate-spin-slow"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -75,0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0
              "
            />
          </defs>

          <text
            fontSize="24"
            fill="#444"
            letterSpacing="3"
          >
            <textPath href="#circlePath">
              • MES PROJETS • MES PROJETS
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          ↓
        </div>
      </div>
    </button>
  );
}