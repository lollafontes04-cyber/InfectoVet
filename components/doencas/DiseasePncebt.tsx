"use client";

import { useState } from "react";


type DiseasePncebtProps = {

  pncebt?: {

    introducao:string;

    blocos:{

      emoji:string;

      titulo:string;

      descricao:string;

      texto:string;

    }[];

  };

};



export default function DiseasePncebt({
  pncebt,
}:DiseasePncebtProps){


const [aberto,setAberto] = useState<number | null>(null);



const cores = [

"bg-green-50 border-green-200",

"bg-yellow-50 border-yellow-200",

"bg-blue-50 border-blue-200",

"bg-purple-50 border-purple-200",

];



if(!pncebt){
  return null;
}



return (

<div
className="
rounded-3xl
bg-white
p-8
shadow-sm
"
>


<h2
className="
flex
items-center
gap-2
text-2xl
font-bold
text-[#075334]
"
>
<span>
🇧🇷
</span>

PNCEBT

</h2>



<p
className="
mt-4
text-gray-600
leading-relaxed
"
>
{pncebt.introducao}
</p>




<div
className="
mt-8
grid
gap-5
md:grid-cols-2
items-start
"
>


{pncebt.blocos.map((bloco,index)=>{


const ativo = aberto === index;



return (

<div

key={bloco.titulo}


onClick={()=>


setAberto(
ativo ? null : index
)


}


className={`
cursor-pointer
rounded-3xl
min-h-[180px]
border
p-5
transition-all
duration-300
h-fit

${cores[index]}

`}

>


<div
className="
flex
items-center
gap-3
"
>


<span
className="
text-3xl
"
>
{bloco.emoji}
</span>



<h3
className="
font-bold
text-[#075334]
"
>
{bloco.titulo}
</h3>



</div>



<p
className="
mt-4
text-sm
leading-relaxed
text-gray-600
"
>
{bloco.descricao}
</p>



<div
className="
mt-4
inline-flex
items-center
rounded-full
bg-white
px-3
py-1
text-xs
font-bold
text-[#075334]
shadow-sm
"
>

{
ativo
?
"▲ Ocultar detalhes"
:
"▼ Clique para ver detalhes"
}

</div>





{
ativo && (

<div
className="
mt-4
rounded-xl
bg-white
p-4
text-sm
leading-relaxed
text-gray-600
"
>

{bloco.texto}

</div>

)

}



</div>


)


})}


</div>



</div>


)


}