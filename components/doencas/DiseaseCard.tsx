import Image from "next/image";
import Link from "next/link";


type DiseaseCardProps = {

  id: string;

  nome: string;

  agente: string;

  hospedeiros: string[];

  zoonose: boolean;

  vacina: boolean;

  eutanasia: boolean;

  notificacaoObrigatoria: boolean;

  imagem?: string;

  categoria?: string;

};




export default function DiseaseCard({

  id,

  nome,

  agente,

  hospedeiros,

  zoonose,

  vacina,

  eutanasia,

  notificacaoObrigatoria,

  imagem,

  categoria = "Bacterianas",

}: DiseaseCardProps) {



  const categoriaSlug = categoria

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/\s+/g, "-");





  return (


    <Link

      href={`/doencas/${categoriaSlug}/${id}`}

      className="
        block
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
      "

    >



      <div className="relative h-44 w-full bg-[#EDF8F0]">


        {imagem ? (


          <Image

            src={imagem}

            alt={nome}

            fill

            className="object-cover"

          />


        ) : (


          <div className="flex h-full items-center justify-center text-5xl">

            🔬

          </div>


        )}


      </div>







      <div className="p-6">



        <h2 className="text-xl font-bold text-[#075334]">

          {nome}

        </h2>






        <p className="mt-3 text-sm text-gray-600">

          Agente:

          <strong className="ml-1 text-[#333]">

            {agente}

          </strong>

        </p>






        <p className="mt-2 text-sm text-gray-600">

          Hospedeiros:

          <strong className="ml-1 text-[#333]">

            {hospedeiros.join(", ")}

          </strong>

        </p>








        <div className="mt-4 flex flex-wrap gap-2">





          <span className="rounded-full bg-[#EDF8F0] px-3 py-1 text-xs font-semibold text-[#075334]">

            {categoria}

          </span>







          {zoonose && (


            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">

              ⚠️ Zoonose

            </span>


          )}







          {vacina && (


            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

              💉 Vacina

            </span>


          )}







          {eutanasia && (


            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">

              ☠️ Eutanásia

            </span>


          )}







          {notificacaoObrigatoria && (


            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">

              📢 Notificação obrigatória

            </span>


          )}





        </div>





      </div>





    </Link>


  );

}