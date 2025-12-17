import Image from "next/image";

interface UseCase {
  title: string;
  description: string;
  color: string;
  image?: string;
}

export default function UseCasesSection() {
  return (
    <section
      className="py-12 md:py-20 lg:py-24 bg-white"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px]">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            id="use-cases-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Un outil, mille usages
          </h2>
        </div>

        {/* Grille de cas d'usage personnalisée */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {/* Header jaune - span plein width */}
          <article className="md:col-span-12 bg-[var(--color-yellow)] border-[6px] border-black p-8 lg:p-12 min-h-[180px] flex flex-col justify-center">
            <h3
              className="text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Inspiration et veille créative
            </h3>
            <p className="text-lg lg:text-xl text-gray-900">
              Centralisez vos ressources et inspis au même endroit.
            </p>
          </article>

          {/* Carte appart avec image */}
          <article className="md:col-span-4 bg-white border-[6px] border-black overflow-hidden min-h-[400px] flex flex-col">
            <Image
              className="w-full p-4"
              src={"/batiment.png"}
              width={302}
              height={248}
              alt=""
            />
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-end">
              <h3
                className="text-2xl lg:text-3xl font-black mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Chercher un
                <br />
                appart à plusieurs
              </h3>
              <p className="text-base lg:text-lg text-gray-900 leading-relaxed">
                Rassemblez toutes vos annonces
                <br />
                et comparez-les facilement.
              </p>
            </div>
          </article>

          {/* Colonne du milieu avec 2 cartes empilées */}
          <div className="md:col-span-4 grid grid-rows-2 gap-5 lg:gap-6">
            {/* Carte rose cadeaux */}
            <article className="bg-[#FF506F] border-[6px] border-black p-6 lg:p-8 min-h-[197px] flex flex-col justify-end">
              <h3
                className="text-2xl lg:text-3xl font-black mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Préparer une
                <br />
                liste de cadeaux
              </h3>
              <p className="text-base lg:text-lg leading-relaxed">
                Chaque proche peut ajouter
                <br />
                ses idées.
              </p>
            </article>

            {/* Carte bleue études */}
            <article className="bg-[#202AED] border-[6px] border-black p-6 lg:p-8 min-h-[197px] flex flex-col justify-end">
              <h3
                className="text-2xl lg:text-3xl font-black mb-3 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Étudier plus
                <br />
                facilement
              </h3>
              <p className="text-base lg:text-lg text-white leading-relaxed">
                Cours, docs et vidéos
                <br />
                rassemblés en un seul dossier
              </p>
            </article>
          </div>

          {/* Carte voyage avec image */}
          <article className="md:col-span-4 bg-white border-[6px] border-black overflow-hidden min-h-[400px] flex flex-col">
            <Image
              className="w-full p-4"
              src={"/avion-batiment.png"}
              width={302}
              height={248}
              alt=""
            />
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-end">
              <h3
                className="text-2xl lg:text-3xl font-black mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Organiser un
                <br />
                voyage entre amis
              </h3>
              <p className="text-base lg:text-lg text-gray-900 leading-relaxed">
                Regroupez billets, hôtels et
                <br />
                activités dans un seul tableau.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
