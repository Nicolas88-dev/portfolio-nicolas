import Image from "next/image";

export default function PortfolioCard({ project, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="group overflow-hidden rounded-3xl bg-white text-left shadow-lg"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) calc(50vw - 2rem), calc(100vw - 2rem)"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold uppercase text-black/50">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-black">{project.title}</h3>
      </div>
    </button>
  );
}
