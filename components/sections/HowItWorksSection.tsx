import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="relative px-4 sm:px-6 lg:px-[120px] pt-12 pb-40 md:pb-64 md:pt-20 lg:pt-24 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <Image
        className="absolute w-[730px] h-[1100px] top-0 left-1/2 transform -translate-x-1/4 -translate-y-1/4  pointer-events-none select-none hidden md:block"
        src={"/working/line.svg"}
        width={730}
        height={1100}
        alt="Illustration of a big line"
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu texte */}
          <div className="max-w-xl">
            <h2
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 lg:mb-10 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Comment ça marche ?
            </h2>
            <div className="space-y-5 text-base sm:text-lg lg:text-xl text-gray-800">
              <p className="leading-relaxed">
                Vous découvrez une image, un site. Un clic, et c&apos;est dans
                votre espace. Chaque trouvaille s&apos;affiche comme une carte
                visuelle, classée par thème ou projet.
              </p>
              <p className="leading-relaxed">
                Vous retrouvez tout facilement, seul ou à plusieurs. Unblank
                devient votre mémoire visuelle du web.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              {/* Étoile décorative */}
              <Image
                src="/working/star.svg"
                alt=""
                width={400}
                height={400}
                className="absolute w-40 h-40 lg:w-[400px] lg:h-[400px] -top-16 -right-16 lg:-top-48 lg:-right-32 "
                aria-hidden="true"
              />

              {/* Illustration principale */}
              <Image
                src="/working/how-it-work.svg"
                alt="Interface UnBlank montrant le formulaire de création de bulletin avec les champs nom d'équipe et résultat"
                width={500}
                height={450}
                className="w-full h-auto relative"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
