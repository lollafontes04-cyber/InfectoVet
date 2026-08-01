"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";





const etapasImunizacao = [

  {
    emoji:"🦠",
    titulo:"Apresentação do antígeno",
    texto:
    "A vacina apresenta componentes capazes de estimular o sistema imunológico sem causar a doença.",
    cor:"bg-green-50"
  },


  {
    emoji:"🔎",
    titulo:"Reconhecimento imunológico",
    texto:
    "As células de defesa identificam o antígeno e iniciam a ativação da resposta imunológica.",
    cor:"bg-purple-50"
  },


  {
    emoji:"⚔️",
    titulo:"Ativação da resposta imune",
    texto:
    "O organismo ativa células de defesa e inicia a produção de anticorpos específicos.",
    cor:"bg-yellow-50"
  },


  {
    emoji:"🧠",
    titulo:"Memória imunológica",
    texto:
    "Células de memória permanecem preparadas para responder rapidamente em exposições futuras.",
    cor:"bg-blue-50"
  },


  {
    emoji:"🛡️",
    titulo:"Proteção",
    texto:
    "Em um novo contato com o agente, o organismo apresenta uma resposta mais rápida e eficiente.",
    cor:"bg-emerald-50"
  }

];








type Imunizacao = {

emoji:string;

titulo:string;

resumo:string;

conteudo:string;

extra?: {

titulo:string;

texto:string;

}[];

};





const imunizacoes: Imunizacao[] = [


{

emoji:"💉",

titulo:"Imunização ativa",

resumo:
"O próprio organismo é estimulado a produzir anticorpos e memória imunológica.",


conteudo:
"A imunização ativa ocorre quando o sistema imunológico é estimulado por antígenos presentes em vacinas ou outros estímulos imunológicos. O organismo produz seus próprios anticorpos e células de memória, proporcionando proteção mais duradoura.",


extra:[

{
titulo:"🧬 Formação da memória imunológica",

texto:
"A ativação das células de defesa permite a formação de células de memória, capazes de responder rapidamente em futuras exposições."
},


{
titulo:"⏳ Desenvolvimento da proteção",

texto:
"A resposta ativa necessita de tempo para ser estabelecida, pois depende da ativação e multiplicação das células imunológicas."
}

]

},




{

emoji:"🩸",

titulo:"Imunização passiva",

resumo:
"O indivíduo recebe anticorpos prontos, proporcionando proteção rápida e temporária.",


conteudo:
"A imunização passiva ocorre pela transferência de anticorpos já produzidos, como ocorre pela imunidade materna adquirida pelo colostro ou pela administração de soros.",


extra:[

{
titulo:"🍼 Transferência de imunidade materna",

texto:
"Em animais neonatos, os anticorpos maternos adquiridos principalmente pelo colostro fornecem proteção inicial contra agentes infecciosos."
},


{
titulo:"⏳ Janela de suscetibilidade (janela imunológica)",

texto:
"É o período em que os anticorpos maternos diminuem progressivamente, reduzindo a proteção do animal. Porém, esses anticorpos ainda podem interferir na resposta vacinal, sendo importante para definir o protocolo de imunização."
},


{
titulo:"💉 Importância da vacinação",

texto:
"Após a redução da imunidade passiva, a vacinação estimula o desenvolvimento da imunidade ativa e da memória imunológica."
}

]

}

];








