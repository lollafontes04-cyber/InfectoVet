"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const fluxo = [

{
emoji:"🦠",
titulo:"Entrada do agente",
descricao:
"O primeiro contato entre o organismo e o agente infeccioso.",

itens:[
"Contato com vírus, bactérias, fungos ou parasitas",
"Início da interação com o hospedeiro",
"Possível invasão dos tecidos"
]

},

{
emoji:"🚧",
titulo:"Barreiras de defesa",
descricao:
"A primeira proteção contra a entrada dos microrganismos.",

itens:[
"Pele, mucosas e epitélios como barreira física",
"Secreções, enzimas e pH como proteção química",
"Microbiota normal competindo com invasores"
]

},

{
emoji:"⚔️",
titulo:"Imunidade Inata",
descricao:
"Resposta rápida e inespecífica contra agentes infecciosos.",

itens:[
"Neutrófilos e macrófagos",
"Fagocitose",
"Inflamação",
"Sistema complemento"
]

},

{
emoji:"🧬",
titulo:"Imunidade Adaptativa",
descricao:
"Resposta específica capaz de gerar proteção prolongada.",

itens:[
"Linfócitos B",
"Linfócitos T",
"Produção de anticorpos",
"Memória imunológica"
]

},

{
emoji:"🧠",
titulo:"Memória imunológica",
descricao:
"Permite uma resposta mais rápida após novo contato.",

itens:[
"Células de memória",
"Resposta secundária mais eficiente",
"Base da vacinação"
]

}

];



