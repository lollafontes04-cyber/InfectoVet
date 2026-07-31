import { Suspense } from "react";
import ProvaContent from "./prova-content";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    categorias?: string;
    doencas?: string;
    quantidade?: string;
  }>;
}) {

  const params = await searchParams;


  const categorias =
    params.categorias?.split(",").filter(Boolean) || [];


  const doencas =
    params.doencas?.split(",").filter(Boolean) || [];


  const quantidade =
    Number(params.quantidade || 10);



  return (
    <Suspense fallback={<p>Carregando prova...</p>}>
      <ProvaContent
        categorias={categorias}
        doencas={doencas}
        quantidade={quantidade}
      />
    </Suspense>
  );
}