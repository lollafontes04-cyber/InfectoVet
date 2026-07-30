"use client";


import { useState } from "react";
import Link from "next/link";


import { diagnosticos } from "@/data/diagnosticos";


import DiseaseGallery from "@/components/doencas/DiseaseGallery";
import DiseaseCases from "@/components/doencas/DiseaseCases";
import DiseaseQuiz from "@/components/doencas/DiseaseQuiz";
import DiseaseReferences from "@/components/doencas/DiseaseReferences";




// =====================================
// TIPOS
// =====================================


type BlocoConteudo = {

  emoji: string;

  titulo: string;

  texto: string;

};





type InformacaoExtra = {

  titulo: string;

  texto: string;

};





type BlocoPrevencao = {

  emoji: string;

  titulo: string;

  texto: string;

  destaque?: boolean;

  informacoes?: InformacaoExtra[];

};





type ConteudoBlocos = {

  introducao: string;

  blocos: BlocoConteudo[];

};





type ConteudoPrevencao = {

  introducao: string;

  blocos: BlocoPrevencao[];

};





type ConteudoDiagnostico = {

  introducao: string;

  metodos: string[];

};

type TabelaEtiologia = {

  titulo: string;

  emoji: string;

  colunas: string[];

  linhas: string[][];

};



type ConteudoEtiologia = {

  introducao: string;


  listas?: {

    titulo: string;

    emoji: string;

    itens: string[];

  }[];


  tabelas?: TabelaEtiologia[];


  blocos?: {

    titulo: string;

    emoji: string;

    itens: string[];

  }[];

};


type DiseaseContentProps = {


  id: string;


  nome: string;


  agente: string;


  hospedeiros: string[];


  zoonose: boolean;

  casosClinicos?: {

  id: string;

  titulo: string;

  especie: string;

  idade?: string;

  historico: string;

  sinais: string[];

  exames?: string;

  diagnostico: string;


  discussao: string;

}[];



  visaoGeral:
  | string
  | {
      introducao: string;

      cards: {
        titulo: string;
        itens: string[];
        emoji?: string;
      }[];
    };


  etiologia: 
  | string
  | ConteudoEtiologia;



  patogenia:
  | string
  | ConteudoBlocos;



epidemiologia:
  | string
  | {
      introducao: string;
      blocos: {
        emoji: string;
        titulo: string;
        texto: string;
      }[];
    };


sinaisClinicos:
  | string
  | {
      introducao: string;
      blocos: {
        emoji: string;
        titulo: string;
        itens: string[];
      }[];
    };




  diagnostico:
  | string
  | ConteudoDiagnostico;





  tratamento:
  | string
  | ConteudoBlocos;





  prevencao:
  | string
  | ConteudoPrevencao;

    imagens?: {

    src: string;

    titulo: string;

    categoria: string;

    descricao: string;

  }[];


};









// =====================================
// ABAS
// =====================================