const mecanismos = [

{
emoji:"🚧",
cor:"green",
categoria:"PRIMEIRA PROTEÇÃO",
titulo:"Barreiras de Defesa",

descricao:
"Mecanismos que dificultam a entrada dos agentes infecciosos.",

conteudo:[

{
titulo:"🧱 Barreira física",
texto:
"A pele, mucosas e epitélios impedem a entrada de muitos microrganismos."
},

{
titulo:"🧪 Barreira química",
texto:
"Secreções, enzimas e alterações de pH dificultam a sobrevivência dos agentes."
},

{
titulo:"🦠 Microbiota normal",
texto:
"Os microrganismos residentes auxiliam na proteção através da competição."
}

]

},


{
emoji:"⚔️",
cor:"orange",
categoria:"DEFESA IMEDIATA",
titulo:"Imunidade Inata",

descricao:
"Resposta inicial contra agentes infecciosos.",

conteudo:[

{
titulo:"🔬 Células fagocíticas",
texto:
"Neutrófilos e macrófagos reconhecem e eliminam microrganismos."
},

{
titulo:"🔥 Inflamação",
texto:
"Processo que recruta células e moléculas de defesa."
},

{
titulo:"🧬 Sistema complemento",
texto:
"Proteínas que auxiliam na eliminação dos agentes infecciosos."
}

]

},


{
emoji:"🎯",
cor:"blue",
categoria:"IDENTIFICAÇÃO",
titulo:"Reconhecimento Imunológico",

descricao:
"O sistema identifica estruturas dos agentes infecciosos.",

conteudo:[

{
titulo:"🔎 Reconhecimento de padrões",
texto:
"Receptores imunológicos detectam estruturas comuns dos microrganismos."
},

{
titulo:"📢 Ativação celular",
texto:
"O reconhecimento inicia a ativação das células de defesa."
}

]

},


{
emoji:"🧬",
cor:"purple",
categoria:"DEFESA ESPECIALIZADA",
titulo:"Imunidade Adaptativa",

descricao:
"Resposta específica mediada por linfócitos.",

conteudo:[

{
titulo:"🩸 Linfócitos B",
texto:
"Produzem anticorpos contra agentes específicos."
},

{
titulo:"⚔️ Linfócitos T",
texto:
"Atuam na resposta celular contra células infectadas."
},

{
titulo:"🧠 Memória",
texto:
"Permite respostas mais rápidas em exposições futuras."
}

]

},


{
emoji:"🏛️",
cor:"gray",
categoria:"ESTRUTURA",
titulo:"Órgãos do Sistema Imunológico",

descricao:
"Locais de produção, maturação e ativação das células de defesa.",

conteudo:[

{
titulo:"🦴 Medula óssea",
texto:
"Produção das células sanguíneas e maturação dos linfócitos B."
},

{
titulo:"🫀 Timo",
texto:
"Local de maturação dos linfócitos T."
},

{
titulo:"🔵 Linfonodos e baço",
texto:
"Participam da ativação e organização da resposta imunológica."
}

]

}

];
export default function FundamentosPage(){


const [fluxoAberto,setFluxoAberto] = useState<number | null>(null);

const [mecanismoAberto,setMecanismoAberto] = useState<number | null>(null);



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
Fundamentos da Imunidade
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
flex
items-center
gap-3
text-3xl
font-bold
text-[#075334]
md:text-4xl
"
>

🛡️ Fundamentos da Imunidade

</h1>


<p
className="
mt-4
leading-relaxed
text-gray-600
"
>

A imunidade corresponde ao conjunto de mecanismos responsáveis pela
proteção do organismo contra agentes infecciosos. Na medicina veterinária,
compreender esses mecanismos permite entender a relação entre hospedeiro,
agente infeccioso e resposta imunológica.

</p>


</div>







{/* FLUXO IMUNOLÓGICO */}


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

🦠 Do agente infeccioso à proteção

</h2>



<p
className="
mt-2
text-gray-600
"
>

A defesa do organismo acontece em etapas integradas, desde a entrada do
agente até a formação da memória imunológica.

</p>





<div
className="
mt-6
grid
gap-4
md:grid-cols-5
"
>


{

fluxo.map((item,index)=>(


<div
key={item.titulo}
>


<button

onClick={()=>setFluxoAberto(

fluxoAberto===index

?

null

:

index

)}

className={`

w-full
rounded-2xl
border
p-5
transition
hover:-translate-y-1


${
fluxoAberto===index

?

"bg-[#075334] text-white border-[#075334]"

:

"bg-[#F8FBF9] border-gray-100"

}

`}

>


<div
className="
text-3xl
"
>

{item.emoji}

</div>


<h3
className="
mt-3
text-sm
font-bold
"
>

{item.titulo}

</h3>


</button>





{/* MOBILE */}


{

fluxoAberto===index && (


<div

className="
mt-3
rounded-2xl
bg-[#F8FBF9]
p-5
md:hidden
"

>


<h4
className="
font-bold
text-[#075334]
"
>

{item.emoji} {item.titulo}

</h4>


<p
className="
mt-3
text-sm
text-gray-600
"
>

{item.descricao}

</p>



<ul
className="
mt-4
space-y-2
text-sm
text-gray-600
"
>


{

item.itens.map((info)=>(

<li key={info}>
✓ {info}
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








{/* DESKTOP */}



{

fluxoAberto !== null && (


<div

className="
mt-6
hidden
rounded-3xl
bg-[#F8FBF9]
p-6
md:block
"

>


<h3
className="
text-xl
font-bold
text-[#075334]
"
>

{fluxo[fluxoAberto].emoji}

{fluxo[fluxoAberto].titulo}

</h3>



<p
className="
mt-3
text-gray-600
"
>

{fluxo[fluxoAberto].descricao}

</p>



<ul
className="
mt-5
space-y-2
text-gray-600
"
>


{

fluxo[fluxoAberto].itens.map((item)=>(

<li key={item}>
✓ {item}
</li>

))

}


</ul>


</div>


)


}



</div>
{/* MECANISMOS DE DEFESA */}


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

🛡️ Mecanismos de Defesa do Organismo

</h2>



<p
className="
mt-2
text-gray-600
"
>

Os principais mecanismos envolvidos na proteção contra agentes infecciosos.

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

mecanismos.map((card,index)=>(


<div
key={card.titulo}
>


<button

onClick={()=>setMecanismoAberto(

mecanismoAberto===index

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
hover:-translate-y-1
hover:shadow-md


${
mecanismoAberto===index

?

"bg-white border-[#075334]"

:

card.cor==="green"

?

"bg-green-100 border-green-100"

:

card.cor==="orange"

?

"bg-orange-100 border-orange-100"

:

card.cor==="blue"

?

"bg-blue-100 border-blue-100"

:

card.cor==="purple"

?

"bg-purple-100 border-purple-100"

:

"bg-yellow-100 border-gray-100"

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
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-white
text-3xl
shadow-sm
"

>

{card.emoji}

</div>




<div>


<p
className="
text-xs
font-bold
text-[#075334]
"
>

{card.categoria}

</p>


<h3
className="
text-lg
font-bold
text-[#075334]
"
>

{card.titulo}

</h3>


</div>


</div>





<p
className="
mt-4
text-sm
text-gray-600
"
>

{card.descricao}

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

mecanismoAberto===index

?

"▲ Fechar conteúdo"

:

"▼ Explorar conteúdo"

}


</p>


</button>







{/* CONTEÚDO EXPANDIDO */}



{

mecanismoAberto===index && (


<div

className="
mt-3
rounded-3xl
bg-white
border
border-gray-100
p-6
"

>


<div
className="
space-y-4
"
>


{

card.conteudo.map((item)=>(


<div

key={item.titulo}

className="
rounded-2xl
bg-[#F8FBF9]
p-5
"

>


<h4
className="
font-bold
text-[#075334]
"
>

{item.titulo}

</h4>



<p
className="
mt-3
text-sm
leading-relaxed
text-gray-600
"
>

{item.texto}

</p>


</div>


))


}


</div>


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