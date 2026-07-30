"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Bug,
  CircleHelp,
  Heart,
  House,
  Microscope,
  Stethoscope,
} from "lucide-react";

const itens = [
  { nome: "Início", href: "/", icon: House },
  { nome: "Doenças", href: "/doencas", icon: Microscope },
  { nome: "Parasitos", href: "/parasitos", icon: Bug },
  {
    nome: "Casos Clínicos",
    href: "/casos-clinicos",
    icon: Stethoscope,
  },
  { nome: "Quiz", href: "/questoes", icon: CircleHelp },
  { nome: "Biblioteca", href: "/biblioteca", icon: BookOpen },
  { nome: "Favoritos", href: "/favoritos", icon: Heart },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-[calc(100vh-88px)] w-[250px] shrink-0 border-r border-[#e8e8e8] bg-white px-5 py-7 xl:flex xl:flex-col">
      <nav className="space-y-1.5">
        {itens.map((item) => {
          const Icon = item.icon;

          const ativo =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.nome}
              href={item.href}
              className={[
                "flex h-12 items-center gap-3 rounded-xl px-4 text-[14px] font-semibold transition-colors",
                ativo
                  ? "bg-[#eaf5ee] text-[#075334]"
                  : "text-[#4d4d4d] hover:bg-[#f4f7f5] hover:text-[#075334]",
              ].join(" ")}
            >
              <Icon
                size={20}
                strokeWidth={ativo ? 2.4 : 2}
                className="shrink-0"
              />

              <span>{item.nome}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto overflow-hidden rounded-[18px] bg-[#075334] p-5 text-white">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
          <BookOpen size={22} />
        </div>

        <h3 className="text-[17px] font-bold leading-5">
          Apoio para seus estudos
        </h3>

        <p className="mt-2 text-[13px] leading-5 text-white/80">
          Conteúdos organizados para facilitar o aprendizado em infectologia
          veterinária.
        </p>

        <Link
          href="/sobre"
          className="mt-5 flex h-10 items-center justify-center rounded-xl bg-white text-[13px] font-bold text-[#075334] transition hover:bg-[#f1f6f3]"
        >
          Saiba mais
        </Link>
      </div>
    </aside>
  );
}