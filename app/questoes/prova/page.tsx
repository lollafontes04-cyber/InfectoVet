import { Suspense } from "react";
import ProvaContent from "./prova-content";

export default function Page() {
  return (
    <Suspense fallback={<p>Carregando prova...</p>}>
      <ProvaContent />
    </Suspense>
  );
}