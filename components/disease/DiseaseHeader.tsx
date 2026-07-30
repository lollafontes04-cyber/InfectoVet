import Image from "next/image";
import Badge from "@/components/doencas/Badge";


function getEmojiHospedeiro(animal: string) {

  const nome = animal.toLowerCase();


  if (
    nome.includes("humano") ||
    nome.includes("pessoa")
  ) {
    return "🧑";
  }


  if (
    nome.includes("cão") ||
    nome.includes("cao") ||
    nome.includes("cachorro")
  ) {
    return "🐕";
  }


  if (
    nome.includes("gato") ||
    nome.includes("felino")
  ) {
    return "🐈";
  }


  if (
    nome.includes("bovino") ||
    nome.includes("bovinos") ||
    nome.includes("boi")
  ) {
    return "🐄";
  }


  if (
    nome.includes("caprino") ||
    nome.includes("cabra")
  ) {
    return "🐐";
  }


  if (
    nome.includes("ovino") ||
    nome.includes("ovelha")
  ) {
    return "🐑";
  }


  if (
    nome.includes("suíno") ||
    nome.includes("suino") ||
    nome.includes("porco")
  ) {
    return "🐖";
  }


  if (
    nome.includes("equino") ||
    nome.includes("cavalo")
  ) {
    return "🐎";
  }


  if (
    nome.includes("ave") ||
    nome.includes("galinha")
  ) {
    return "🐔";
  }


  if (
    nome.includes("roedor") ||
    nome.includes("rato")
  ) {
    return "🐭";
  }


  return "🐾";

}





export default function DiseaseHeader() {
  return (
    <section className="border-b bg-white">

      <div className="mx-auto max-w-7xl px-6 py-8">


        <div className="mb-5 text-sm text-gray-500">

          Doenças 
          <span className="mx-2">›</span> 
          Bacterianas

          <span className="mx-2">›</span>

          <span className="font-medium text-gray-900">
            Brucelose
          </span>

        </div>




        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">


          <div className="relative h-48 w-full overflow-hidden rounded-2xl lg:w-80">

            <Image

              src="/images/brucelose.jpg"

              alt="Bovinos representando a brucelose"

              fill

              className="object-cover"

            />

          </div>





          <div className="flex-1">


            <h1 className="text-4xl font-bold text-green-900">

              Brucelose

            </h1>




            <p className="mt-1 text-lg italic text-gray-700">

              Brucella spp.

            </p>





            <div className="mt-4 flex flex-wrap gap-2">

              <Badge>
                Bactéria Gram negativa
              </Badge>

              <Badge variant="warning">
                Zoonose
              </Badge>

              <Badge variant="success">
                Notificação obrigatória
              </Badge>

              <Badge variant="danger">
                Muito cobrada
              </Badge>

            </div>





            <div className="mt-5">


              <p className="text-sm font-semibold text-gray-700">

                Espécies acometidas:

              </p>




              <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">


                {[
                  "Bovinos",
                  "Caprinos",
                  "Ovinos",
                  "Suínos",
                  "Cães",
                  "Humanos",
                ].map((animal)=>(
                  
                  <span key={animal}>

                    {getEmojiHospedeiro(animal)} {animal}

                  </span>

                ))}


              </div>


            </div>



          </div>





          <div className="flex gap-3 lg:self-start">


            <button className="rounded-xl border px-4 py-3 text-sm font-medium hover:bg-gray-50">

              ☆ Adicionar aos favoritos

            </button>



            <button className="rounded-xl border px-4 py-3 text-sm font-medium hover:bg-gray-50">

              Compartilhar

            </button>


          </div>


        </div>


      </div>


    </section>
  );
}