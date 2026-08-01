"use client";

import { useState } from "react";

import { questoes } from "@/data/questoes";
import QuizCard from "@/components/questoes/QuizCard";


type DiseaseQuizProps = {
  doencaId: string;
};



export default function DiseaseQuiz({

  doencaId,

}: DiseaseQuizProps) {



  const [questaoAtual, setQuestaoAtual] = useState(0);



  const listaQuestoes = questoes.filter(

    (questao) =>

      questao.doencaId === doencaId

  );



  const questao = listaQuestoes[questaoAtual];





  return (


<section

id="questoes"

className="mx-auto max-w-[1300px] px-5 md:px-10 pt-2 pb-10"

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





{
listaQuestoes.length === 0 ? (


<p className="mt-6 text-gray-600">

Ainda não existem questões cadastradas para esta doença.

</p>



) : (



<div className="mt-8">



<div

className="
mb-5
flex
items-center
justify-between
gap-3
"

>



<button

disabled={questaoAtual === 0}

onClick={() =>

setQuestaoAtual((atual) => atual - 1)

}

className="
rounded-lg
bg-gray-100
px-4
py-2
text-sm
font-semibold
text-gray-700
disabled:opacity-40
"

>

← Anterior

</button>





<span

className="
text-sm
font-semibold
text-gray-500
text-center
"

>

Questão {questaoAtual + 1} de {listaQuestoes.length}

</span>





<button


disabled={
questaoAtual === listaQuestoes.length - 1
}


onClick={() =>

setQuestaoAtual((atual) => atual + 1)

}


className="
rounded-lg
bg-[#075334]
px-4
py-2
text-sm
font-semibold
text-white
disabled:opacity-40
"

>

Próxima →

</button>



</div>





<QuizCard

key={questao.id}

questao={questao}

/>



</div>



)

}



</div>



</section>


  );

}