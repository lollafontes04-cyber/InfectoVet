import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DiagnosticHero from "@/components/diagnosticos/DiagnosticHero";

import { diagnosticos } from "@/data/diagnosticos";
import { doencas } from "@/data/doencas";



function formatarCategoria(categoria: string) {

  return categoria

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "");

}





export default async function MetodoPage({

  params,

}: {

  params: Promise<{

    metodo: string;

  }>;

}) {



  const { metodo } = await params;




  const diagnostico = diagnosticos.find(

    (item) => item.id === metodo

  );







  if (!diagnostico) {


    return (

      <>

        <Navbar />


        <main className="min-h-screen bg-[#F8FBF9] px-10 py-20">


          <h1 className="text-3xl font-bold text-[#075334]">

            Método não encontrado

          </h1>


        </main>


        <Footer />


      </>

    );

  }








  return (

    <>


      <Navbar />





      <main className="min-h-screen bg-[#F8FBF9]">





        <DiagnosticHero

          nome={diagnostico.nome}

          categoria={diagnostico.categoria}

          tipo={diagnostico.tipo}

          caracteristicas={diagnostico.caracteristicas}

          finalidade={diagnostico.finalidade}

          imagem={diagnostico.imagem}

        />









        <section className="mx-auto max-w-[1200px] px-10 py-12">





          <div className="rounded-3xl bg-white p-8 shadow-sm">





            <h2 className="text-2xl font-bold text-[#075334]">

              Sobre o método

            </h2>




            <p className="mt-4 leading-relaxed text-gray-600">

              {diagnostico.descricao}

            </p>









            <div className="mt-8">


              <h2 className="text-2xl font-bold text-[#075334]">

                Princípio

              </h2>


              <p className="mt-3 text-gray-600">

                {diagnostico.principio}

              </p>


            </div>









            <div className="mt-8">


              <h2 className="text-2xl font-bold text-[#075334]">

                Aplicações

              </h2>




              <ul className="mt-3 space-y-2 text-gray-600">


                {diagnostico.aplicacao.map((item) => (

                  <li key={item}>

                    ✓ {item}

                  </li>

                ))}


              </ul>


            </div>









            <div className="mt-8">


              <h2 className="text-2xl font-bold text-[#075334]">

                Doenças relacionadas

              </h2>






              <div className="mt-4 flex flex-wrap gap-3">





                {diagnostico.doencasRelacionadas.map((nome) => {



                  const doenca = doencas.find(

                    (item) => item.nome === nome

                  );



                  if (!doenca) return null;






                  return (


                    <Link


                      key={doenca.id}


                      href={`/doencas/${formatarCategoria(doenca.categoria)}/${doenca.id}`}



                      className="

                        flex

                        items-center

                        gap-2

                        rounded-full

                        bg-[#EDF8F0]

                        px-4

                        py-2

                        text-sm

                        font-semibold

                        text-[#075334]

                        transition

                        hover:bg-green-100

                      "


                    >



                      <span>

                        {doenca.icone}

                      </span>



                      <span>

                        {doenca.nome}

                      </span>



                    </Link>


                  );



                })}



              </div>



            </div>









            <div className="mt-8 grid gap-6 md:grid-cols-2">






              <div className="rounded-2xl bg-green-50 p-6">


                <h2 className="text-xl font-bold text-[#075334]">

                  Vantagens

                </h2>





                <ul className="mt-3 space-y-2 text-gray-600">


                  {diagnostico.vantagens.map((item) => (

                    <li key={item}>

                      ✓ {item}

                    </li>

                  ))}


                </ul>


              </div>









              <div className="rounded-2xl bg-red-50 p-6">


                <h2 className="text-xl font-bold text-[#075334]">

                  Limitações

                </h2>





                <ul className="mt-3 space-y-2 text-gray-600">


                  {diagnostico.limitacoes.map((item) => (

                    <li key={item}>

                      • {item}

                    </li>

                  ))}


                </ul>


              </div>





            </div>







          </div>





        </section>





      </main>





      <Footer />


    </>

  );

}