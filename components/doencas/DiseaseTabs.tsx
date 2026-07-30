"use client";


type Aba = {

  id: string;

  nome: string;

  emoji: string;

};



type DiseaseTabsProps = {

  abas: Aba[];

  abaAtiva: string;

  setAbaAtiva: (id:string)=>void;

};



export default function DiseaseTabs({

  abas,

  abaAtiva,

  setAbaAtiva,

}: DiseaseTabsProps) {


return (

<section className="border-b bg-white">


<div
className="
mx-auto
max-w-[1200px]
px-5
py-4
md:px-10
"
>


{/* MOBILE */}

<div
className="
flex
gap-3
overflow-x-auto
pb-1
md:hidden
"
>


{abas.map((aba)=>(


<button

type="button"

key={aba.id}

onClick={()=>{
  setAbaAtiva(aba.id);
}}

className={`

flex
min-w-[110px]
flex-col
items-center
justify-center
rounded-xl
px-3
py-3
text-center
text-xs
font-semibold
transition


${
abaAtiva === aba.id

?

"bg-[#075334] text-white"

:

"bg-[#F8FBF9] text-gray-600 hover:bg-[#EDF8F0]"

}

`}

>


<span className="mb-1 text-xl">

{aba.emoji}

</span>


{aba.nome}


</button>


))}


</div>





{/* DESKTOP */}

<div
className="
hidden
gap-2
md:grid
md:grid-cols-7
lg:grid-cols-13
"
>


{abas.map((aba)=>(


<button

type="button"

key={aba.id}

onClick={()=>{
  setAbaAtiva(aba.id);
}}

className={`

flex
flex-col
items-center
justify-center
rounded-xl
px-2
py-3
text-center
text-xs
font-semibold
transition


${
abaAtiva === aba.id

?

"bg-[#075334] text-white"

:

"bg-[#F8FBF9] text-gray-600 hover:bg-[#EDF8F0]"

}

`}

>


<span className="mb-1 text-xl">

{aba.emoji}

</span>


{aba.nome}


</button>


))}


</div>


</div>


</section>

);

}