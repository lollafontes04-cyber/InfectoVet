import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DiseaseCard from "@/components/doencas/DiseaseCard";
import { doencas } from "@/data/doencas";



function normalizar(texto: string) {

  return texto

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "");

}





export default async function BuscaPage({

  searchParams,

}: {

  searchParams: Promise<{ q?: string }>;

}) {


  const params = await searchParams;


  const busca = params.q || "";


  const termoBusca = normalizar(busca);





  const resultados = doencas.filter((doenca) => {


    const camposBusca = [

      doenca.nome,

      doenca.agente,

      doenca.categoria,

      ...doenca.hospedeiros,

      ...(doenca.palavrasChave || []),

    ];



    return camposBusca.some((campo) =>

      normalizar(campo).includes(termoBusca)

    );


  });








  return (

    <>


      <Navbar />



      <main className="min-h-screen bg-[#F8FBF9]">



        <section className="bg-[#EDF8F0] px-10 py-14">


          <div className="mx-auto max-w-[1200px]">


            <h1 className="text-4xl font-bold text-[#075334]">

              Resultados da busca

            </h1>



            <p className="mt-3 text-gray-600">

              Busca por:

              <strong className="ml-1">

                {busca}

              </strong>

            </p>


          </div>


        </section>







        <section className="mx-auto max-w-[1200px] px-10 py-12">


          {resultados.length > 0 ? (



            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">



              {resultados.map((doenca) => (



                <DiseaseCard

                  key={doenca.id}


                  id={doenca.id}


                  nome={doenca.nome}


                  agente={doenca.agente}


                  hospedeiros={doenca.hospedeiros}


                  zoonose={doenca.zoonose}


                  vacina={doenca.vacina}


                  eutanasia={doenca.eutanasia}


                  notificacaoObrigatoria={
                    doenca.notificacaoObrigatoria
                  }


                  imagem={doenca.imagem}


                  categoria={doenca.categoria}


                />


              ))}



            </div>



          ) : (



            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">


              <h2 className="text-xl font-bold text-[#075334]">

                Nenhuma doença encontrada

              </h2>



              <p className="mt-3 text-gray-600">

                Tente buscar por outra palavra.

              </p>


            </div>


          )}



        </section>


      </main>



      <Footer />


    </>

  );

}