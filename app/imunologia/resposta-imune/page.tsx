"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



const etapasResposta = [

{
emoji:"🦠",
titulo:"Entrada do agente",

descricao:
"O agente infeccioso entra em contato com o organismo após ultrapassar as barreiras iniciais.",

detalhes:[

"O microrganismo estabelece contato com os tecidos do hospedeiro.",
"O sistema imunológico passa a identificar sinais associados ao perigo."

]

},


{
emoji:"🚨",
titulo:"Detecção do perigo",

descricao:
"Células presentes nos tecidos identificam alterações e iniciam a comunicação da resposta.",

detalhes:[

"O organismo reconhece estruturas associadas ao agente infeccioso.",
"Sinais de alerta são liberados para organizar a defesa."

]

},


{
emoji:"📢",
titulo:"Comunicação celular",

descricao:
"As células imunológicas trocam informações para coordenar a resposta.",

detalhes:[

"As citocinas atuam como sinais entre as células.",
"Essas informações orientam o recrutamento e ativação das defesas."

]

},


{
emoji:"🔥",
titulo:"Amplificação da resposta",

descricao:
"A resposta é intensificada para aumentar o controle da infecção.",

detalhes:[

"Mais elementos de defesa são direcionados ao local afetado.",
"O processo inflamatório auxilia no combate ao agente."

]

},


{
emoji:"🎯",
titulo:"Ativação específica",

descricao:
"O organismo direciona uma resposta mais específica contra o agente identificado.",

detalhes:[

"As informações obtidas no reconhecimento orientam a resposta adaptativa.",
"A defesa passa a ser direcionada ao agente envolvido."

]

},


{
emoji:"⚔️",
titulo:"Controle da infecção",

descricao:
"A atuação conjunta dos mecanismos imunológicos reduz a presença do agente.",

detalhes:[

"O organismo elimina ou controla o microrganismo.",
"A resposta precisa ser regulada para evitar danos ao tecido."

]

},


{
emoji:"🧠",
titulo:"Memória imunológica",

descricao:
"Após a resposta, algumas células permanecem preparadas para novos contatos.",

detalhes:[

"O organismo mantém uma capacidade de resposta mais eficiente.",
"Exposições futuras podem gerar respostas mais rápidas."

]

}

];






