import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const modulos = [

  {
    emoji: "🛡️",
    titulo: "Fundamentos da Imunidade",
    descricao:
      "Conheça os componentes do sistema imunológico e os mecanismos básicos de defesa do organismo.",
    link: "/imunologia/fundamentos",
  },

  {
    emoji: "🦠",
    titulo: "Resposta Imunológica",
    descricao:
      "Compreenda como o organismo reconhece, combate e desenvolve respostas contra agentes infecciosos.",
    link: "/imunologia/resposta-imune",
  },

  {
    emoji: "💉",
    titulo: "Imunização e Vacinas",
    descricao:
      "Entenda como as vacinas estimulam a proteção imunológica contra doenças infecciosas.",
    link: "/imunologia/imunizacao",
  },

];


export default function ImunologiaPage(){

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


<h1
className="
text-3xl
font-bold
text-[#075334]
md:text-4xl
"
>
🧬 Imunologia Veterinária
</h1>



<p
className="
mt-4
max-w-4xl
leading-relaxed
text-gray-600
"
>

A imunologia veterinária estuda os mecanismos de defesa dos animais,
permitindo compreender a interação entre o sistema imunológico,
os agentes infecciosos e as estratégias de prevenção das doenças.

</p>



<div
className="
mt-8
grid
gap-6
md:grid-cols-3
"
>

{modulos.map((modulo)=>(

<Link

key={modulo.titulo}

href={modulo.link}

className="
rounded-3xl
bg-white
p-6
shadow-sm
transition
hover:-translate-y-1
hover:shadow-md
"

>


<div className="text-4xl">
{modulo.emoji}
</div>


<h2
className="
mt-5
font-bold
text-[#075334]
"
>

{modulo.titulo}

</h2>


<p
className="
mt-3
text-sm
leading-relaxed
text-gray-600
"
>

{modulo.descricao}

</p>


<div
className="
mt-5
text-sm
font-semibold
text-[#075334]
"
>
Acessar conteúdo →
</div>


</Link>


))}

</div>


</section>


</main>


<Footer />

</>

);

}