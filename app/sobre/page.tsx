import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8faf9]">
        {/* SOBRE O INFECTOVET */}
        <section className="px-6 pt-16 pb-12">
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#075334]">
              Sobre o InfectoVet
            </span>

            <h1 className="mt-3 text-4xl font-bold text-[#12372a] md:text-5xl">
              Conheça o projeto
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600">
              O InfectoVet é uma plataforma educacional voltada ao estudo das
              enfermidades infecciosas e parasitárias em animais, desenvolvida
              para auxiliar estudantes de Medicina Veterinária na revisão e
              consolidação dos conteúdos da disciplina.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
              A plataforma reúne informações sobre diferentes enfermidades,
              incluindo agente etiológico, epidemiologia, patogenia, sinais
              clínicos, diagnóstico, tratamento e prevenção, além de métodos
              diagnósticos, questões e outros recursos de apoio ao estudo.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
              O projeto surgiu a partir da necessidade de tornar o aprendizado
              mais{" "}
              <strong className="font-semibold text-[#12372a]">
                dinâmico, organizado e acessível
              </strong>
              , especialmente diante da grande quantidade de agentes e doenças
              abordados ao longo da disciplina.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
              Mais do que reunir informações, o InfectoVet busca estimular o{" "}
              <strong className="font-semibold text-[#12372a]">
                raciocínio clínico e epidemiológico
              </strong>
              , aproximando o conteúdo teórico da realidade da Medicina
              Veterinária.
            </p>
          </div>
        </section>

        {/* QUEM ESTÁ POR TRÁS */}
        <section className="px-6 py-14">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-[#12372a]">
                Quem está por trás do InfectoVet
              </h2>

              <p className="mt-3 text-gray-600">
                Um projeto construído a partir da união entre tecnologia,
                ensino e Medicina Veterinária.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {/* LOUISE */}
              <div className="overflow-hidden rounded-3xl bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/sobre/lolla-fontes.jpg"
                    alt="Louise Fontes"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#075334]">
                    Idealizadora e desenvolvedora
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#12372a]">
                    Louise Fontes
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Estudante de Medicina Veterinária
                  </p>

                  <p className="mt-5 text-base leading-7 text-gray-600">
                    O InfectoVet surgiu a partir da minha vivência como
                    estudante de Medicina Veterinária e da vontade de
                    transformar uma disciplina com grande volume de conteúdo em
                    uma ferramenta de estudo mais visual, organizada e
                    interativa.
                  </p>

                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Além da organização dos conteúdos, participo da estruturação
                    e do desenvolvimento da plataforma, buscando aproximar o
                    conhecimento teórico da realidade da Medicina Veterinária.
                  </p>
                </div>
              </div>

              {/* BRUNO */}
              <div className="overflow-hidden rounded-3xl bg-white">
                <div className="relative aspect-[4/3] w-full bg-gray-50">
                  <Image
                    src="/images/sobre/bruno-cabral.jpg"
                    alt="Dr. Bruno Cabral Pires"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#075334]">
                    Orientação acadêmica
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#12372a]">
                    Dr. Bruno Cabral Pires
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Médico-veterinário e professor
                  </p>

                  <p className="mt-5 text-base leading-7 text-gray-600">
                    A construção do InfectoVet também conta com a contribuição e
                    orientação acadêmica do professor, auxiliando na
                    organização, revisão e direcionamento dos conteúdos
                    relacionados às enfermidades infecciosas e parasitárias em
                    animais.
                  </p>

                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Sua participação contribui para aproximar a plataforma das
                    necessidades acadêmicas da disciplina e dos conteúdos
                    trabalhados ao longo da formação em Medicina Veterinária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO SURGIU */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold text-[#12372a]">
              Como surgiu o InfectoVet?
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              O projeto nasceu dentro da própria rotina acadêmica, a partir da
              percepção de que a quantidade de enfermidades e informações
              trabalhadas na disciplina poderia ser organizada de uma maneira
              mais prática para os estudantes.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Assim, uma ideia inicialmente voltada ao apoio aos estudos foi
              crescendo e se transformando em uma plataforma que reúne
              conteúdo, revisão e ferramentas interativas em um único espaço.
            </p>

            <p className="mt-7 text-lg font-semibold text-[#075334]">
              Da sala de aula para uma nova forma de aprender Medicina
              Veterinária.
            </p>
          </div>
        </section>

        {/* AVISO */}
        <section className="border-t border-gray-200 px-6 py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm leading-6 text-gray-500">
              O InfectoVet é um projeto acadêmico e educacional, desenvolvido
              como ferramenta complementar aos estudos. Seu conteúdo não
              substitui aulas, literatura científica, orientação de professores
              ou avaliação e conduta de um médico-veterinário.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}