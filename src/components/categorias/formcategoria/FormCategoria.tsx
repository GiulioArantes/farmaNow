import { type ChangeEvent, useEffect, useState } from "react";
import { cadastrar, atualizar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";

interface FormCategoriaProps {
  categoria?: Categoria;
  onClose: () => void;
}

function FormCategoria({ categoria, onClose }: FormCategoriaProps) {
  const [form, setForm] = useState<Categoria>(
    categoria ? categoria : ({ department: "" } as Categoria)
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm(categoria ? categoria : ({ department: "" } as Categoria));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function salvarCategoria(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (form.id) {
        await atualizar(`/categories`, form, () => {});
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categories`, form, () => {});
        alert("Categoria cadastrada com sucesso!");
      }
      onClose();
    } catch (error) {
      alert("Erro ao salvar categoria.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={salvarCategoria}>
      <h1 className="text-2xl text-center my-4">
        {form.id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="department" className="text-gray-700 font-semibold">
          Nome da Categoria
        </label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Digite o nome da categoria"
          className="rounded-full px-5 py-2 bg-gray-100 text-gray-700 outline-none"
          value={form.department ?? ""}
          onChange={atualizarEstado}
          required
          disabled={loading}
        />
      </div>
      <div className="flex gap-2 justify-end items-center">
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-700 transition cursor-pointer"
          disabled={loading}
        >
          {form.id ? "Atualizar" : "Cadastrar"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 rounded-full bg-red-400 text-white font-semibold shadow hover:bg-red-600 transition cursor-pointer"
          disabled={loading}
        >
          Cancelar
        </button>
        {loading && <ClipLoader size={28} color="#2563eb" />}
      </div>
    </form>
  );
}

export default FormCategoria;
