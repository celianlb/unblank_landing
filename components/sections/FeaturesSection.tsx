import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      title: "Capture tout le web",
      description:
        "Importez des liens, images ou ressources depuis n'importe quel site. Un seul outil pour centraliser toutes vos découvertes, peu importe leur source.",
      image: "/function/function1.svg",
    },
    {
      title: "Tags automatiques",
      description:
        "Chaque lien que vous ajoutez est automatiquement analysé et taggé. Vous gagnez du temps, tout est identifié sans effort.",
      image: "/function/function2.svg",
      tags: ["#IA", "#image", "#soleil"],
    },
    {
      title: "Partage ultra-simple",
      description:
        "Créez un dossier et partagez-le avec qui vous voulez. Que ce soit un collègue, un ami ou toute une équipe, tout le monde accède à vos trouvailles sans créer de compte.",
      image: "/function/function3.svg",
    },
  ];

  return (
    <section
      id="fonctionnalites"
      className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[120px] bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-5 lg:mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fonctionnalités
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Récupérez tout le meilleur du web et partagez-le à qui vous voulez.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <article key={index} className="flex flex-col border-none!">
              {/* Image */}
              <div className="relative mb-5 overflow-hidden  ">
                <Image
                  src={feature.image}
                  alt={`Illustration de la fonctionnalité : ${feature.title}`}
                  width={500}
                  height={380}
                  className="w-full h-auto"
                />
              </div>

              {/* Contenu */}
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
