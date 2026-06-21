import Image from "next/image";

export default function PortfolioModal({ project, onClose }) {
  // Si aucun projet n'a été sélectionné,
  // on n'affiche rien.
  if (!project) return null;

  return (
    // ====================================
    // FOND NOIR DU MODAL
    // ====================================
    // Couvre toute la fenêtre.
    // Un clic dessus ferme le modal.
    <div
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/80 px-6 py-10"
      onClick={onClose}
    >
      {/* ====================================
          CONTENU DU MODAL
          ====================================
          Fenêtre blanche centrée contenant
          toutes les informations du projet.
      */}
      <div
        className="relative mx-auto max-w-5xl rounded-3xl bg-white p-6 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ====================================
            BOUTON FERMER
            ====================================
            Ferme le modal lorsqu'on clique dessus.
        */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-5 top-5 z-[1000]
            flex h-14 w-14 min-h-14 min-w-14
            items-center justify-center
            rounded-full bg-[#55E6A5]/30
            text-4xl leading-none text-black/60
            cursor-pointer transition-all
            hover:bg-[#55E6A5] hover:text-black
          "
        >
          <span className="pointer-events-none -mt-1">×</span>
        </button>

        {/* ====================================
            IMAGE PRINCIPALE DU PROJET
            ====================================
            Grande image affichée en haut.
        */}
        <div className="relative mb-8  overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="h-auto w-full"
          />
        </div>

        {/* ====================================
            INFORMATIONS PRINCIPALES
            ====================================
            Catégorie
            Titre
            Description
        */}
        <p className="text-sm font-bold uppercase text-black/50">
          {project.category}
        </p>

        <h3 className="mt-2 text-4xl font-bold">{project.title}</h3>

        <p className="mt-4 text-lg text-black/70">{project.description}</p>

        {/* ====================================
            SECTIONS DETAILLEES
            ====================================
            Chaque section provient du tableau
            project.details du portfolioData.js
        */}
        {project.details && (
          <div className="mt-12 space-y-12">
            {/* ====================================
                BOUCLE SUR LES DETAILS
                ====================================
                Création automatique d'un bloc
                pour chaque élément du tableau
                project.details
            */}
            {project.details.map((section, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <div key={index} className="grid gap-6 md:grid-cols-2">
                  <div className={isReverse ? "md:order-2" : "md:order-1"}>
                    <h4 className="text-2xl font-bold">{section.title}</h4>

                    <p className="mt-4 text-black/70">{section.text}</p>
                  </div>

                  <div
                    className={
                      isReverse
                        ? "overflow-hidden rounded-2xl md:order-1"
                        : "overflow-hidden rounded-2xl md:order-2"
                    }
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={1200}
                      height={675}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