const vacinas = [


{

emoji:"🧬",

titulo:"Vacinas vivas atenuadas",

descricao:
"Utilizam microrganismos vivos enfraquecidos capazes de estimular uma resposta imunológica semelhante à infecção natural.",


vantagem:
"Resposta imunológica intensa e formação eficiente de memória.",


atencao:
"Podem apresentar restrições em determinadas situações sanitárias.",


exemplos:[

"Vacinas contendo componentes vivos atenuados contra cinomose canina",

"Vacinas contendo componentes vivos atenuados contra parvovirose canina",

"Outras vacinas veterinárias conforme espécie e formulação"

]

},





{

emoji:"🧪",

titulo:"Vacinas inativadas",

descricao:
"Utilizam agentes infecciosos mortos ou componentes incapazes de se multiplicar no organismo.",


vantagem:
"Maior segurança por não conter agentes vivos replicantes.",


atencao:
"Podem necessitar de doses de reforço e adjuvantes.",


exemplos:[

"Algumas vacinas contra raiva",

"Algumas vacinas contra leptospirose",

"Algumas vacinas bacterianas inativadas"

]

},





{

emoji:"🔬",

titulo:"Vacinas recombinantes",

descricao:
"Utilizam técnicas de biotecnologia para apresentar antígenos específicos ao sistema imunológico.",


vantagem:
"Permitem respostas direcionadas contra componentes específicos do agente.",


atencao:
"Dependem de tecnologias específicas para desenvolvimento.",


exemplos:[

"Algumas vacinas contra leishmaniose canina",

"Vacinas baseadas em antígenos recombinantes"

]

},





{

emoji:"🧫",

titulo:"Vacinas de subunidades",

descricao:
"Utilizam apenas partes selecionadas do agente infeccioso, como proteínas ou fragmentos antigênicos.",


vantagem:
"Maior direcionamento da resposta imunológica.",


atencao:
"Podem necessitar de estratégias para aumentar a imunogenicidade.",


exemplos:[

"Vacinas contendo proteínas específicas do agente",

"Vacinas baseadas em fragmentos antigênicos purificados"

]

}

];
export default function ImunizacaoPage(){


const [protecaoAberta,setProtecaoAberta] =
useState(false);


const [imunizacaoAberta,setImunizacaoAberta] =
useState<number | null>(null);


const [vacinaAberta,setVacinaAberta] =
useState<number | null>(null);



return (

<>

<Navbar />



<main
className="
min-h-screen
bg-[#F8FBF9]
px-5
py-10
md:px-10
"
>



<section
className="
mx-auto
max-w-[1200px]
"
>




{/* BREADCRUMB */}

<div
className="
mb-6
flex
items-center
gap-2
text-sm
text-gray-500
"
>


<Link
href="/imunologia"
className="
font-semibold
text-[#075334]
hover:underline
"
>

Imunologia

</Link>


<span>
›
</span>


<span>
Imunização e Vacinas
</span>


</div>







<h1
className="
text-3xl
font-bold
text-[#075334]
md:text-4xl
"
>

💉 Imunização e Vacinas

</h1>





<p
className="
mt-4
max-w-4xl
leading-relaxed
text-gray-600
"
>

A imunização representa uma das principais estratégias de prevenção
contra enfermidades infecciosas, estimulando mecanismos capazes de
proteger os animais contra diferentes agentes.

</p>









{/* COMO UMA VACINA GERA PROTEÇÃO */}



<div
className="
mt-8
rounded-3xl
bg-white
p-6
shadow-sm
"
>



<button

onClick={() =>
setProtecaoAberta(!protecaoAberta)
}

className="
flex
w-full
items-center
justify-between
text-left
"

>


<div>

<h2
className="
text-xl
font-bold
text-[#075334]
"
>

🧬 Como uma vacina gera proteção?

</h2>



<p
className="
mt-2
text-gray-600
"
>

Entenda como o sistema imunológico é ativado após a vacinação.

</p>

</div>




<span
className="
text-xl
font-bold
text-[#075334]
"
>

{
protecaoAberta
?
"−"
:
"+"
}

</span>



</button>








{protecaoAberta && (

<div
className="
mt-6
grid
gap-5
md:grid-cols-3
xl:grid-cols-5
"
>


{etapasImunizacao.map((etapa,index)=>(


<div
key={etapa.titulo}

className={`
relative
rounded-2xl
p-5
${etapa.cor}
`}
>


<div
className="
text-3xl
"
>

{etapa.emoji}

</div>




<h3
className="
mt-3
font-bold
text-[#075334]
"
>

{etapa.titulo}

</h3>





<p
className="
mt-2
text-sm
leading-relaxed
text-gray-600
"
>

{etapa.texto}

</p>






{index !== etapasImunizacao.length - 1 && (

<span
className="
hidden
absolute
right-[-18px]
top-1/2
xl:block
text-xl
text-[#075334]
"
>

→

</span>

)}



</div>


))}



</div>

)}



</div>



<div
className="
mt-8
grid
items-start
gap-5
md:grid-cols-2
"
>


{imunizacoes.map((item,index)=>(


<div

key={item.titulo}

onClick={() =>
setImunizacaoAberta(
imunizacaoAberta === index ? null : index
)
}

className="
self-start
cursor-pointer
rounded-3xl
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:shadow-md
"

>


<div
className="
text-3xl
"
>

{item.emoji}

</div>





<h2
className="
mt-3
text-xl
font-bold
text-[#075334]
"
>

{item.titulo}

</h2>





<p
className="
mt-3
text-gray-600
"
>

{item.resumo}

</p>





<div
className="
mt-4
text-sm
font-semibold
text-[#075334]
"
>

{

imunizacaoAberta === index

?

"Fechar detalhes ↑"

:

"Ver detalhes +"

}


</div>







{imunizacaoAberta === index && (


<div
className="
mt-5
rounded-xl
border
border-[#E5F3EA]
bg-[#F8FBF9]
p-4
"
>



<p
className="
text-sm
leading-relaxed
text-gray-600
"
>

{item.conteudo}

</p>







{item.extra && (

<div
className="
mt-4
grid
gap-3
"
>



{item.extra.map((info)=>(


<div

key={info.titulo}

className="
rounded-xl
bg-white
p-4
"

>


<h4
className="
font-bold
text-[#075334]
"
>

{info.titulo}

</h4>





<p
className="
mt-2
text-sm
leading-relaxed
text-gray-600
"
>

{info.texto}

</p>



</div>


))}


</div>


)}



</div>


)}





</div>


))}



</div>



<div
className="
mt-8
rounded-3xl
bg-white
p-6
shadow-sm
"
>


<h2
className="
text-xl
font-bold
text-[#075334]
"
>

💉 Tipos de Vacinas

</h2>



<p
className="
mt-2
text-gray-600
"
>

As vacinas podem ser classificadas conforme a forma de apresentação dos antígenos ao sistema imunológico.

</p>





<div
className="
mt-6
grid
items-start
gap-5
md:grid-cols-2
"
>


{vacinas.map((vacina,index)=>(


<div

key={vacina.titulo}

onClick={() =>
setVacinaAberta(
vacinaAberta === index ? null : index
)
}

className="
self-start
cursor-pointer
rounded-2xl
border
border-[#E5F3EA]
bg-[#F8FBF9]
p-5
transition
hover:-translate-y-1
hover:shadow-md
"

>


<div
className="
text-3xl
"
>

{vacina.emoji}

</div>




<h3
className="
mt-3
font-bold
text-[#075334]
"
>

{vacina.titulo}

</h3>




<p
className="
mt-3
text-sm
leading-relaxed
text-gray-600
"
>

{vacina.descricao}

</p>




<div
className="
mt-4
text-sm
font-semibold
text-[#075334]
"
>

{

vacinaAberta === index

?

"Fechar detalhes ↑"

:

"Ver detalhes +"

}


</div>








{vacinaAberta === index && (


<div
className="
mt-5
space-y-4
"
>




<div
className="
rounded-xl
bg-white
p-4
"
>


<h4
className="
font-bold
text-[#075334]
"
>

⭐ Vantagem

</h4>


<p
className="
mt-2
text-sm
leading-relaxed
text-gray-600
"
>

{vacina.vantagem}

</p>


</div>






<div
className="
rounded-xl
bg-yellow-50
p-4
"
>


<h4
className="
font-bold
text-yellow-700
"
>

⚠️ Atenção

</h4>



<p
className="
mt-2
text-sm
leading-relaxed
text-gray-600
"
>

{vacina.atencao}

</p>


</div>








<div
className="
rounded-xl
bg-[#E5F3EA]
p-4
"
>


<h4
className="
font-bold
text-[#075334]
"
>

📚 Exemplos

</h4>




<ul
className="
mt-3
space-y-2
text-sm
text-gray-600
"
>


{vacina.exemplos.map((exemplo)=>(


<li
key={exemplo}
className="
flex
gap-2
"
>

<span>
✓
</span>

<span>
{exemplo}
</span>


</li>


))}


</ul>


</div>






</div>


)}




</div>


))}



</div>


</div>








</section>


</main>



<Footer />


</>

);

}