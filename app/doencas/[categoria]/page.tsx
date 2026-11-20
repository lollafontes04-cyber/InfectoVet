
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CategoryHeader from "@/components/doencas/CategoryHeader";
import DiseaseCard from "@/components/doencas/DiseaseCard";

import { doencas } from "@/data/doencas";

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{
    categoria: string;
  }>;
}) {
  const { categoria } = await params;

  // Converte o endereço da página em nome de categoria
  const categoriaFormatada = decodeURIComponent(categoria)
    .replace(/-/g, " ")
    .trim();

  // Normaliza os nomes, ignorando acentos e diferenças de maiúsculas
  const normalizarCategoria = (nome: string) =>
    nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase()
      .replace(/-/g, " ")
      .replace(/\s+/g, " ");

  // Busca todas as doenças pertencentes à categoria
  const listaDoencas = doencas.filter(
    (doenca) =>
      normalizarCategoria(doenca.categoria) ===
      normalizarCategoria(categoriaFormatada)
  );

  // Recupera o nome original da categoria, preservando os acentos
  const nomeCategoria =
    listaDoencas[0]?.categoria || categoriaFormatada;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FBF9]">

        <CategoryHeader categoria={nomeCategoria} />

        <section className="mx-auto max-w-[1200px] px-10 py-12">

          {listaDoencas.length > 0 ? (

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {listaDoencas.map((doenca) => (

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

          ) : (

            <div className="py-16 text-center">

              <h2 className="text-xl font-semibold text-[#075334]">
                Nenhuma doença encontrada
              </h2>

              <p className="mt-2 text-gray-500">
                Não foram encontradas doenças cadastradas nesta categoria.
              </p>

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}
