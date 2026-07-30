"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Qual doença você procura?"
        className="h-[58px] w-full rounded-[12px] border border-[#aebbb3] bg-white px-5 pr-14 text-[16px] text-[#263a30] outline-none transition placeholder:text-[#7a837d] focus:border-[#075334] focus:ring-2 focus:ring-[#075334]/10"
      />

      <Search
        size={24}
        strokeWidth={2}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-[#18221c]"
      />
    </div>
  );
}