import Link from "next/link";


const categorias = [

  {
    nome: "Bacterianas",
    icone: "🧫",
    link: "/doencas/bacterianas",
  },

  {
    nome: "Virais",
    icone: "🦠",
    link: "/doencas/virais",
  },

  {
    nome: "Protozooses",
    icone: "🔬",
    link: "/doencas/protozooses",
  },

  {
    nome: "Helmintoses",
    icone: "🪱",
    link: "/doencas/helmintoses",
  },

  {
    nome: "Ectoparasitoses",
    icone: "🕷️",
    link: "/doencas/ectoparasitoses",
  },

  {
    nome: "Doenças Priônicas",
    icone: "🧬",
    link: "/doencas/prionicas",
  },

  {
    nome: "Métodos Diagnósticos",
    icone: "🔬",
    link: "/metodos-diagnosticos",
  },

];



export default function Categories() {


  return (

    <section
      className="
        mx-auto
        max-w-[1200px]
        px-5
        pt-2
        pb-8

        lg:px-10
        lg:pt-4
      "
    >


      <div
        className="
          rounded-3xl
          bg-white
          p-5
          shadow-sm

          lg:p-8
        "
      >


        <div
          className="
            grid
            grid-cols-3
            gap-3

            lg:grid-cols-7
            lg:gap-5
          "
        >



          {categorias.map((categoria, index) => (


            <Link

              key={categoria.nome}

              href={categoria.link}

              className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                p-2
                transition
                hover:bg-[#EDF8F0]

                ${
                  index === categorias.length - 1
                    ? "col-start-2 lg:col-auto"
                    : ""
                }
              `}

            >


              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EDF8F0]
                  text-2xl

                  lg:h-16
                  lg:w-16
                  lg:text-3xl
                "
              >

                {categoria.icone}

              </div>



              <span
                className="
                  text-center
                  text-xs
                  font-semibold
                  leading-tight
                  text-[#075334]

                  lg:text-sm
                "
              >

                {categoria.nome}

              </span>


            </Link>


          ))}



        </div>


      </div>


    </section>

  );

}