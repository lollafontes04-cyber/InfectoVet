"use client";

import { useState } from "react";

import { questoes } from "@/data/questoes";
import QuizCard from "@/components/questoes/QuizCard";

type Questao = {
  id: number;
  pergunta: string;
  alternativas: string[];
  resposta: string;
  comentario: string;
};



type DiseaseQuizProps = {
  doencaId: string;
};



export default function DiseaseQuiz({

  doencaId,

}: DiseaseQuizProps) {



  const listaQuestoes = questoes.filter(

    (questao) =>

      questao.doencaId === doencaId

  );





  return (

<section

id="questoes"

className="mx-auto max-w-[1300px] px-10 pt-2 pb-10"

>


<div
className="
rounded-3xl
bg-white
p-5
md:p-8
shadow-sm
"
>


        <h2 className="text-2xl font-bold text-[#075334]">

          Questões

        </h2>




        <p className="mt-2 text-gray-600">

          Teste seus conhecimentos sobre a enfermidade.

        </p>





        {listaQuestoes.length === 0 ? (

          <p className="mt-6 text-gray-600">

            Ainda não existem questões cadastradas para esta doença.

          </p>

        ) : (


          <div className="mt-8 space-y-6">


            {listaQuestoes.map((questao) => (

              <QuizCard

                key={questao.id}

                questao={questao}

              />

            ))}


          </div>


        )}



      </div>


    </section>

  );

}
