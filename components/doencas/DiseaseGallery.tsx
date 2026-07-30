import Image from "next/image";
import { useState } from "react";

type ImagemGaleria = {

  src: string;

  titulo: string;

  categoria: string;

  descricao: string;

};


type DiseaseGalleryProps = {

  imagens?: ImagemGaleria[];

};



export default function DiseaseGallery({

  imagens,

}: DiseaseGalleryProps) {

  const [imagemAberta, setImagemAberta] = useState<ImagemGaleria | null>(null);



  if (!imagens || imagens.length === 0) {

    return (

      <>

        <h2 className="
          text-2xl
          font-bold
          text-[#075334]
        ">

          Galeria de Imagens

        </h2>


        <p className="
          mt-4
          text-gray-600
        ">

          Imagens em desenvolvimento.

        </p>

      </>

    );

  }




  return (

    <section>


      <h2 className="
        text-2xl
        font-bold
        text-[#075334]
      ">

        Galeria de Imagens

      </h2>



      <p className="
        mt-3
        text-gray-600
      ">

        Imagens relacionadas aos principais achados clínicos,
        lesões e métodos diagnósticos.

      </p>




      <div className="
        mt-6
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      ">


        {imagens.map((imagem) => (


          <div

            key={imagem.src}

            className="
              overflow-hidden
              rounded-2xl
              bg-[#F8FBF9]
            "

          >


            <div className="
              relative
              h-56
              w-full
            ">


             <div
  onClick={() => setImagemAberta(imagem)}
  className="
    cursor-pointer
  "
>

<Image

  src={imagem.src}

  alt={imagem.titulo}

  fill

  className="
    object-cover
  "

/>

</div>

            </div>




            <div className="p-5">


              <span className="
                rounded-full
                bg-[#EDF8F0]
                px-3
                py-1
                text-xs
                font-semibold
                text-[#075334]
              ">

                {imagem.categoria}

              </span>




              <h3 className="
                mt-3
                font-bold
                text-[#075334]
              ">

                {imagem.titulo}

              </h3>




              <p className="
                mt-2
                text-sm
                leading-relaxed
                text-gray-600
              ">

                {imagem.descricao}

              </p>



            </div>



          </div>


        ))}


      </div>

{imagemAberta && (

<div

  onClick={() => setImagemAberta(null)}

  className="
    fixed
    inset-0
    z-50
    flex
    items-center
    justify-center
    bg-black/70
    p-6
  "

>


<div

  onClick={(e)=>e.stopPropagation()}

  className="
    relative
    max-h-[90vh]
    max-w-5xl
  "

>


<button

  onClick={() => setImagemAberta(null)}

  className="
    absolute
    right-2
    top-2
    z-10
    rounded-full
    bg-white
    px-3
    py-1
    font-bold
    text-gray-700
  "

>

  ✕


</button>


<Image

  src={imagemAberta.src}

  alt={imagemAberta.titulo}

  width={1200}

  height={800}

  className="
    max-h-[85vh]
    rounded-2xl
    object-contain
  "

/>


</div>


</div>

)}
    </section>

  );

}