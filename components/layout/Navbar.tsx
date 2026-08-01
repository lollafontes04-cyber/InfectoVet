"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { doencas } from "@/data/doencas";


const menuItems = [
  {
    nome: "Início",
    link: "/",
  },
  {
    nome: "Doenças",
    link: "/doencas",
  },
  {
    nome: "Métodos Diagnósticos",
    link: "/metodos-diagnosticos",
  },
  {
    nome: "Questões",
    link: "/questoes",
  },

  {
  nome: "Imunologia",
  link: "/imunologia",
},

  {
    nome: "Sobre",
    link: "/sobre",
  },
];




export default function Navbar() {


  const router = useRouter();


  const [menuAberto, setMenuAberto] =
    useState(false);


  const [buscaMobileAberta, setBuscaMobileAberta] =
    useState(false);


  const [busca, setBusca] =
    useState("");


  const [resultados, setResultados] =
    useState<typeof doencas>([]);



  const inputBuscaMobile =
    useRef<HTMLInputElement>(null);



  const buscaMobileRef =
    useRef<HTMLDivElement>(null);






  function pesquisar(valor: string) {


    setBusca(valor);



    if (!valor.trim()) {

      setResultados([]);

      return;

    }




    const termo =
      valor.toLowerCase();





    const encontrados =
      doencas.filter((doenca) => {


        const texto = [

          doenca.nome,

          doenca.agente,

          doenca.categoria,

          ...doenca.hospedeiros,

        ]
          .join(" ")
          .toLowerCase();



        return texto.includes(termo);


      });





    setResultados(
      encontrados.slice(0, 6)
    );


  }






  function abrirBusca() {


    if (!busca.trim()) return;



    router.push(
      `/busca?q=${encodeURIComponent(busca)}`
    );


    setResultados([]);

    setBuscaMobileAberta(false);


  }






  function abrirBuscaMobile() {


    setBuscaMobileAberta(true);



    setTimeout(() => {

      inputBuscaMobile.current?.focus();

    }, 150);


  }
    useEffect(() => {


    function fecharBuscaAoClicarFora(
      event: MouseEvent
    ) {


      if (

        buscaMobileRef.current &&

        !buscaMobileRef.current.contains(
          event.target as Node
        )

      ) {

        setBuscaMobileAberta(false);

      }


    }




    document.addEventListener(
      "mousedown",
      fecharBuscaAoClicarFora
    );



    return () => {


      document.removeEventListener(
        "mousedown",
        fecharBuscaAoClicarFora
      );


    };


  }, []);








  return (

    <header
      className="
        relative
        z-50
        border-b
        border-gray-200
        bg-white
      "
    >




      <div
        className="
          flex
          h-[88px]
          items-center
          px-6
        "
      >





        {/* LOGO */}

        <Link href="/">

          <Image

            src="/images/logo/logo-infectovet.png"

            alt="InfectoVet"

            width={220}

            height={90}

            className="
              w-[170px]
              lg:w-[210px]
            "

          />

        </Link>






        {/* BUSCA DESKTOP */}

        <div
          className="
            relative
            ml-12
            hidden
            lg:block
          "
        >


          <div
            className="
              flex
              h-11
              w-[400px]
              items-center
              rounded-lg
              border
              px-6
            "
          >



            <input

              value={busca}

              onChange={(e) =>
                pesquisar(e.target.value)
              }


              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  abrirBusca();

                }

              }}


              placeholder="Buscar doença, agente..."


              className="
                flex-1
                outline-none
              "


            />



            <button
              onClick={abrirBusca}
            >

              <Search size={21}/>

            </button>


          </div>






          {resultados.length > 0 && (

            <div
              className="
                absolute
                top-12
                w-[340px]
                overflow-hidden
                rounded-xl
                border
                bg-white
                shadow-lg
              "
            >



              {resultados.map((item) => (

                <button

                  key={item.id}


                  onClick={() => {


                    router.push(
                      `/busca?q=${encodeURIComponent(item.nome)}`
                    );


                    setBusca("");

                    setResultados([]);


                  }}



                  className="
                    flex
                    w-full
                    flex-col
                    px-4
                    py-3
                    text-left
                    hover:bg-green-50
                  "


                >


                  <span
                    className="
                      font-semibold
                      text-[#075334]
                    "
                  >

                    {item.nome}

                  </span>



                  <span
                    className="
                      text-xs
                      text-gray-500
                    "
                  >

                    {item.categoria}

                  </span>



                </button>


              ))}



            </div>

          )}




        </div>
                {/* MENU DESKTOP */}

        <nav
          className="
            ml-auto
            hidden
            gap-6
            lg:flex
          "
        >

          {menuItems.map((item) => (

            <Link

              key={item.nome}

              href={item.link}

              className="
                font-semibold
                text-gray-900
                hover:text-[#075334]
              "

            >

              {item.nome}

            </Link>

          ))}

        </nav>






        {/* BOTÕES MOBILE */}

        <div
          className="
            ml-auto
            flex
            items-center
            gap-2
            lg:hidden
          "
        >



          {/* LUPA */}

          <button

            type="button"

            onClick={abrirBuscaMobile}

            className="
              rounded-lg
              p-2
              text-gray-900
            "

          >

            <Search size={28}/>

          </button>





          {/* MENU */}

          <button

            type="button"

            onClick={() => {


  setMenuAberto(!menuAberto);

}}

            className="
              rounded-lg
              p-2
              text-gray-900
            "

          >

            {menuAberto ? (

              <X size={32}/>

            ) : (

              <Menu size={32}/>

            )}

          </button>



        </div>


      </div>






      {/* BUSCA MOBILE */}

      {buscaMobileAberta && (

        <div

          ref={buscaMobileRef}

          className="
            absolute
            right-16
            top-[75px]
            z-[999]
            w-[280px]
            rounded-xl
            border
            bg-white
            p-3
            shadow-lg
            lg:hidden
          "

        >


          <div
            className="
              flex
              items-center
              rounded-lg
              border
              px-3
            "
          >


            <input

              ref={inputBuscaMobile}

              value={busca}

              onChange={(e) =>
                pesquisar(e.target.value)
              }


              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  abrirBusca();

                }

              }}


              placeholder="Buscar doença, agente..."


              className="
                h-10
                flex-1
                text-sm
                outline-none
              "

            />



            <button
              type="button"
              onClick={abrirBusca}
            >

              <Search size={20}/>

            </button>


          </div>






          {/* SUGESTÕES */}

          {resultados.length > 0 && (

            <div
              className="
                mt-2
                overflow-hidden
                rounded-lg
                border
                bg-white
              "
            >


              {resultados.map((item) => (

                <button

                  key={item.id}

                  type="button"

                  onClick={() => {

                    router.push(
                      `/busca?q=${encodeURIComponent(item.nome)}`
                    );


                    setBusca("");

                    setResultados([]);

                    setBuscaMobileAberta(false);


                  }}


                  className="
                    flex
                    w-full
                    flex-col
                    px-3
                    py-2
                    text-left
                    hover:bg-green-50
                  "

                >

                  <span
                    className="
                      font-semibold
                      text-[#075334]
                    "
                  >

                    {item.nome}

                  </span>



                  <span
                    className="
                      text-xs
                      text-gray-500
                    "
                  >

                    {item.categoria}

                  </span>


                </button>


              ))}


            </div>

          )}



        </div>


      )}






      {/* MENU MOBILE */}

      {menuAberto && (

        <div
          className="
            absolute
            left-0
            top-[88px]
            z-[999]
            w-full
            border-t
            bg-white
            px-6
            py-6
            shadow-lg
            lg:hidden
          "
        >

          <nav
            className="
              flex
              flex-col
              gap-5
            "
          >


            {menuItems.map((item) => (

              <Link

                key={item.nome}

                href={item.link}

                onClick={() =>
                  setMenuAberto(false)
                }

                className="
                  text-lg
                  font-semibold
                  text-gray-900
                "

              >

                {item.nome}

              </Link>


            ))}


          </nav>


        </div>


      )}





    </header>

  );

}