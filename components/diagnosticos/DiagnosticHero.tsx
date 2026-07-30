import Image from "next/image";
import Link from "next/link";


type DiagnosticHeroProps = {

  nome: string;

  categoria: string;

  tipo: string;

  finalidade: string[];

  imagem: string;

};




export default function DiagnosticHero({

  nome,

  categoria,

  tipo,

  finalidade,

  imagem,

}: DiagnosticHeroProps) {



  return (

    <section className="relative h-[400px] overflow-hidden">





      <Image

        src={imagem}

        alt={nome}

        fill

        priority

        className="object-cover"

      />





      <div className="absolute inset-0 bg-black/55" />







      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-10">





        <div className="max-w-3xl text-white">






          <div className="mb-4 flex items-center gap-2 text-sm text-gray-200">


            <Link

              href="/metodos-diagnosticos"

              className="
                underline
                underline-offset-4
                decoration-white/60
              "

            >

              Métodos Diagnósticos

            </Link>



            <span>

              ›

            </span>



            <span>

              {nome}

            </span>



          </div>









          <h1 className="text-5xl font-bold">

            {nome}

          </h1>









          <div className="mt-6 flex flex-wrap gap-3">







            <span className="
              rounded-xl
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              backdrop-blur
            ">

              🧪 {categoria}

            </span>









            <span className="
              rounded-xl
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              backdrop-blur
            ">

              🔬 {tipo}

            </span>









            {finalidade.includes("Triagem") && (

              <span className="
                rounded-xl
                bg-yellow-500/30
                px-4
                py-2
                text-sm
                font-semibold
              ">

                🔎 Triagem

              </span>

            )}









            {finalidade.includes("Confirmatório") && (

              <span className="
                rounded-xl
                bg-green-500/30
                px-4
                py-2
                text-sm
                font-semibold
              ">

                ✅ Confirmatório

              </span>

            )}







          </div>





        </div>





      </div>





    </section>

  );

}