import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CategoryHeader from "@/components/doencas/CategoryHeader";
import DiseaseCard from "@/components/doencas/DiseaseCard";

import { doencas } from "@/data/doencas";



export default async function DoencasPage() {



  return (

    <>

      <Navbar />



      <main className="min-h-screen bg-[#F8FBF9]">



        <CategoryHeader

          categoria="Doenças"

        />





        <section className="mx-auto max-w-[1200px] px-10 py-12">



          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">





            {doencas.map((doenca) => (



              <DiseaseCard



                key={doenca.id}



                id={doenca.id}



                nome={doenca.nome}



                categoria={doenca.categoria}



                agente={doenca.agente}



                hospedeiros={doenca.hospedeiros}



                zoonose={doenca.zoonose}



                vacina={doenca.vacina}



                eutanasia={doenca.eutanasia}



                notificacaoObrigatoria={doenca.notificacaoObrigatoria}



                imagem={doenca.imagem}



              />



            ))}





          </div>



        </section>



      </main>





      <Footer />


    </>

  );

}