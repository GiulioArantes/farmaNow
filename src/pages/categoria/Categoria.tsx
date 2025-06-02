import { useState } from "react";
import { PencilSimple, Trash, Check, X } from "@phosphor-icons/react";

function Categoria() {
  const [categorias, setCategorias] = useState([
    "Categoria 1",
    "Categoria 1",
    "Categoria 1",
    "Categoria 1",
    "Categoria 1",
    "Categoria 1",
  ]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setEditValue(categorias[idx]);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const handleEditSave = () => {
    if (editIndex !== null) {
      const novas = [...categorias];
      novas[editIndex] = editValue;
      setCategorias(novas);
      setEditIndex(null);
      setEditValue("");
    }
  };

  const handleDelete = (idx: number) => {
    setCategorias(categorias.filter((_, i) => i !== idx));
    if (editIndex === idx) handleEditCancel();
  };

  return (
    <div className="min-h-screen bg-[#AFDDFF] px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Categorias</h1>

      <div className="flex flex-col items-center mt-20">
        <div className="flex items-center gap-3 w-full max-w-2xl mb-6">
          <input
            type="text"
            placeholder="Categoria"
            className="flex-1 rounded-full px-5 py-2 bg-white/70 text-gray-700 outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-white to-white/0 text-indigo-900 font-semibold shadow hover:bg-indigo-100 transition cursor-pointer"
            disabled
          >
            Cadastrar
          </button>
        </div>

        <div className="bg-[#60B5FF] rounded-2xl p-8 flex flex-col gap-2 shadow-lg w-full max-w-5xl">
          {categorias.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center border-b border-white/30 last:border-b-0 py-1"
            >
              {editIndex === idx ? (
                <>
                  <input
                    className="flex-1 rounded px-2 py-1 text-gray-800 bg-white"
                    value={editValue}
                    onChange={handleEditChange}
                    autoFocus
                  />
                  <button
                    className="ml-2 text-green-600 hover:bg-green-100 rounded-full p-1 transition cursor-pointer"
                    onClick={handleEditSave}
                    title="Salvar"
                  >
                    <Check size={22} weight="bold" />
                  </button>
                  <button
                    className="ml-1 text-red-600 hover:bg-red-100 rounded-full p-1 transition cursor-pointer"
                    onClick={handleEditCancel}
                    title="Cancelar"
                  >
                    <X size={22} weight="bold" />
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 text-lg text-white">{cat}</span>
                  <button
                    className="ml-2 text-gray-800 hover:bg-blue-200 rounded-full p-1 transition cursor-pointer"
                    onClick={() => handleDelete(idx)}
                    title="Excluir"
                  >
                    <Trash size={22} weight="bold" />
                  </button>
                  <button
                    className="ml-1 text-gray-800 hover:bg-blue-200 rounded-full p-1 transition cursor-pointer"
                    onClick={() => handleEdit(idx)}
                    title="Editar"
                  >
                    <PencilSimple size={22} weight="bold" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categoria;
