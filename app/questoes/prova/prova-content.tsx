"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import { questoes } from "@/data/questoes";


type Props = {
  categorias: string[];
  doencas: string[];
  quantidade: number;
};

export default function ProvaContent({
  categorias,
  doencas,
  quantidade
}: Props) {
  
  const [prova, setProva] =
    useState<typeof questoes>([]);


  const [questaoAtual, setQuestaoAtual] =
    useState(0);


  const [alternativaSelecionada, setAlternativaSelecionada] =
    useState("");


  const [respondeu, setRespondeu] =
    useState(false);


  const [mostrarComentario, setMostrarComentario] =
    useState(false);


  const [respostas, setRespostas] =
    useState<Record<number, string>>({});


  const [finalizou, setFinalizou] =
    useState(false);




 useEffect(() => {

console.log("CATEGORIAS RECEBIDAS:", categorias);
console.log("DOENÇAS RECEBIDAS:", doencas);
console.log("QUANTIDADE:", quantidade);

const filtradas = questoes.filter((questao) => {
      
const categoriaOk =
        categorias.length === 0 ||
        categorias.includes(questao.categoria);



      const doencaOk =
  doencas.length === 0 ||
  doencas.includes(questao.doenca) ||
  doencas.includes(questao.doencaId);



      return categoriaOk && doencaOk;


    });


console.log("Questões filtradas:", filtradas.length);
console.log(
  questoes.map(q => ({
    doenca: q.doenca,
    id: q.doencaId
  }))
);

    const novaProva =

      [...filtradas]

        .sort(() => Math.random() - 0.5)

        .slice(0, quantidade);



    setProva(novaProva);


}, [quantidade, categorias.join(","), doencas.join(",")]);






  const questao = prova[questaoAtual];

  function formatarPergunta(texto: string) {
  return texto
    .replace(/\s(I\.|II\.|III\.|IV\.|V\.)/g, "\n\n$1");
}






  function confirmarResposta() {


    if (!alternativaSelecionada) return;



    setRespostas((anterior) => ({

      ...anterior,

      [questao.id]: alternativaSelecionada

    }));



    setRespondeu(true);


  }






  function proximaQuestao() {


    if (questaoAtual === prova.length - 1) {


      setFinalizou(true);


      return;


    }



    setQuestaoAtual((atual) => atual + 1);



    setAlternativaSelecionada("");



    setRespondeu(false);



    setMostrarComentario(false);


  }
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
        style={{
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >


        <section
          className="
            mx-auto
            max-w-[850px]
          "
        >



          {finalizou ? (

            <div
              className="
                rounded-lg
                bg-white
                p-8
                text-center
              "
            >

              <h1
                className="
                  text-2xl
                  font-bold
                  text-[#075334]
                "
              >

                Prova finalizada!

              </h1>



              <p
                className="
                  mt-3
                  text-gray-600
                "
              >

                Você respondeu todas as questões.

              </p>




              <button

                onClick={() => {

                  localStorage.setItem(
                    "resultadoProva",
                    JSON.stringify({
                      prova,
                      respostas
                    })
                  );


                  window.location.href =
                    "/questoes/resultado";

                }}


                className="
                  mt-6
                  rounded-md
                  bg-[#075334]
                  px-6
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "

              >

                Ver resultado →

              </button>



            </div>



          ) : !questao ? (


            <p className="text-gray-600">

              Carregando questões...

            </p>



          ) : (


            <>



              <div
                className="
                  mb-4
                  flex
                  items-start
                  justify-between
                "
              >


                <div>


                  <h1
                    className="
                      text-lg
                      font-bold
                      text-[#075334]
                    "
                  >

                    Prova InfectoVet

                  </h1>



                  <p
                    className="
                      text-xs
                      text-gray-500
                    "
                  >

                    Questão {questaoAtual + 1} de {prova.length}

                  </p>



                </div>





                {respondeu && (


                  <button

                    onClick={proximaQuestao}


                    className="
                      rounded-md
                      bg-[#075334]
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                    "

                  >

                    {questaoAtual === prova.length - 1
                      ? "Finalizar prova"
                      : "Próxima questão →"
                    }


                  </button>


                )}



              </div>






              <div
                className="
                  rounded-lg
                  bg-white
                  p-4
                "
              >



                <p
                  className="
                    mb-2
                    text-xs
                    font-bold
                    text-[#075334]
                  "
                >

                  {questao.doenca}

                </p>





                <h2
  className="
    text-base
    font-semibold
    leading-snug
    text-gray-800
    whitespace-pre-line
  "
>
  {formatarPergunta(questao.pergunta)}
</h2>




                <div
                  className="
                    mt-4
                    space-y-2
                  "
                >



                  {questao.alternativas.map((alternativa) => {


                    const letra =
                      alternativa.charAt(0);



                    const correta =
                      letra === questao.resposta;



                    const selecionada =
                      alternativaSelecionada === letra;




                    return (

                      <button


                        key={alternativa}


                        disabled={respondeu}


                        onClick={() =>
                          setAlternativaSelecionada(letra)
                        }


                        className={`

                          w-full
                          rounded-md
                          border
                          px-4
                          py-2
                          text-left
                          text-sm


                          ${
                            !respondeu &&
                            selecionada

                            ? "border-[#075334] bg-[#E8F5EE] text-[#075334] font-semibold"

                            : ""

                          }



                          ${
                            !respondeu &&
                            !selecionada

                            ? "border-gray-200 bg-white hover:border-[#075334]"

                            : ""

                          }



                          ${
                            respondeu &&
                            correta

                            ? "border-green-500 bg-green-50 text-green-700 font-semibold"

                            : ""

                          }



                          ${
                            respondeu &&
                            selecionada &&
                            !correta

                            ? "border-red-500 bg-red-50 text-red-700 font-semibold"

                            : ""

                          }

                        `}

                      >

                        {alternativa}

                      </button>

                    );


                  })}


                </div>
                                {!respondeu && (

                  <button

                    onClick={confirmarResposta}

                    className="
                      mt-4
                      rounded-md
                      bg-[#075334]
                      px-8
                      py-2
                      text-sm
                      font-semibold
                      text-white
                    "

                  >

                    Responder

                  </button>

                )}






                {respondeu && (

                  <div
                    className="
                      mt-4
                      border-t
                      border-gray-200
                      pt-3
                    "
                  >


                    <h3
                      className="
                        text-sm
                        font-bold
                        text-[#075334]
                      "
                    >

                      Gabarito comentado

                    </h3>




                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-700
                      "
                    >

                      <strong>
                        Resposta correta:
                      </strong>{" "}

                      {questao.resposta}

                    </p>





                    <button

                      onClick={() =>
                        setMostrarComentario(
                          !mostrarComentario
                        )
                      }

                      className="
                        mt-2
                        text-xs
                        font-semibold
                        text-[#075334]
                      "

                    >

                      {mostrarComentario
                        ? "Ocultar comentário"
                        : "Ver comentário"
                      }

                    </button>







                    {mostrarComentario && (

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-gray-600
                        "
                      >

                        {questao.comentario}

                      </p>

                    )}



                  </div>

                )}




              </div>


            </>


          )}



        </section>


      </main>


    </>

  );


}