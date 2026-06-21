export default function TestimonialsSection() {
  return (
    <section>
      <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-bold uppercase">
        Services
      </span>

      <h1 className="mt-8 text-3xl md:text-5xl font-bold text-black">Services</h1>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-black">Création de site</h2>
          <p className="mt-2 text-black/70">
            Sites vitrines modernes, rapides et responsives.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black">Design web</h2>
          <p className="mt-2 text-black/70">
            Interfaces élégantes, claires et adaptées aux utilisateurs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black">Animations</h2>
          <p className="mt-2 text-black/70">
            Effets modernes avec CSS, Tailwind et Framer Motio.
          </p>
        </div>
      </div>
    </section>
  )
}