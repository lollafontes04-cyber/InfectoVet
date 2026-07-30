"use client";

import { useState } from "react";


type DiseaseFiltersProps = {
  onSearch: (valor: string) => void;
};


export default function DiseaseFilters({
  onSearch,
}: DiseaseFiltersProps) {

  const [busca, setBusca] = useState("");


  function handleChange(valor: string) {

    setBusca(valor);

    onSearch(valor);

  }


  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">


      {/* Busca */}
      <div className="flex flex-1 items-center rounded-xl border border-gray-200 bg-white px-4 py-3">

        <span className="mr-3 text-xl">
          🔍
        </span>


        <input
          type="text"
          value={busca}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Buscar doença..."
          className="w-full outline-none text-sm"
        />

      </div>



      {/* Botão filtros */}
      <button
        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#075334] transition hover:bg-[#EDF8F0]"
      >
        ⚙️ Filtros
      </button>


    </div>
  );
}