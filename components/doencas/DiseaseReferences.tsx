type Referencia = {
  titulo: string;
  autores: string;
  fonte: string;
  ano: string;
  link?: string;
};


type DiseaseReferencesProps = {
  referencias?: Referencia[];
};



export default function DiseaseReferences({

  referencias = [],

}: DiseaseReferencesProps) {



  const referenciasPadrao: Referencia[] = [

    {
      titulo: "",
      autores: "",
      fonte: "",
      ano: "",
      link: "",
    },

  ];




  const listaReferencias =
    referencias.length > 0
      ? referencias
      : referenciasPadrao;




  return (

    <section
      id="referencias"
      className="
        mx-auto
        max-w-[1200px]
        px-4
        py-8
        md:px-10
        md:py-10
      "
    >



      <div
        className="
          rounded-3xl
          bg-white
          p-5
          shadow-sm
          md:p-8
        "
      >



        <h2
          className="
            text-2xl
            font-bold
            text-[#075334]
          "
        >

          Referências Bibliográficas

        </h2>




        <p
          className="
            mt-2
            text-sm
            text-gray-600
            md:text-base
          "
        >

          Fontes utilizadas para construção do conteúdo científico.

        </p>






        <div
          className="
            mt-6
            grid
            gap-4
            md:mt-8
            md:grid-cols-3
          "
        >



          {listaReferencias.map((referencia, index) => (


            <a

              key={index}

              href={referencia.link || undefined}

              target="_blank"

              rel="noopener noreferrer"


              className="
                block
                rounded-2xl
                border
                border-gray-100
                bg-[#F8FBF9]
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-md
              "

            >





              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >


                <span className="text-3xl">

                  📚

                </span>





                {referencia.link && (

                  <span
                    className="
                      rounded-full
                      bg-[#E5F3EA]
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-[#075334]
                    "
                  >

                    Link

                  </span>

                )}


              </div>








              <h3
                className="
                  mt-4
                  line-clamp-3
                  text-base
                  font-bold
                  leading-snug
                  text-[#075334]
                "
              >

                {referencia.titulo}

              </h3>







              <p
                className="
                  mt-3
                  line-clamp-3
                  text-sm
                  leading-relaxed
                  text-gray-600
                "
              >

                {referencia.autores}

              </p>







              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-200
                  pt-3
                "
              >



                <span
                  className="
                    max-w-[70%]
                    text-xs
                    text-gray-500
                  "
                >

                  {referencia.fonte}

                </span>





                <span
                  className="
                    rounded-full
                    bg-[#E5F3EA]
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-[#075334]
                  "
                >

                  {referencia.ano}

                </span>



              </div>





            </a>


          ))}




        </div>




      </div>



    </section>

  );

}