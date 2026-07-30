"use client";

import { useState } from "react";


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




  return (

    <article
      className="
        rounded-2xl
        border
        bg-[#F8FBF9]
        p-4
        md:p-6
      "
    >


      <h3
        className="
          text-base
          font-bold
          leading-relaxed
          text-[#075334]
          md:text-lg
        "
      >

        {questao.pergunta}

      </h3>





      <div className="mt-5 space-y-3">


        {questao.alternativas.map((alternativa) => {


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

                flex
                w-full
                rounded-xl
                border
                px-4
                py-3
                text-left
                text-sm
                leading-relaxed
                transition


                ${
                  correta

                  ?

                  "border-green-500 bg-green-100 text-green-800"

                  :

                  errada

                  ?

                  "border-red-500 bg-red-100 text-red-800"

                  :

                  selecionada === letra

                  ?

                  "border-[#075334] bg-[#EDF8F0]"

                  :

                  "bg-white"

                }

              `}

            >

              {alternativa}


            </button>

          );


        })}


      </div>





      {!respondido && (

        <button

          onClick={() =>
            setRespondido(true)
          }


          className="
            mt-5
            rounded-xl
            bg-[#075334]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
          "

        >

          Responder

        </button>


      )}






      {respondido && (

        <div
          className="
            mt-5
            rounded-xl
            bg-white
            p-4
            text-sm
          "
        >


          <p className="font-semibold text-[#075334]">

            Resposta correta: {questao.resposta}

          </p>




          <p className="mt-2 text-gray-600">

            {questao.comentario}

          </p>


        </div>


      )}



    </article>


  );

}