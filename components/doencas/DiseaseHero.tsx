import Image from "next/image";
import Link from "next/link";


type DiseaseHeroProps = {

  nome: string;

  agente: string;

  categoria: string;

  zoonose: boolean;

  vacina: boolean;

  eutanasia: boolean;

  notificacaoObrigatoria: boolean;

  hospedeiros: string[];

  imagem: string;

};





function getEmojiHospedeiro(animal: string) {

  const nome = animal.toLowerCase();


  if (
    nome.includes("humano") ||
    nome.includes("humana") ||
    nome.includes("pessoa")
  ) {
    return "👤";
  }


  if (
    nome.includes("cão") ||
    nome.includes("cao") ||
    nome.includes("cachorro")
  ) {
    return "🐶";
  }


  if (
    nome.includes("gato") ||
    nome.includes("felino")
  ) {
    return "🐱";
  }


  if (
    nome.includes("bovino") ||
    nome.includes("boi") ||
    nome.includes("bovinos")
  ) {
    return "🐄";
  }


  if (
    nome.includes("caprino") ||
    nome.includes("cabra") ||
    nome.includes("caprinos")
  ) {
    return "🐐";
  }


  if (
    nome.includes("ovino") ||
    nome.includes("ovelha") ||
    nome.includes("ovinos")
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






export default function DiseaseHero({

  nome,

  agente,

  categoria,

  zoonose,

  vacina,

  eutanasia,

  notificacaoObrigatoria,

  hospedeiros,

  imagem,

}: DiseaseHeroProps) {



  const categoriaSlug = categoria

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/\s+/g, "-");




  const nomeLongo =
    nome === "Encefalopatia Espongiforme Bovina (BSE)";





  return (

    <section
      className={`
        relative
        overflow-hidden

        ${
          nomeLongo
            ? "h-[560px] md:h-[430px]"
            : "h-[430px]"
        }
      `}
    >



      <Image

        src={imagem}

        alt={nome}

        fill

        priority

        className="object-cover"

        style={{
          objectPosition: "center 35%",
        }}

      />




      <div className="absolute inset-0 bg-black/55" />






      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-[1200px]
          items-center
          px-6
          md:px-10
        "
      >



        <div className="max-w-xl text-white">

                  {/* BREADCRUMB */}

          <p
            className="
              mb-4
              flex
              items-center
              gap-2
              text-sm
              text-gray-200
            "
          >

            <Link

              href="/doencas"

              className="
                underline
                underline-offset-4
                decoration-white/60
                transition
                hover:decoration-white
              "

            >

              Doenças

            </Link>



            <span>›</span>



            <Link

              href={`/doencas/${categoriaSlug}`}

              className="
                underline
                underline-offset-4
                decoration-white/60
                transition
                hover:decoration-white
              "

            >

              {categoria}

            </Link>



            <span>›</span>



            <span>

              {nome}

            </span>


          </p>







          {/* TÍTULO */}

          <h1
            className={`
              font-bold

              ${
                nomeLongo
                  ? "text-4xl leading-tight md:text-5xl"
                  : "text-5xl"
              }
            `}
          >

            {nome}

          </h1>







          {/* AGENTE */}

          <p
            className={`
              italic
              text-gray-200

              ${
                nomeLongo
                  ? "mt-2 text-lg md:mt-3 md:text-xl"
                  : "mt-3 text-xl"
              }
            `}
          >

            {agente}

          </p>








          {/* SELOS */}

          <div
            className={`
              flex
              flex-wrap
              gap-3

              ${
                nomeLongo
                  ? "mt-4 md:mt-6"
                  : "mt-6"
              }
            `}
          >



            <span
              className="
                rounded-xl
                bg-white/20
                px-4
                py-2
                text-sm
                font-semibold
                backdrop-blur
              "
            >

              🧫 {categoria}

            </span>






            {zoonose && (

              <span
                className="
                  rounded-xl
                  bg-yellow-500/80
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >

                ⚠️ Zoonose

              </span>

            )}







            {vacina && (

              <span
                className="
                  rounded-xl
                  bg-green-600/80
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >

                💉 Vacina

              </span>

            )}







            {eutanasia && (

              <span
                className="
                  rounded-xl
                  bg-red-600/80
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >

                ☠️ Eutanásia

              </span>

            )}







            {notificacaoObrigatoria && (

              <span
                className="
                  rounded-xl
                  bg-orange-600/80
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >

                📢 Notificação obrigatória

              </span>

            )}


          </div>








          {/* HOSPEDEIROS */}

          <p
            className="
              mt-6
              text-sm
              font-semibold
            "
          >

            Principais espécies acometidas:

          </p>







          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-3
            "
          >


            {hospedeiros.map((animal) => (

              <span

                key={animal}

                className="
                  rounded-full
                  border
                  border-white/40
                  px-4
                  py-2
                  text-sm
                "

              >

                {getEmojiHospedeiro(animal)} {animal}

              </span>


            ))}


          </div>





        </div>


      </div>


    </section>

  );

}