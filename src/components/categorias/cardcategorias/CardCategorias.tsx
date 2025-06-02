import { PencilSimple, Trash } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
  onEdit: () => void;
  onDelete: () => void;
}

function CardCategorias({ categoria, onEdit, onDelete }: CardCategoriasProps) {
  return (
    <div className="flex items-center border-b border-white/30 last:border-b-0 py-1 px-4 bg-[#60B5FF] rounded-xl shadow transition">
      <span className="flex-1 text-lg text-white">
        {categoria.department ?? "Sem nome"}
      </span>
      <button
        className="ml-2 text-gray-800 hover:bg-blue-200 rounded-full p-1 transition cursor-pointer"
        onClick={onEdit}
        title="Editar"
      >
        <PencilSimple size={22} weight="bold" />
      </button>
      <button
        className="ml-2 text-gray-800 hover:bg-red-200 rounded-full p-1 transition cursor-pointer"
        onClick={onDelete}
        title="Excluir"
      >
        <Trash size={22} weight="bold" />
      </button>
    </div>
  );
}

export default CardCategorias;
