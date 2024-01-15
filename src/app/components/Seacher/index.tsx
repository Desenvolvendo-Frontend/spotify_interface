import * as Icon from '@phosphor-icons/react'
import { Children, ReactNode } from 'react'

{/* <nav className="bg-zinc-800 flex flex-col rounded">
            <a
              href=""
              className="text-zinc-200 p-3 flex items-center gap-4 transition-colors hover:tex-zinc-700"
            >
              <House size={28} />
              Início
            </a>
           
          </nav> */}

interface iSeacherProps {
  link: string,
  icon: Icon.IconProps,
  text: string
  children?:ReactNode
}

export const Seacher = ({
  link,
  icon,
  text,
  children
}:iSeacherProps) => {
    return(
            <a
              href={link}
              className="text-zinc-200 p-3 flex items-center gap-4 transition-colors hover:tex-zinc-700"
            >
              <>
              {icon}
              </>
              {text}
              {children}
            </a>
           
          
    )
}