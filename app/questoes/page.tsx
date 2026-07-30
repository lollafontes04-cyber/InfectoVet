"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { doencas } from "@/data/doencas";



export default function QuestoesPage() {


  const router = useRouter();



  const categorias = [
    "Bacterianas",
    "Virais",
    "Protozooses",
    "Helmintoses",
    "Ectoparasitoses",
    "Prionicas",
  ];



  const listaDoencas = doencas.map(
    (doenca) => doenca.nome
  );



  const [categoriasSelecionadas, setCategoriasSelecionadas] =
    useState<string[]>([]);



  const [doencasSelecionadas, setDoencasSelecionadas] =
    useState<string[]>([]);



  const [categoriaAberta, setCategoriaAberta] =
    useState(false);



  const [doencaAberta, setDoencaAberta] =
    useState(false);



  const [quantidade, setQuantidade] =
    useState("10");




  const categoriaRef = useRef<HTMLDivElement>(null);

  const doencaRef = useRef<HTMLDivElement>(null);







  useEffect(() => {


    function fecharMenus(evento: MouseEvent) {


      const alvo = evento.target as Node;



      if (
        categoriaRef.current &&
        !categoriaRef.current.contains(alvo)
      ) {

        setCategoriaAberta(false);

      }



      if (
        doencaRef.current &&
        !doencaRef.current.contains(alvo)
      ) {

        setDoencaAberta(false);

      }


    }





    document.addEventListener(
      "mousedown",
      fecharMenus
    );



    return () => {

      document.removeEventListener(
        "mousedown",
        fecharMenus
      );

    };


  }, []);








  function selecionarCategoria(categoria: string) {


    if (categoria === "Todas as categorias") {


      if (
        categoriasSelecionadas.length === categorias.length
      ) {


        setCategoriasSelecionadas([]);

        setDoencasSelecionadas([]);


      } else {


        setCategoriasSelecionadas(categorias);

        setDoencasSelecionadas(listaDoencas);


      }


      return;

    }







    setCategoriasSelecionadas((atual) => {



      const novasCategorias = atual.includes(categoria)

        ? atual.filter((item) => item !== categoria)

        : [...atual, categoria];





      const novasDoencas = doencas

        .filter((doenca) =>
          novasCategorias.includes(doenca.categoria)
        )

        .map((doenca) => doenca.nome);





      setDoencasSelecionadas(novasDoencas);



      return novasCategorias;


    });


  }








  function selecionarDoenca(doenca: string) {



    if (doenca === "Todas as doenças") {


      if (
        doencasSelecionadas.length === listaDoencas.length
      ) {


        setDoencasSelecionadas([]);


      } else {


        setDoencasSelecionadas(listaDoencas);


      }


      return;

    }






    setDoencasSelecionadas((atual) =>


      atual.includes(doenca)

        ? atual.filter((item) => item !== doenca)

        : [...atual, doenca]


    );


  }








  function resumoCategorias() {


    if (categoriasSelecionadas.length === 0) {

      return "Selecionar categorias";

    }



    if (
      categoriasSelecionadas.length === categorias.length
    ) {

      return "Todas as categorias";

    }



    if (
      categoriasSelecionadas.length > 2
    ) {

      return `${categoriasSelecionadas.slice(0, 2).join(", ")} + ${
        categoriasSelecionadas.length - 2
      }`;

    }



    return categoriasSelecionadas.join(", ");

  }








  function resumoDoencas() {


    if (doencasSelecionadas.length === 0) {

      return "Selecionar doenças";

    }



    if (
      doencasSelecionadas.length === listaDoencas.length
    ) {

      return "Todas as doenças";

    }



    if (
      doencasSelecionadas.length > 2
    ) {

      return `${doencasSelecionadas.slice(0, 2).join(", ")} + ${
        doencasSelecionadas.length - 2
      }`;

    }



    return doencasSelecionadas.join(", ");

  }








  function iniciarProva() {


    setCategoriaAberta(false);

    setDoencaAberta(false);



    router.push(
      `/questoes/prova?categorias=${categoriasSelecionadas.join(",")}&doencas=${doencasSelecionadas.join(",")}&quantidade=${quantidade}`
    );


  }
    return (

    <>

      <Navbar />


      <main className="min-h-screen bg-[#F8FBF9] px-10 py-14">


        <section className="mx-auto max-w-[1200px]">


          <h1 className="text-4xl font-bold text-[#075334]">

            Questões InfectoVet

          </h1>



          <p className="mt-4 text-gray-600">

            Teste seus conhecimentos sobre enfermidades infecciosas
            e parasitárias veterinárias.

          </p>






          <div className="mt-10 grid gap-6 md:grid-cols-3">






            {/* CATEGORIAS */}


            <div
              ref={categoriaRef}
              className="relative rounded-3xl bg-white p-6 shadow-sm"
            >


              <h2 className="font-bold text-[#075334]">

                Categorias

              </h2>





              <button

                onClick={() => {

                  setCategoriaAberta(!categoriaAberta);

                  setDoencaAberta(false);

                }}

                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-gray-200
                  px-5
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-700
                "

              >

                {resumoCategorias()}

                <span>
                  ▾
                </span>

              </button>







              {categoriaAberta && (

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    z-30
                    mt-2
                    rounded-xl
                    border
                    bg-white
                    p-3
                    shadow-lg
                  "
                >



                  <button

                    onClick={() =>
                      selecionarCategoria(
                        "Todas as categorias"
                      )
                    }

                    className="
                      w-full
                      rounded-lg
                      px-3
                      py-2
                      text-left
                      text-sm
                      hover:bg-[#EDF8F0]
                    "

                  >

                    Todas as categorias

                  </button>





                  {categorias.map((categoria) => (

                    <button

                      key={categoria}

                      onClick={() =>
                        selecionarCategoria(categoria)
                      }

                      className={`
                        mt-1
                        w-full
                        rounded-lg
                        px-3
                        py-2
                        text-left
                        text-sm
                        transition
                        ${
                          categoriasSelecionadas.includes(categoria)
                            ? "bg-[#075334] text-white"
                            : "hover:bg-[#EDF8F0]"
                        }
                      `}

                    >

                      {categoria}

                    </button>

                  ))}



                </div>

              )}



            </div>









            {/* DOENÇAS */}


            <div
              ref={doencaRef}
              className="relative rounded-3xl bg-white p-6 shadow-sm"
            >


              <h2 className="font-bold text-[#075334]">

                Doenças

              </h2>





              <button

                onClick={() => {

                  setDoencaAberta(!doencaAberta);

                  setCategoriaAberta(false);

                }}

                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-gray-200
                  px-5
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-700
                "

              >

                {resumoDoencas()}


                <span>
                  ▾
                </span>


              </button>







              {doencaAberta && (

                <div

                  className="
                    absolute
                    left-6
                    right-6
                    z-30
                    mt-2
                    max-h-[320px]
                    overflow-y-auto
                    rounded-xl
                    border
                    bg-white
                    p-3
                    shadow-lg
                  "

                >



                  <button

                    onClick={() =>
                      selecionarDoenca(
                        "Todas as doenças"
                      )
                    }

                    className="
                      w-full
                      rounded-lg
                      px-3
                      py-2
                      text-left
                      text-sm
                      font-semibold
                      hover:bg-[#EDF8F0]
                    "

                  >

                    Todas as doenças

                  </button>







                  {listaDoencas.map((doenca) => (

                    <button

                      key={doenca}

                      onClick={() =>
                        selecionarDoenca(doenca)
                      }

                      className={`
                        mt-1
                        w-full
                        rounded-lg
                        px-3
                        py-2
                        text-left
                        text-sm
                        transition
                        ${
                          doencasSelecionadas.includes(doenca)
                            ? "bg-[#075334] text-white"
                            : "hover:bg-[#EDF8F0]"
                        }
                      `}

                    >

                      {doenca}

                    </button>


                  ))}




                </div>

              )}



            </div>









            {/* QUANTIDADE */}


            <div className="rounded-3xl bg-white p-6 shadow-sm">


              <h2 className="font-bold text-[#075334]">

                Quantidade de questões

              </h2>




              <select

                value={quantidade}

                onChange={(e) =>
                  setQuantidade(e.target.value)
                }

                className="
                  mt-4
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-gray-700
                "

              >

                <option value="5">
                  5 questões
                </option>


                <option value="10">
                  10 questões
                </option>


                <option value="20">
                  20 questões
                </option>


                <option value="50">
                  50 questões
                </option>


              </select>



            </div>






          </div>








          <button

            onClick={iniciarProva}

            className="
              mt-10
              rounded-xl
              bg-[#075334]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#06442C]
            "

          >

            Iniciar prova


          </button>





        </section>



      </main>



      <Footer />


    </>

  );

}