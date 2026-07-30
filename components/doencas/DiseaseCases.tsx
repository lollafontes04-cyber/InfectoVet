"use client";

import { useState } from "react";


type CasoClinico = {

  id: string;

  titulo: string;

  especie: string;

  idade?: string;

  historico: string;

  sinais: string[];

  exames?: string;

  diagnostico: string;

  discussao: string;

};



type DiseaseCasesProps = {

  casos?: CasoClinico[];

};





export default function DiseaseCases({

  casos = [],

}: DiseaseCasesProps) {



  const [casoAberto, setCasoAberto] =
    useState<number | null>(null);





  const casosPadrao = [

    {
      id: "caso-01",

      titulo: "Caso Clínico 01",

      especie: "Espécie não cadastrada",

      idade: "Não informada",

      historico:
        "Histórico clínico não cadastrado.",

      sinais: [
        "Sinais clínicos não cadastrados."
      ],

      exames:
        "Exames não cadastrados.",

      diagnostico:
        "Diagnóstico não cadastrado.",

      discussao:
        "Discussão do caso em desenvolvimento.",

    },

    {
      id: "caso-02",

      titulo: "Caso Clínico 02",

      especie: "Espécie não cadastrada",

      idade: "Não informada",

      historico:
        "Histórico clínico não cadastrado.",

      sinais: [
        "Sinais clínicos não cadastrados."
      ],

      exames:
        "Exames não cadastrados.",

      diagnostico:
        "Diagnóstico não cadastrado.",

      discussao:
        "Discussão do caso em desenvolvimento.",

    },


    {
      id: "caso-03",

      titulo: "Caso Clínico 03",

      especie: "Espécie não cadastrada",

      idade: "Não informada",

      historico:
        "Histórico clínico não cadastrado.",

      sinais: [
        "Sinais clínicos não cadastrados."
      ],

      exames:
        "Exames não cadastrados.",

      diagnostico:
        "Diagnóstico não cadastrado.",

      discussao:
        "Discussão do caso em desenvolvimento.",

    },

  ];





  const listaCasos =
    casos.length > 0
      ? casos
      : casosPadrao;





  return (

<section
  id="casos"
  className="
    mx-auto
    max-w-[1000px]
    px-4
    pt-0
    pb-8
    md:px-6
    md:pb-10
  "
>



      <div

        className="
          rounded-3xl
          bg-white
          p-5
          shadow-sm
          md:p-8
        "

      >





        <div className="mb-5">


          <h2

            className="
              text-2xl
              font-bold
              text-[#075334]
            "

          >

            Casos Clínicos

          </h2>



          <p

            className="
              mt-2
              text-gray-600
            "

          >

            Analise casos reais ou simulados para aplicar
            o conhecimento sobre a enfermidade.

          </p>


        </div>






        <div

          className="
            grid
            gap-5
            md:grid-cols-3
          "

        >




          {listaCasos.map((caso,index)=>(


            <article


              key={index}


              className="
                rounded-2xl
                border
                border-gray-100
                bg-[#F8FBF9]
                p-4
                md:p-6
              "


            >




              <span className="text-2xl">

                📋

              </span>






              <h3

                className="
                  mt-3
                  text-base
                  font-bold
                  leading-tight
                  text-[#075334]
                  md:text-lg
                "

              >

                {caso.titulo}

              </h3>





              <p

                className="
                  mt-2
                  text-sm
                  font-semibold
                  text-gray-700
                "

              >

                🐾 {caso.especie}

              </p>







              {casoAberto === index && (


                <div

                  className="
                    mt-4
                    space-y-4
                    rounded-xl
                    bg-white
                    p-4
                    text-sm
                    text-gray-600
                  "

                >



                  {caso.idade && (

                    <div>

                      <h4 className="font-bold text-[#075334]">

                        🎂 Idade

                      </h4>

                      <p className="mt-1">

                        {caso.idade}

                      </p>

                    </div>

                  )}






                  <div>

                    <h4 className="font-bold text-[#075334]">

                      📌 Histórico

                    </h4>


                    <p className="mt-1">

                      {caso.historico}

                    </p>


                  </div>







                  <div>

                    <h4 className="font-bold text-[#075334]">

                      ⚠️ Sinais clínicos

                    </h4>


                    <ul className="mt-1 list-disc pl-5">


                      {caso.sinais.map((sinal,i)=>(

                        <li key={i}>

                          {sinal}

                        </li>

                      ))}


                    </ul>


                  </div>







                  {caso.exames && (

                    <div>

                      <h4 className="font-bold text-[#075334]">

                        🔬 Exames

                      </h4>


                      <p className="mt-1">

                        {caso.exames}

                      </p>


                    </div>

                  )}








                  <div>

                    <h4 className="font-bold text-[#075334]">

                      ✅ Diagnóstico

                    </h4>


                    <p className="mt-1">

                      {caso.diagnostico}

                    </p>


                  </div>








                  <div>

                    <h4 className="font-bold text-[#075334]">

                      💡 Discussão

                    </h4>


                    <p className="mt-1">

                      {caso.discussao}

                    </p>


                  </div>



                </div>


              )}









              <button


                onClick={() =>
                  setCasoAberto(
                    casoAberto === index
                      ? null
                      : index
                  )
                }



                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-[#075334]
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#06442C]
                "


              >


                {casoAberto === index
                  ? "Fechar caso"
                  : "Ver caso completo"
                }


              </button>




            </article>



          ))}



        </div>



      </div>



    </section>

  );

}