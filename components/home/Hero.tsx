export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDF8F0]">


      {/* Fundo verde com degradê suave */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#EDF8F0]
          via-[#F5FBF6]
          to-[#E5F3EA]
        "
      />



      {/* Elementos científicos suaves */}

      <div className="pointer-events-none absolute right-20 top-10 opacity-[0.06]">
        <div className="text-[220px]">
          🧬
        </div>
      </div>



      <div className="pointer-events-none absolute right-[280px] bottom-0 opacity-[0.05]">
        <div className="text-[180px]">
          🔬
        </div>
      </div>



      <div className="pointer-events-none absolute left-[45%] top-20 opacity-[0.04]">
        <div className="text-[150px]">
          🦠
        </div>
      </div>





      {/* Manchas suaves */}

      <div
        className="
          absolute
          -top-40
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#DDEFE3]
          opacity-40
          blur-3xl
        "
      />



      <div
        className="
          absolute
          bottom-0
          left-1/3
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#D8ECE0]
          opacity-40
          blur-3xl
        "
      />






      {/* Conteúdo */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-10
          pt-8
          pb-8
        "
      >


        <div
          className="
            max-w-[560px]

            md:ml-6
            lg:ml-14
          "
        >


          <div
            className="
              mb-5
              inline-flex
              rounded-full
              bg-[#DDF1E4]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-[#075334]
            "
          >
 Plataforma de enfermidades infecciosas e parasitárias animais
          </div>





          <h1
            className="
              text-[44px]
              font-bold
              leading-[1.08]
              tracking-[-1px]
              text-[#0A5638]

              max-sm:text-[38px]
            "
          >
            Conhecimento que protege animais e pessoas.
          </h1>





          <p
            className="
              mt-5
              max-w-[520px]
              text-[18px]
              leading-relaxed
              text-[#315B4B]
            "
          >
 Plataforma digital para estudo e consulta de doenças infecciosas e
            parasitárias que afetam animais domésticos.
          </p>


        </div>


      </div>






      {/* Transição suave inferior */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-12
          w-full
          bg-gradient-to-b
          from-transparent
          to-[#f7f8f7]
        "
      />


    </section>
  );
}