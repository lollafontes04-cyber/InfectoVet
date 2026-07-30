import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export default function MetodosDiagnosticosPage() {


  return (

    <>

      <Navbar />



      <main className="min-h-screen bg-[#F8FBF9]">



        <section className="mx-auto max-w-[1200px] px-10 py-12">



          <div className="mb-12">


            <h1 className="text-4xl font-bold text-[#075334]">

              Métodos Diagnósticos

            </h1>



            <p className="mt-3 max-w-3xl text-gray-600">

              Principais métodos utilizados no diagnóstico de enfermidades
              infecciosas e parasitárias veterinárias.

            </p>


          </div>







          <div className="grid gap-8 md:grid-cols-2">









            {/* TESTES DE TRIAGEM */}



            <Link

              href="/metodos-diagnosticos/triagem"

              className="
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "

            >



              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#EDF8F0]
                text-3xl
              ">

                🔎

              </div>







              <h2 className="mt-6 text-2xl font-bold text-[#075334]">

                Testes de Triagem

              </h2>







              <p className="mt-4 leading-relaxed text-gray-600">


                <strong>Alta sensibilidade:</strong> corresponde ao
                percentual de resultados positivos dentre os indivíduos que
                possuem uma determinada doença ou condição clínica.


                <br /><br />


                Identifica os verdadeiros negativos.


                <br /><br />


            
              </p>







              <span className="
                mt-6
                inline-block
                rounded-full
                bg-[#EDF8F0]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#075334]
              ">

                Ver testes de triagem →

              </span>





            </Link>









            {/* TESTES CONFIRMATÓRIOS */}



            <Link

              href="/metodos-diagnosticos/confirmatorios"

              className="
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "

            >



              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#EDF8F0]
                text-3xl
              ">

                ✅

              </div>







              <h2 className="mt-6 text-2xl font-bold text-[#075334]">

                Testes Confirmatórios

              </h2>







              <p className="mt-4 leading-relaxed text-gray-600">


                <strong>Alta especificidade:</strong> capacidade do mesmo
                teste ser negativo nos indivíduos que não apresentam a
                doença que está sendo investigada.


                <br /><br />


                Identifica os verdadeiros positivos.


                <br /><br />


              </p>







              <span className="
                mt-6
                inline-block
                rounded-full
                bg-[#EDF8F0]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#075334]
              ">

                Ver testes confirmatórios →

              </span>





            </Link>









          </div>





        </section>





      </main>





      <Footer />



    </>

  );

}