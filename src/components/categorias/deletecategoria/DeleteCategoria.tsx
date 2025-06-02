import { deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

interface DeleteCategoriaProps {
  categoria: Categoria;
  onClose: () => void;
}

function DeleteCategoria({ categoria, onClose }: DeleteCategoriaProps) {
  async function confirmarExclusao() {
    try {
      await deletar(`/categories/${categoria.id}`);
      alert("Categoria deletada com sucesso!");
      onClose();
    } catch (error) {
      alert("Erro ao deletar categoria.");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center my-4">Deletar Categoria</h1>
      <p className="text-lg text-center mb-6">
        Tem certeza que deseja deletar a categoria:
        <strong className="ml-1">{categoria.department}</strong>?
      </p>
      <div className="flex gap-4">
        <button
          onClick={confirmarExclusao}
          className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition cursor-pointer"
        >
          Confirmar
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-full bg-gray-400 text-white font-semibold shadow hover:bg-gray-500 transition cursor-pointer"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default DeleteCategoria;
