import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#064B32] text-white">

      <div
        className="
          mx-auto
          flex
          flex-col
          items-center
          gap-3
          px-5
          py-4
          text-center

          md:flex-row
          md:justify-between
          md:gap-4
          md:px-10
          md:py-6
          md:text-left
        "
      >


        {/* Logo InfectoVet */}

        <div className="flex items-center">

          <Image
            src="/images/logo/logo-infectovet.png"
            alt="InfectoVet"
            width={170}
            height={65}
            className="
              w-[95px]
              brightness-0
              invert

              md:w-[170px]
            "
          />

        </div>





        {/* Atualização */}

        <div className="max-w-[220px]">

          <p
            className="
              text-[10px]
              leading-4
              text-[#D8E8DF]

              md:text-[12px]
            "
          >
            Atualizado por monitores e professores da área de Medicina Veterinária.
          </p>

        </div>





        {/* Informação */}

        <div className="max-w-[230px]">

          <p
            className="
              text-[10px]
              leading-4
              text-[#D8E8DF]

              md:text-[12px]
            "
          >
            Conteúdo destinado para fins educacionais.
            Consulte sempre um médico veterinário.
          </p>

        </div>





        {/* Instituições */}

        <div
          className="
            flex
            items-center
            gap-2

            md:gap-4
          "
        >

          <Image
            src="/images/logo/estacio.png"
            alt="Estácio"
            width={80}
            height={50}
            className="
              w-[45px]
              object-contain

              md:w-[80px]
            "
          />



          <Image
            src="/images/logo/medicina-veterinaria-3.png"
            alt="Medicina Veterinária"
            width={90}
            height={55}
            className="
              w-[55px]
              object-contain

              md:w-[90px]
            "
          />

        </div>


      </div>


    </footer>
  );
}