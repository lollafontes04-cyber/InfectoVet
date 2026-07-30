type Referencia = {
  titulo: string;
  autores: string;
  fonte: string;
  ano: string;
};


type DiseaseReferencesProps = {
  referencias?: Referencia[];
};



export default function DiseaseReferences({

  referencias = [],

}: DiseaseReferencesProps) {



  const referenciasPadrao = [

    {
      titulo:
        "Brucellosis: epidemiology, pathogenesis, diagnosis and treatment–a comprehensive review",

      autores:
        "Qureshi, Kamal A., Adil Parvez, Nada A. Fahmy, Bassant H. Abdel Hady, Shweta Kumar, Anusmita Ganguly, Akhtar Atiya, et al.",

      fonte:
        "Annals of Medicine 55 (2).",

      ano:
        "2023",

  

    },


    {
      titulo:
        "Doenças Infecciosas dos Animais Domésticos",

      autores:
        "Referência acadêmica veterinária",

      fonte:
        "Livro técnico",

      ano:
        "Atualizado",
    },


    {
      titulo:
        "Guidelines e publicações científicas",

      autores:
        "Instituições veterinárias",

      fonte:
        "Bases científicas",

      ano:
        "Atualizado",
    },

  ];



  const listaReferencias =
    referencias.length > 0
      ? referencias
      : referenciasPadrao;




  return (

    <section
      id="referencias"
      className="mx-auto max-w-[1200px] px-10 py-10"
    >


      <div className="rounded-3xl bg-white p-8 shadow-sm">


        <h2 className="text-2xl font-bold text-[#075334]">

          Referências Bibliográficas

        </h2>



        <p className="mt-2 text-gray-600">

          Fontes utilizadas para construção do conteúdo científico.

        </p>




        <div className="mt-8 grid gap-5 md:grid-cols-3">


          {listaReferencias.map((referencia, index) => (

            <article

              key={index}

              className="rounded-2xl border bg-[#F8FBF9] p-6"

            >


              <div className="text-3xl">

                📚

              </div>




              <h3 className="mt-4 font-bold text-[#075334]">

                {referencia.titulo}

              </h3>




              <p className="mt-3 text-sm text-gray-600">

                {referencia.autores}

              </p>




              <p className="mt-2 text-sm text-gray-500">

                {referencia.fonte}

              </p>




              <span className="mt-4 inline-block rounded-full bg-[#E5F3EA] px-3 py-1 text-xs font-semibold text-[#075334]">

                {referencia.ano}

              </span>



            </article>

          ))}



        </div>


      </div>


    </section>

  );

}