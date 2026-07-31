import { Suspense } from "react";
import ProvaContent from "./prova-content";

export default function Page({
  searchParams,
}: {
  searchParams: {
    categorias?: string;
    doencas?: string;
    quantidade?: string;
  };
}) {

  const categorias =
    searchParams.categorias?.split(",").filter(Boolean) || [];

  const doencas =
    searchParams.doencas?.split(",").filter(Boolean) || [];

  const quantidade =
    Number(searchParams.quantidade || 10);


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