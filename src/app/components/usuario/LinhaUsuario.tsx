import { Usuario } from "@/core/model/Usuario"
import { IconImageInPicture } from "@tabler/icons-react"

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}



export default function LinhaUsuario (props: LinhaUsuarioProps) {
    return (
        <div className="flex p-4 bg-zinc-900 items-center gap-5 rounded-md cursor-pointer" onClick={() => props.onClick?.(props.usuario)}>
            <IconImageInPicture
            width={80}
            height={80}
            className="rounded-full" />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-small text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}