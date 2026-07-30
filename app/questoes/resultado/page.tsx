"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";


export default function ResultadoPage() {


  const [dados, setDados] = useState<any>(null);



  useEffect(() => {

    const resultado =
      localStorage.getItem("resultadoProva");


    if (resultado) {

      setDados(JSON.parse(resultado));

    }


  }, []);





  if (!dados) {

    return (

      <>

        <Navbar />

        <main
          className="
            min-h-screen
            bg-[#F8FBF9]
            px-5
            py-5
          "
        >

          <section
            className="
              mx-auto
              max-w-[850px]
              rounded-lg
              bg-white
              p-6
            "
          >

            <p className="text-gray-600">
              Nenhum resultado encontrado.
            </p>

          </section>


        </main>


      </>

    );

  }






  const { prova, respostas } = dados;





  const acertos =
    prova.filter((questao: any) => {

      return (
        respostas[questao.id] === questao.resposta
      );

    }).length;




  const total =
    prova.length;



  const erros =
    total - acertos;



  const porcentagem =
    Math.round(
      (acertos / total) * 100
    );






  return (

    <>

      <Navbar />


      <main
        className="
          min-h-screen
          bg-[#F8FBF9]
          px-5
          py-5
        "
      >


        <section
          className="
            mx-auto
            max-w-[850px]
          "
        >



          <div
            className="
              rounded-lg
              bg-white
              p-6
            "
          >



            <h1
              className="
                text-2xl
                font-bold
                text-[#075334]
              "
            >

              Resultado da Prova

            </h1>





            <div
              className="
                mt-6
                grid
                grid-cols-3
                gap-3
              "
            >



              <div
                className="
                  rounded-lg
                  bg-green-50
                  p-4
                  text-center
                "
              >

                <p className="text-sm">
                  Acertos
                </p>


                <strong
                  className="
                    text-2xl
                    text-green-700
                  "
                >

                  {acertos}

                </strong>


              </div>






              <div
                className="
                  rounded-lg
                  bg-red-50
                  p-4
                  text-center
                "
              >

                <p className="text-sm">
                  Erros
                </p>


                <strong
                  className="
                    text-2xl
                    text-red-700
                  "
                >

                  {erros}

                </strong>


              </div>






              <div
                className="
                  rounded-lg
                  bg-gray-100
                  p-4
                  text-center
                "
              >

                <p className="text-sm">
                  Aproveitamento
                </p>


                <strong
                  className="
                    text-2xl
                  "
                >

                  {porcentagem}%

                </strong>


              </div>



            </div>






            <h2
              className="
                mt-8
                text-lg
                font-bold
                text-[#075334]
              "
            >

              Revisão das questões

            </h2>






            <div
              className="
                mt-4
                space-y-3
              "
            >



              {prova.map((questao: any) => {


                const acertou =
                  respostas[questao.id] === questao.resposta;



                if (acertou) return null;





                return (

                  <div
                    key={questao.id}
                    className="
                      rounded-lg
                      border
                      border-red-200
                      bg-red-50
                      p-4
                    "
                  >


                    <p
                      className="
                        font-semibold
                        text-gray-800
                      "
                    >

                      {questao.doenca}

                    </p>




                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-700
                      "
                    >

                      Sua resposta:
                      {" "}
                      <strong>
                        {respostas[questao.id]}
                      </strong>

                    </p>




                    <p
                      className="
                        text-sm
                        text-gray-700
                      "
                    >

                      Resposta correta:
                      {" "}
                      <strong>
                        {questao.resposta}
                      </strong>

                    </p>





                    <p
                      className="
                        mt-3
                        text-sm
                        text-gray-600
                      "
                    >

                      {questao.comentario}

                    </p>



                  </div>

                );


              })}



              {erros === 0 && (

                <div
                  className="
                    rounded-lg
                    bg-green-50
                    p-4
                    text-center
                    text-green-700
                  "
                >

                  Parabéns! Você acertou todas as questões.

                </div>

              )}



            </div>




            <button

              onClick={() =>
                window.location.href =
                  "/questoes"
              }

              className="
                mt-8
                rounded-md
                bg-[#075334]
                px-6
                py-2
                text-sm
                font-semibold
                text-white
              "

            >

              Voltar para questões

            </button>




          </div>


        </section>


      </main>


    </>

  );

}