const participantes = [

{
emoji:"🛡️",
titulo:"Células sentinelas",

descricao:
"Elementos responsáveis pela vigilância inicial dos tecidos.",

detalhes:[

"Detectam alterações no ambiente.",
"Iniciam a comunicação imunológica."

]

},


{
emoji:"📢",
titulo:"Citocinas",

descricao:
"Moléculas responsáveis pela comunicação entre células durante a resposta.",

detalhes:[

"Transmitem sinais entre diferentes células.",
"Controlam intensidade e duração da resposta."

]

},


{
emoji:"🎯",
titulo:"Células apresentadoras",

descricao:
"Realizam a ligação entre reconhecimento inicial e resposta específica.",

detalhes:[

"Processam informações do agente.",
"Auxiliam na ativação da resposta adaptativa."

]

},


{
emoji:"🧠",
titulo:"Células de memória",

descricao:
"Permitem respostas mais eficientes após novos contatos.",

detalhes:[

"Permanecem após a resolução da resposta.",
"Auxiliam na proteção futura."

]

}

];
export default function RespostaImunologicaPage(){


const [etapaAberta,setEtapaAberta] = useState<number | null>(null);

const [participanteAberto,setParticipanteAberto] = useState<number | null>(null);



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
Resposta Imunológica
</span>


</div>





{/* INTRODUÇÃO */}


<div
className="
rounded-3xl
bg-white
p-8
shadow-sm
"
>


<h1
className="
text-3xl
font-bold
text-[#075334]
md:text-4xl
"
>

🧬 Resposta Imunológica

</h1>



<p
className="
mt-4
leading-relaxed
text-gray-600
"
>

Após o reconhecimento de um agente infeccioso, o organismo inicia uma
sequência coordenada de eventos envolvendo comunicação celular, ativação
das defesas e controle da infecção.

</p>


</div>








{/* LINHA DE BATALHA */}



<div
className="
mt-8
rounded-3xl
bg-white
p-8
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

⚔️ Linha de batalha imunológica

</h2>


<p
className="
mt-2
text-gray-600
"
>

A resposta imunológica ocorre em etapas organizadas, onde cada fase prepara
o próximo momento da defesa.

</p>




<div
className="
mt-6
space-y-4
"
>


{

etapasResposta.map((etapa,index)=>(


<div
key={etapa.titulo}
>


<button

onClick={()=>setEtapaAberta(

etapaAberta===index

?

null

:

index

)}

className={`

w-full
rounded-3xl
border
p-6
text-left
transition
hover:shadow-md


${
etapaAberta===index

?

"bg-[#075334] text-white border-[#075334]"

:

"bg-[#F8FBF9] border-gray-100"

}

`}

>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
text-4xl
"
>

{etapa.emoji}

</div>



<div>


<h3
className="
font-bold
text-lg
"
>

{index + 1}. {etapa.titulo}

</h3>


<p
className="
mt-2
text-sm
opacity-80
"
>

{etapa.descricao}

</p>


</div>


</div>




<p
className="
mt-4
text-sm
font-bold
"
>

{

etapaAberta===index

?

"▲ Fechar detalhes"

:

"▼ Ver detalhes"

}


</p>


</button>






{

etapaAberta===index && (

<div
className="
mt-3
rounded-3xl
bg-[#F8FBF9]
p-6
"
>


<ul
className="
space-y-2
text-sm
text-gray-600
"
>


{

etapa.detalhes.map((detalhe)=>(

<li key={detalhe}>
✓ {detalhe}
</li>

))

}


</ul>


</div>

)

}



</div>


))


}


</div>


</div>
{/* INTEGRAÇÃO DA RESPOSTA */}


<div
className="
mt-10
rounded-3xl
bg-white
p-8
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

🔄 Integração da resposta imunológica

</h2>


<p
className="
mt-3
text-gray-600
"
>

A resposta imunológica depende da comunicação entre diferentes etapas,
onde o reconhecimento inicial orienta a ativação de mecanismos mais
específicos.

</p>



<div
className="
mt-6
grid
gap-4
md:grid-cols-3
"
>


<div
className="
rounded-3xl
bg-orange-50
p-6
"
>


<div className="text-3xl">
🚨
</div>


<h3
className="
mt-3
font-bold
text-[#075334]
"
>

Reconhecimento inicial

</h3>


<p
className="
mt-2
text-sm
text-gray-600
"
>

Identificação do perigo e início da comunicação imunológica.

</p>


</div>




<div
className="
rounded-3xl
bg-blue-50
p-6
"
>


<div className="text-3xl">
📢
</div>


<h3
className="
mt-3
font-bold
text-[#075334]
"
>

Comunicação celular

</h3>


<p
className="
mt-2
text-sm
text-gray-600
"
>

Informações são transmitidas para organizar a resposta.

</p>


</div>




<div
className="
rounded-3xl
bg-purple-50
p-6
"
>


<div className="text-3xl">
🎯
</div>


<h3
className="
mt-3
font-bold
text-[#075334]
"
>

Resposta direcionada

</h3>


<p
className="
mt-2
text-sm
text-gray-600
"
>

A defesa é adaptada conforme as características do agente.

</p>


</div>


</div>


</div>







{/* PARTICIPANTES */}


<div
className="
mt-10
"
>


<h2
className="
text-xl
font-bold
text-[#075334]
"
>

📌 Principais participantes da resposta

</h2>



<p
className="
mt-2
text-gray-600
"
>

Elementos responsáveis pela organização e comunicação da resposta
imunológica.

</p>




<div
className="
mt-6
grid
gap-5
md:grid-cols-2
"
>


{

participantes.map((item,index)=>(


<div
key={item.titulo}
>


<button

onClick={()=>setParticipanteAberto(

participanteAberto===index

?

null

:

index

)}

className={`

w-full
rounded-3xl
border
p-6
text-left
transition
hover:shadow-md


${
participanteAberto===index

?

"bg-[#F8FBF9] border-[#075334]"

:

"bg-white border-gray-100"

}

`}

>


<div
className="
flex
items-center
gap-4
"
>


<div className="text-4xl">

{item.emoji}

</div>


<h3
className="
font-bold
text-[#075334]
"
>

{item.titulo}

</h3>


</div>



<p
className="
mt-4
text-sm
text-gray-600
"
>

{item.descricao}

</p>



<p
className="
mt-4
text-sm
font-bold
text-[#075334]
"
>

{

participanteAberto===index

?

"▲ Fechar detalhes"

:

"▼ Explorar função"

}


</p>



</button>






{

participanteAberto===index && (

<div
className="
mt-3
rounded-3xl
bg-white
border
border-gray-100
p-5
"
>


<ul
className="
space-y-2
text-sm
text-gray-600
"
>


{

item.detalhes.map((detalhe)=>(


<li key={detalhe}>
✓ {detalhe}
</li>


))

}


</ul>


</div>

)


}



</div>


))


}


</div>


</div>





</section>


</main>



<Footer />


</>

);

}