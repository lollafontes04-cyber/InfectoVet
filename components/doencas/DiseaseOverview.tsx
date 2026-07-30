type DiseaseOverviewProps = {
  nome: string;
  agente: string;
  hospedeiros: string[];
  zoonose: boolean;
};



export default function DiseaseOverview({

  nome,

  agente,

  hospedeiros,

  zoonose,

}: DiseaseOverviewProps) {



  return (

    <section
      id="visao"
      className="mx-auto grid max-w-[1200px] gap-6 px-10 py-10 lg:grid-cols-3"
    >



      {/* Visão Geral */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">


        <h2 className="text-xl font-bold text-[#075334]">

          Visão Geral

        </h2>



        <p className="mt-4 leading-relaxed text-gray-600">

          {nome} é uma enfermidade de importância veterinária
          causada por <strong>{agente}</strong>.
          Afeta diferentes espécies animais e pode apresentar
          impacto clínico, produtivo e sanitário.

        </p>




        <div className="mt-6 rounded-2xl bg-[#EDF8F0] p-5">


          <h3 className="font-semibold text-[#075334]">

            Como ocorre a infecção?

          </h3>



          <div className="mt-5 flex items-center justify-between text-center text-xs text-gray-600">


            <div>

              🦠

              <p className="mt-2">
                Entrada
              </p>

            </div>



            <span>
              →
            </span>



            <div>

              🩸

              <p className="mt-2">
                Disseminação
              </p>

            </div>



            <span>
              →
            </span>



            <div>

              🐾

              <p className="mt-2">
                Hospedeiro
              </p>

            </div>


          </div>


        </div>


      </div>






      {/* Destaques */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">


        <h2 className="text-xl font-bold text-[#075334]">

          Destaques

        </h2>



        <ul className="mt-5 space-y-4 text-gray-600">


          <li className="flex gap-3">

            <span className="text-green-600">
              ✓
            </span>

            Importância veterinária

          </li>



          <li className="flex gap-3">

            <span className="text-green-600">
              ✓
            </span>

            Pode afetar diferentes espécies

          </li>



          <li className="flex gap-3">

            <span className="text-green-600">
              ✓
            </span>

            Necessita diagnóstico adequado

          </li>



          {zoonose && (

            <li className="flex gap-3">

              <span className="text-red-600">
                ✓
              </span>

              Possui importância zoonótica

            </li>

          )}



        </ul>


      </div>






      {/* Informações rápidas */}

      <div className="rounded-3xl bg-[#FFF8E8] p-8 shadow-sm">


        <h2 className="text-xl font-bold text-[#075334]">

          Informações Rápidas

        </h2>




        <div className="mt-5 space-y-5 text-sm">



          <div>

            <p className="font-semibold text-gray-700">

              Agente etiológico

            </p>


            <p className="mt-1 text-gray-600">

              {agente}

            </p>


          </div>





          <div>

            <p className="font-semibold text-gray-700">

              Hospedeiros

            </p>


            <p className="mt-1 text-gray-600">

              {hospedeiros.join(", ")}

            </p>


          </div>





          <div>

            <p className="font-semibold text-gray-700">

              Transmissão

            </p>


            <p className="mt-1 text-gray-600">

              Contato direto, ambiente ou vetores,
              dependendo da enfermidade.

            </p>


          </div>





          <div>

            <p className="font-semibold text-gray-700">

              Importância

            </p>


            <p className="mt-1 text-gray-600">

              Saúde animal e impacto sanitário.

            </p>


          </div>




        </div>


      </div>




    </section>

  );

}