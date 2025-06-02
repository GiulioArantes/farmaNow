import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import FormCategoria from "../formcategoria/FormCategoria";
import DeleteCategoria from "../deletecategoria/DeleteCategoria";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [modalType, setModalType] = useState<
    "novo" | "editar" | "deletar" | null
  >(null);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria | null>(null);
  const [open, setOpen] = useState(false);

  async function buscarCategorias() {
    await buscar("/categories", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  function abrirModalNovo() {
    setCategoriaSelecionada(null);
    setModalType("novo");
    setOpen(true);
  }

  function abrirModalEditar(categoria: Categoria) {
    setCategoriaSelecionada(categoria);
    setModalType("editar");
    setOpen(true);
  }

  function abrirModalDeletar(categoria: Categoria) {
    setCategoriaSelecionada(categoria);
    setModalType("deletar");
    setOpen(true);
  }

  function fecharModal() {
    setOpen(false);
    setCategoriaSelecionada(null);
    setModalType(null);
    buscarCategorias();
  }

  return (
    <div className="min-h-screen bg-[#AFDDFF] px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Categorias</h1>
      <div className="flex flex-col items-center mt-20">
        <div className="flex items-center gap-3 w-full max-w-2xl mb-6">
          <span className="text-2xl font-semibold text-gray-700 mr-auto">
            Cadastre uma nova categoria:
          </span>
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-white to-white/0 text-indigo-900 font-semibold shadow hover:bg-indigo-100 transition cursor-pointer"
            onClick={abrirModalNovo}
          >
            Cadastrar
          </button>
        </div>
        <div className="bg-[#60B5FF] rounded-2xl p-8 flex flex-col gap-2 shadow-lg w-full max-w-5xl">
          {categorias.map((categoria) => (
            <CardCategorias
              key={categoria.id}
              categoria={categoria}
              onEdit={() => abrirModalEditar(categoria)}
              onDelete={() => abrirModalDeletar(categoria)}
            />
          ))}
        </div>
      </div>

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={fecharModal}
        modal
        nested
      >
        <div className="bg-white rounded-3xl p-8 min-w-[350px] max-w-lg mx-auto">
          {modalType === "novo" && <FormCategoria onClose={fecharModal} />}
          {modalType === "editar" && categoriaSelecionada && (
            <FormCategoria
              categoria={categoriaSelecionada}
              onClose={fecharModal}
            />
          )}
          {modalType === "deletar" && categoriaSelecionada && (
            <DeleteCategoria
              categoria={categoriaSelecionada}
              onClose={fecharModal}
            />
          )}
        </div>
      </Popup>
    </div>
  );
}

export default ListaCategorias;
