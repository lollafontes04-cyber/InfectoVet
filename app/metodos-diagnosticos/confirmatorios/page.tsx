import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DiagnosticCard from "@/components/diagnosticos/DiagnosticCard";

import { diagnosticos } from "@/data/diagnosticos";



export default function ConfirmatoriosPage() {



  const metodosConfirmatorios = diagnosticos.filter(

    (metodo) =>

      metodo.finalidade.includes("Confirmatório")

  );





  return (

    <>

      <Navbar />





      <main className="min-h-screen bg-[#F8FBF9]">





        <section className="mx-auto max-w-[1200px] px-10 py-12">





          <div className="mb-10">


            <h1 className="text-4xl font-bold text-[#075334]">

              Testes Confirmatórios

            </h1>



            <p className="mt-3 max-w-3xl text-gray-600">

              Métodos com alta especificidade utilizados para confirmar a
              presença ou ausência de determinada enfermidade.

            </p>


          </div>









          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">





            {metodosConfirmatorios.map((metodo) => (


              <DiagnosticCard

                key={metodo.id}

                id={metodo.id}

                nome={metodo.nome}

                categoria={metodo.categoria}

                tipo={metodo.tipo}

                finalidade={metodo.finalidade}

                descricao={metodo.descricao}

                imagem={metodo.imagem}

              />


            ))}





          </div>





        </section>





      </main>





      <Footer />



    </>

  );

}