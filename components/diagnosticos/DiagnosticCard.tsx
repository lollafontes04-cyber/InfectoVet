import Image from "next/image";
import Link from "next/link";


type DiagnosticCardProps = {

  id: string;

  nome: string;

  categoria: string;

  tipo: string;

  finalidade: string[];

  descricao: string;

  imagem?: string;

};




export default function DiagnosticCard({

  id,

  nome,

  categoria,

  tipo,

  finalidade,

  descricao,

  imagem,

}: DiagnosticCardProps) {



  return (

    <Link

      href={`/metodos-diagnosticos/${id}`}

      className="
        block
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
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


          <div className="
            flex
            h-full
            items-center
            justify-center
            text-5xl
          ">

            🔬

          </div>


        )}


      </div>








      <div className="p-6">





        <h2 className="text-xl font-bold text-[#075334]">

          {nome}

        </h2>







        <p className="mt-2 text-sm text-gray-500">

          {categoria}

        </p>









        <div className="mt-4 flex flex-wrap gap-2">





          {finalidade.includes("Triagem") && (

            <span className="
              rounded-full
              bg-yellow-100
              px-3
              py-1
              text-xs
              font-semibold
              text-yellow-700
            ">

              🔎 Triagem

            </span>

          )}








          {finalidade.includes("Confirmatório") && (

            <span className="
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              font-semibold
              text-green-700
            ">

              ✅ Confirmatório

            </span>

          )}








          <span className="
            rounded-full
            bg-[#EDF8F0]
            px-3
            py-1
            text-xs
            font-semibold
            text-[#075334]
          ">

            {tipo}

          </span>






        </div>








        <p className="mt-4 text-sm leading-relaxed text-gray-600">

          {descricao}

        </p>








        <p className="mt-5 text-sm font-semibold text-[#075334]">

          Ver detalhes →

        </p>





      </div>





    </Link>

  );

}