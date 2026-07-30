type CategoryHeaderProps = {
  categoria: string;
};


const categoriasInfo: Record<
  string,
  {
    nome: string;
    emoji: string;
    descricao: string;
  }
> = {

  Bacterianas: {
    nome: "Bacterianas",
    emoji: "🧫",
    descricao:
      "Enfermidades causadas por bactérias que podem afetar diferentes espécies animais, com importância clínica e epidemiológica.",
  },


  Virais: {
    nome: "Virais",
    emoji: "🦠",
    descricao:
      "Doenças causadas por vírus que acometem animais domésticos e de produção.",
  },


  Fúngicas: {
    nome: "Fúngicas",
    emoji: "🍄",
    descricao:
      "Infecções causadas por fungos que podem afetar diferentes espécies animais.",
  },


  Protozooses: {
    nome: "Protozooses",
    emoji: "🔬",
    descricao:
      "Doenças causadas por protozoários, organismos microscópicos com importância veterinária.",
  },


  Helmintoses: {
    nome: "Helmintoses",
    emoji: "🪱",
    descricao:
      "Infecções causadas por helmintos, incluindo parasitas internos que acometem animais.",
  },


  Ectoparasitoses: {
    nome: "Ectoparasitoses",
    emoji: "🕷️",
    descricao:
      "Doenças relacionadas a parasitas externos e vetores que podem transmitir enfermidades aos animais.",
  },


  Prionicas: {
    nome: "Doenças Priônicas",
    emoji: "🧬",
    descricao:
      "Enfermidades associadas a alterações proteicas capazes de causar doenças neurológicas progressivas.",
  },

};



export default function CategoryHeader({
  categoria,
}: CategoryHeaderProps) {


  const info = categoriasInfo[categoria] || {
    nome: categoria,
    emoji: "🔬",
    descricao:
      "Consulte informações sobre doenças infecciosas e parasitárias animais.",
  };



  return (

    <section className="bg-[#EDF8F0] px-10 py-14">

      <div className="mx-auto max-w-[1200px]">


        <div className="flex items-center gap-5">


          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-5xl shadow-sm">
            {info.emoji}
          </div>



          <div>


            <h1 className="text-4xl font-bold text-[#075334]">
              {info.nome}
            </h1>



            <p className="mt-3 max-w-[700px] text-gray-600">
              {info.descricao}
            </p>



          </div>


        </div>


      </div>


    </section>

  );

}