const abas = [

  {
    id: "visao",
    nome: "Visão Geral",
    emoji: "🏠",
  },


  {
    id: "etiologia",
    nome: "Etiologia",
    emoji: "🦠",
  },


  {
    id: "patogenia",
    nome: "Patogenia",
    emoji: "⚙️",
  },


  {
    id: "epidemiologia",
    nome: "Epidemiologia",
    emoji: "🌎",
  },


  {
    id: "clinicos",
    nome: "Sinais Clínicos",
    emoji: "⚠️",
  },


  {
    id: "diagnostico",
    nome: "Diagnóstico",
    emoji: "🔬",
  },


  {
    id: "tratamento",
    nome: "Tratamento",
    emoji: "💊",
  },


  {
    id: "prevencao",
    nome: "Prevenção",
    emoji: "🛡️",
  },


  {
    id: "galeria",
    nome: "Imagens",
    emoji: "🖼️",
  },


  {
    id: "casos",
    nome: "Casos Clínicos",
    emoji: "📋",
  },


  {
    id: "questoes",
    nome: "Questões",
    emoji: "❓",
  },


  {
    id: "referencias",
    nome: "Referências",
    emoji: "📚",
  },

];
export default function DiseaseContent({

  id,

  nome,

  agente,

  hospedeiros,

  zoonose,

  visaoGeral,

  etiologia,

  patogenia,

  epidemiologia,

  sinaisClinicos,

  diagnostico,

  tratamento,

  imagens,

  casosClinicos,

  prevencao,

}: DiseaseContentProps) {



  const [abaAtiva, setAbaAtiva] = useState("visao");







  function CardBloco({
    bloco
  }: {
    bloco: BlocoConteudo;
  }) {


    return (

      <div
        className="
          rounded-2xl
          bg-[#F8FBF9]
          p-5
        "
      >


        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <span className="text-2xl">

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
            mt-3
            leading-relaxed
            text-gray-600
          "
        >

          {bloco.texto}

        </p>


      </div>

    );

  }









  function ListaBlocos({
    blocos
  }: {
    blocos: BlocoConteudo[];
  }) {


    return (

      <div className="mt-6 grid gap-5">

        {blocos.map((bloco,index)=>(

          <CardBloco

            key={index}

            bloco={bloco}

          />

        ))}

      </div>

    );

  }









  function PrevencaoCard({
    bloco
  }: {
    bloco: BlocoPrevencao;
  }) {


    return (

      <div

        className={`

          rounded-2xl

          p-5


          ${
            bloco.destaque

            ?

            "border border-red-200 bg-red-50"

            :

            "bg-[#F8FBF9]"

          }

        `}

      >



        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <span className="text-2xl">

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
            mt-3
            leading-relaxed
            text-gray-600
          "
        >

          {bloco.texto}

        </p>






        {bloco.destaque && (

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >


            <span
              className="
                rounded-md
                bg-red-200
                px-2
                py-1
                text-sm
                font-bold
                text-red-800
              "
            >

              ⚠️ OBRIGATÓRIA

            </span>



            <span
              className="
                rounded-md
                bg-yellow-200
                px-2
                py-1
                text-sm
                font-bold
                text-yellow-800
              "
            >

              📅 3 a 8 meses

            </span>


          </div>

        )}






        {bloco.informacoes && (

          <div
            className="
              mt-5
              grid
              gap-3
            "
          >

            {bloco.informacoes.map((info)=>(


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

    );

  }









  function renderConteudo(){



   if(abaAtiva === "galeria"){

  return (

    <DiseaseGallery

      imagens={imagens}

    />

  );

}



   if(abaAtiva === "casos"){

  return (
    <DiseaseCases
      casos={casosClinicos || []}
    />
  );

}



   if(abaAtiva === "questoes"){

  return (

    <div className="-mt-4">

      <DiseaseQuiz
        doencaId={id}
      />

    </div>

  );

}



    if(abaAtiva === "referencias"){

      return <DiseaseReferences />;

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



{abaAtiva === "visao" && (

<>

<h2
  className="
    text-2xl
    font-bold
    text-[#075334]
  "
>
  Visão Geral
</h2>


{typeof visaoGeral === "string" ? (

  <p className="mt-4 leading-relaxed text-gray-600">
    {visaoGeral}
  </p>

) : (

  <>

    <p className="mt-4 leading-relaxed text-gray-600">
      {visaoGeral.introducao}
    </p>


    <div className="mt-6 grid gap-5 md:grid-cols-3">

      {visaoGeral.cards.map((card) => (

        <div
          key={card.titulo}
          className="rounded-2xl bg-[#F8FBF9] p-5"
        >

          <h3 className="flex items-center gap-2 font-bold text-[#075334]">

            <span>
              {card.emoji}
            </span>

            {card.titulo}

          </h3>


          <ul className="mt-3 space-y-2 text-sm text-gray-600">

            {card.itens.map((item) => (

              <li key={item}>
                ✓ {item}
              </li>

            ))}

          </ul>


        </div>

      ))}

    </div>

  </>

)}

</>

)}




     {abaAtiva === "etiologia" && (

  <>

    <h2
      className="
        text-2xl
        font-bold
        text-[#075334]
      "
    >
      Etiologia
    </h2>


    {typeof etiologia === "string" ? (

      <p className="mt-4 leading-relaxed text-gray-600">
        {etiologia}
      </p>


    ) : (

      <div>


        <p className="mt-4 leading-relaxed text-gray-600">
          {etiologia.introducao}
        </p>



            {etiologia.listas?.map((lista) => (

          <div
            key={lista.titulo}
            className="mt-6"
          >

            <h3 className="font-bold text-[#075334]">
              {lista.emoji} {lista.titulo}
            </h3>


            <ul className="mt-3 space-y-2 text-gray-600">

              {lista.itens.map((item) => (

                <li key={item}>
                  ✓ {item}
                </li>

              ))}

            </ul>


          </div>

        ))}



        {etiologia.tabelas?.map((tabela) => (

          <div
            key={tabela.titulo}
            className="mt-8"
          >

            <h3 className="font-bold text-[#075334] mb-4">
              {tabela.emoji} {tabela.titulo}
            </h3>


            <div className="overflow-x-auto rounded-xl border">

              <table className="w-full text-sm">

                <thead className="bg-gray-50">

                  <tr>

                    {tabela.colunas.map((coluna) => (

                      <th
                        key={coluna}
                        className="p-4 text-left font-bold"
                      >
                        {coluna}
                      </th>

                    ))}

                  </tr>

                </thead>


                <tbody>

                  {tabela.linhas.map((linha, index) => (

                    <tr
                      key={index}
                      className="border-t"
                    >

                      {linha.map((celula, i) => (

                        <td
                          key={i}
                          className="p-4 text-gray-600"
                        >
                          {celula}
                        </td>

                      ))}

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


          </div>

        ))}
      {etiologia.blocos?.map((bloco) => (

  <div
    key={bloco.titulo}
    className="
      mt-8
      rounded-2xl
      bg-[#F8FBF9]
      p-6
    "
  >

    <h3
      className="
        flex
        items-center
        gap-2
        font-bold
        text-[#075334]
      "
    >
      <span>
        {bloco.emoji}
      </span>

      {bloco.titulo}

    </h3>


    <ul className="mt-4 space-y-2 text-gray-600">

      {bloco.itens.map((item) => (

        <li key={item}>
          ✓ {item}
        </li>

      ))}

    </ul>


  </div>

))}

      </div>

    )}

  </>
)}

        {abaAtiva === "patogenia" && (

          <>

            <h2 className="
              text-2xl
              font-bold
              text-[#075334]
            ">

              Patogenia

            </h2>



            {

            typeof patogenia === "string"

            ?

            <p className="mt-4 text-gray-600">

              {patogenia || "Conteúdo em desenvolvimento."}

            </p>


            :

            <>

              <p className="
                mt-4
                leading-relaxed
                text-gray-600
              ">

                {patogenia.introducao}

              </p>


              <ListaBlocos

                blocos={patogenia.blocos}

              />


            </>

            }


          </>

        )}
                {abaAtiva === "epidemiologia" && (

          <>

            <h2 className="
              text-2xl
              font-bold
              text-[#075334]
            ">

              Epidemiologia

            </h2>


          {typeof epidemiologia === "string" ? (

  <p className="
    mt-4
    leading-relaxed
    text-gray-600
  ">
    {epidemiologia || "Conteúdo em desenvolvimento"}
  </p>

) : (

  <>

    <p className="
      mt-4
      leading-relaxed
      text-gray-600
    ">
      {epidemiologia.introducao}
    </p>


    {epidemiologia.blocos.map((bloco) => (

      <div
        key={bloco.titulo}
        className="mt-6"
      >

        <h3 className="
          font-bold
          text-[#075334]
        ">
          {bloco.emoji} {bloco.titulo}
        </h3>


        <p className="
          mt-2
          text-gray-600
        ">
          {bloco.texto}
        </p>

      </div>

    ))}

  </>

)}


          </>

        )}








      {abaAtiva === "clinicos" && (

  <>

    <h2 className="
      text-2xl
      font-bold
      text-[#075334]
    ">
      Sinais Clínicos
    </h2>


    {typeof sinaisClinicos === "string" ? (

      <p className="
        mt-4
        leading-relaxed
        text-gray-600
      ">
        {sinaisClinicos || "Conteúdo em desenvolvimento."}
      </p>


    ) : (

      <>

        <p className="
          mt-4
          leading-relaxed
          text-gray-600
        ">
          {sinaisClinicos.introducao}
        </p>


<div className="mt-6 grid gap-5 md:grid-cols-2">

  {sinaisClinicos.blocos.map((bloco) => (

    <div
      key={bloco.titulo}
      className={`
  rounded-2xl
  p-6
  ${
    bloco.titulo === "Fêmeas"
      ? "bg-pink-50"
      : bloco.titulo === "Machos"
      ? "bg-blue-50"
      : "bg-yellow-50"
  }
`}
    >

      <h3
  className="
    flex
    items-center
    gap-2
    font-bold
    text-gray-800
  "
      >

        <span className="text-xl">
          {bloco.emoji}
        </span>

        {bloco.titulo}

      </h3>


      <ul
        className="
          mt-4
          space-y-3
          text-gray-600
        "
      >

        {bloco.itens.map((item) => (

          <li
            key={item}
            className="flex gap-2"
          >

            <span className="text-[#075334]">
              ✓
            </span>

            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>


    </div>

  ))}

</div>


      </>

    )}

  </>

)}









{abaAtiva === "diagnostico" && (

<>

<h2 className="
  text-2xl
  font-bold
  text-[#075334]
">
  Diagnóstico
</h2>


{typeof diagnostico === "string" ? (

<p className="
  mt-4
  text-gray-600
">

  {diagnostico || "Conteúdo em desenvolvimento."}

</p>


) : (

<>

<p className="
  mt-4
  leading-relaxed
  text-gray-600
">

  {diagnostico.introducao}

</p>



<div className="
  mt-6
  grid
  gap-6
  md:grid-cols-2
">


{["Triagem","Confirmatório"].map((finalidade)=>{


const metodos = diagnostico.metodos

.map((id)=>

  diagnosticos.find(
    (item)=>item.id === id
  )

)

.filter(

  (metodo)=>

    metodo &&
    metodo.finalidade.includes(finalidade)

)

.sort((a,b)=>

  a!.nome.localeCompare(
    b!.nome
  )

);



return (

<div

key={finalidade}

className="
rounded-2xl
bg-white
p-5
"

>


<h3 className="
font-bold
text-[#075334]
mb-4
">

{finalidade === "Triagem"
? "🔎 Métodos de Triagem"
: "✓ Métodos Confirmatórios"}

</h3>



<div className="space-y-3">


{metodos.map((metodo)=>(


<Link

key={metodo!.id}

href={`/metodos-diagnosticos/${metodo!.id}`}

className="
block
rounded-xl
bg-[#F8FBF9]
p-4
hover:bg-[#EDF8F0]
transition
"

>


<h4 className="
font-bold
text-[#075334]
">

🔬 {metodo!.nome}

</h4>



<p className="
mt-1
text-sm
text-gray-500
">

{metodo!.categoria}

</p>



<span

className={`

inline-block
mt-3
rounded-full
px-3
py-1
text-xs
font-bold

${
finalidade === "Triagem"

?

"bg-yellow-100 text-yellow-700"

:

"bg-green-100 text-green-700"

}

`}

>

{finalidade}

</span>


</Link>


))}


</div>


</div>


);


})}


</div>


</>

)}


</>

)}


{abaAtiva === "tratamento" && (

<>

<h2 className="
  text-2xl
  font-bold
  text-[#075334]
">

Tratamento

</h2>



{

typeof tratamento === "string"


?


<p className="
mt-4
text-gray-600
">

{tratamento || "Conteúdo em desenvolvimento."}

</p>


:


<>

<p className="
mt-4
leading-relaxed
text-gray-600
">

{tratamento.introducao}

</p>



<ListaBlocos

  blocos={tratamento.blocos}

/>


</>

}


</>

)}
        {abaAtiva === "prevencao" && (

          <>

            <h2 className="
              text-2xl
              font-bold
              text-[#075334]
            ">

              Prevenção

            </h2>





            {

            typeof prevencao === "string"


            ?


            <p className="
              mt-4
              text-gray-600
            ">

              {prevencao || "Conteúdo em desenvolvimento."}

            </p>



            :



            <>


              <p className="
                mt-4
                leading-relaxed
                text-gray-600
              ">

                {prevencao.introducao}

              </p>





              <div className="
                mt-6
                grid
                gap-5
              ">



                {prevencao.blocos.map((bloco,index)=>(


                  <PrevencaoCard

                    key={index}

                    bloco={bloco}

                  />


                ))}



              </div>


            </>


            }


          </>

        )}
              </div>

    );

  }






  return (

    <section
      className="
        mx-auto
        max-w-[1200px]
        px-5
        pt-2
        pb-8
        md:px-10
        md:pt-3
        md:pb-10
      "
    >



      <div
        className="
          rounded-2xl
          bg-white
          p-4
          shadow-sm
        "
      >




        {/* MOBILE */}


        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-3
            md:hidden
            tabs-scroll
          "
        >



          {abas.map((aba)=>(


            <button

              key={aba.id}


              onClick={() =>
                setAbaAtiva(aba.id)
              }


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


                ${
                  abaAtiva === aba.id

                  ?

                  "bg-[#075334] text-white"

                  :

                  "bg-[#F8FBF9] text-gray-600"

                }

              `}


            >


              <span className="text-lg">

                {aba.emoji}

              </span>



              <span className="mt-1">

                {aba.nome}

              </span>



            </button>


          ))}


        </div>






        {/* INDICADOR MOBILE */}


        <div

          className="
            mt-2
            h-1
            w-full
            overflow-hidden
            rounded-full
            bg-[#EDF8F0]
            md:hidden
          "

        >


          <div

            className="
              h-full
              w-1/3
              rounded-full
              bg-[#075334]
            "

          />


        </div>







        {/* DESKTOP */}



        <div

          className="
            hidden
            gap-2
            md:grid
            md:grid-cols-6
            lg:grid-cols-12
          "

        >



          {abas.map((aba)=>(


            <button


              key={aba.id}


              onClick={() =>
                setAbaAtiva(aba.id)
              }



              className={`

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



              <div className="text-lg">

                {aba.emoji}

              </div>



              {aba.nome}



            </button>


          ))}



        </div>



      </div>






    <div className="mt-6">

  {renderConteudo()}

</div>





    </section>


  );


}