import { Library, Plus } from "lucide-react";
import {
  House,
  MagnifyingGlass,
  ListChecks,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import {Seacher} from "./components/Seacher";


export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 ">
      <div className="flex flex-1 ">
        <aside className="w-76 p-2">
          <nav className="bg-zinc-800 flex flex-col rounded">
            <Seacher text='Início' icon={<House size={28}/>} link="#"/>
            <Seacher text='Busca' icon={<MagnifyingGlass size={28}/>} link="#"/>
          </nav>
          <div className="bg-zinc-800 mt-2 p-2 rounded">
            <Seacher text="Sua Biblioteca" icon={<Library size={28}/>} link="#">
              <Plus className="ml-14" />
            </Seacher>
            <div className="flex gap-2 mt-4">
              <a
                href=""
                className="text-zinc-100 px-4 py-1 text-xs bg-zinc-700 rounded-full"
              >
                Artistas
              </a>
              <a
                href=""
                className="text-zinc-100 px-4 py-1 text-xs bg-zinc-700 rounded-full"
              >
                Podcasts e programas
              </a>
            </div>
            <div className="flex gap-2 mt-6 justify-between">
              <a href="" className="text-zinc-100">
                <MagnifyingGlass size={20} />
              </a>
              <a href="" className="text-zinc-100 text-xs flex gap-1">
                Recentes
                <ListChecks size={16} />
              </a>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <a className="flex items-center overflow-hidden">
              <Image
                width={60}
                height={5}
                src="/podcasts_photo.jpg"
                alt="Imagem referente ao podcast"
                className="rounded"
              />
              <div className="ml-4 flex flex-col gap-1">
                <strong className="text-zinc-100 text-base">
                  Fluency TV Inglês
                </strong>
                <p className="text-zinc-400 text-xs">
                  Podcast * Fluency Academy
                </p>
              </div>
            </a>
            <a className="space-y-3 mt-4 flex items-center overflow-hidden">
              <Image
                width={60}
                height={5}
                src="/podcasts1.jpg"
                alt="Imagem referente ao podcast"
                className="rounded"
              />
              <div className="ml-4 flex flex-col gap-1">
                <strong className="text-zinc-100 text-base">
                  Fluency TV Inglês
                </strong>
                <p className="text-zinc-400 text-xs">
                  Podcast * Fluency Academy
                </p>
              </div>
            </a>
            <a className="space-y-3 mt-4 flex items-center overflow-hidden">
              <Image
                width={60}
                height={5}
                src="/podcasts2.jpg"
                alt="Imagem referente ao podcast"
                className="rounded"
              />
              <div className="ml-4 flex flex-col gap-1">
                <strong className="text-zinc-100 text-base">
                  Fluency TV Inglês
                </strong>
                <p className="text-zinc-400 text-xs">
                  Podcast * Fluency Academy
                </p>
              </div>
            </a>
            <a className="space-y-3 mt-4 flex items-center overflow-hidden">
              <Image
                width={60}
                height={5}
                src="/cantor1.jpg"
                alt="Imagem referente ao podcast"
                className="rounded-full"
              />
              <div className="ml-4 flex flex-col gap-1">
                <strong className="text-zinc-100 text-base">
                  Marília Mendonça
                </strong>
                <p className="text-zinc-400 text-xs">Artista</p>
              </div>
            </a>
            <a className="space-y-3 mt-4 flex items-center overflow-hidden">
              <Image
                width={60}
                height={5}
                src="/cantor2.jpg"
                alt="Imagem referente ao podcast"
                className="rounded-full"
              />
              <div className="ml-4 flex flex-col gap-1">
                <strong className="text-zinc-100 text-base">
                  Gustavo Mioto
                </strong>
                <p className="text-zinc-400 text-xs">Artista</p>
              </div>
            </a>
          </div>
        </aside>
        <main className="flex-1 bg-gradient-to-r from-zinc-800 mt-2">
          <h1 className="text-white p-3">Main</h1>
        </main>
      </div>
      <footer className="bg-black">
        <h1 className="text-white">footer</h1>
      </footer>
    </div>
  );
}
