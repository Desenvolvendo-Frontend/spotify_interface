import { House, MagnifyingGlass } from "@phosphor-icons/react";

export const Seacher = () => {
    return(
        <nav className="bg-zinc-800 flex flex-col rounded">
            <a
              href=""
              className="text-zinc-200 p-3 flex items-center gap-4 transition-colors hover:tex-zinc-700"
            >
              <House size={28} />
              Início
            </a>
            <a href="" className="text-zinc-200 p-3 flex items-center gap-4">
              <MagnifyingGlass size={28} />
              Buscar
            </a>
          </nav>
    )
}