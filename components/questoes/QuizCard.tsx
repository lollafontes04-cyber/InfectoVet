"use client";

import { useEffect, useState } from "react";


type Questao = {
  id: number;
  pergunta: string;
  alternativas: string[];
  resposta: string;
  comentario: string;
};


type QuizCardProps = {
  questao: Questao;
};



export default function QuizCard({

  questao,

}: QuizCardProps) {


  const [selecionada, setSelecionada] =
    useState<string | null>(null);


  const [respondido, setRespondido] =
    useState(false);



  useEffect(() => {

    setSelecionada(null);
    setRespondido(false);

  }, [questao.id]);





  return (

    <article

      className="
        rounded-xl
        border
        border-gray-200
        bg-white
        p-3
        md:p-5
      "

    >



      <h3

        className="
          text-sm
          font-semibold
          leading-relaxed
          text-gray-800
          md:text-base
        "

      >

        {questao.pergunta}

      </h3>





      <div

        className="
          mt-4
          space-y-2
        "

      >


        {
          questao.alternativas.map((alternativa) => {


            const letra =
              alternativa.charAt(0);



            const correta =
              respondido &&
              letra === questao.resposta;



            const errada =
              respondido &&
              selecionada === letra &&
              letra !== questao.resposta;




            return (

              <button


                key={alternativa}


                disabled={respondido}


                onClick={() =>
                  setSelecionada(letra)
                }


                className={`

                  w-full
                  rounded-lg
                  border
                  px-3
                  py-2
                  text-left
                  text-xs
                  leading-normal
                  transition
                  md:text-sm


                  ${
                    correta

                    ?

                    "border-green-500 bg-green-50 text-green-700 font-semibold"

                    :

                    errada

                    ?

                    "border-red-500 bg-red-50 text-red-700 font-semibold"

                    :

                    selecionada === letra

                    ?

                    "border-[#075334] bg-[#E8F5EE] text-[#075334]"

                    :

                    "border-gray-200 bg-white"

                  }

                `}

              >

                {alternativa}


              </button>

            );


          })

        }



      </div>






      {
        !respondido && (

          <button


            disabled={!selecionada}


            onClick={() =>
              setRespondido(true)
            }


            className="
              mt-4
              rounded-lg
              bg-[#075334]
              px-5
              py-2
              text-xs
              font-semibold
              text-white
              disabled:opacity-40
            "

          >

            Responder

          </button>

        )

      }







      {
        respondido && (


          <div

            className="
              mt-4
              rounded-lg
              bg-[#F8FBF9]
              p-3
              text-xs
            "

          >


            <p

              className="
                font-semibold
                text-[#075334]
              "

            >

              Resposta correta: {questao.resposta}

            </p>




            <p

              className="
                mt-2
                leading-relaxed
                text-gray-600
              "

            >

              {questao.comentario}

            </p>



          </div>


        )

      }



    </article>

  );

}