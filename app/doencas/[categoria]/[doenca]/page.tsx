import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DiseaseHero from "@/components/doencas/DiseaseHero";
import DiseaseContent from "@/components/doencas/DiseaseContent";

import { doencas } from "@/data/doencas";



export default async function DoencaPage({

  params,

}: {

  params: Promise<{

    doenca: string;

  }>;

}) {



  const { doenca } = await params;




  const dados = doencas.find(

    (item) => item.id === doenca

  );







  if (!dados) {


    return (

      <>

        <Navbar />


        <main className="min-h-screen bg-[#F8FBF9] p-10">


          <h1 className="text-3xl font-bold text-[#075334]">

            Doença não encontrada

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





        <DiseaseHero

          nome={dados.nome}

          agente={dados.agente}

          categoria={dados.categoria}

          zoonose={dados.zoonose}

          vacina={dados.vacina}

          eutanasia={dados.eutanasia}

          notificacaoObrigatoria={dados.notificacaoObrigatoria}

          hospedeiros={dados.hospedeiros}

          imagem={dados.imagem}

        />









        <DiseaseContent


          id={dados.id}

          nome={dados.nome}

          agente={dados.agente}

          hospedeiros={dados.hospedeiros}

          zoonose={dados.zoonose}

          visaoGeral={dados.visaoGeral}

          etiologia={dados.etiologia}

          patogenia={dados.patogenia}

          epidemiologia={dados.epidemiologia}

          sinaisClinicos={dados.sinaisClinicos}

          diagnostico={dados.diagnostico}

          tratamento={dados.tratamento}

          prevencao={dados.prevencao}

          pncebt={dados.pncebt}

          imagens={dados.imagens}

          casosClinicos={dados.casosClinicos}

          referencias={dados.referencias}


        />






      </main>





      <Footer />


    </>

  );

}