import farmaciaImg from "../../assets/farmacia.png";

function Home() {
  return (
    <>
      <div className="bg-[#AFDDFF] flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col justify-center -mt-50">
            <p className="text-xl text-indigo-900 font-semibold">
              Olá bem vindo a nossa farmácia!
            </p>
            <h2 className="text-5xl font-semibold text-gray-700">
              Temos a maior variedade que você irá encontrar.
            </h2>
          </div>

          <div className="flex justify-center ">
            <img src={farmaciaImg} alt="Imagem Página Home" className="w-2/3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12 bg-gradient-to-r from-[#AFDDFF] via-[#FFECDB] to-[#AFDDFF]">
        <div className="w-full max-w-4xl flex items-center justify-between py-5">
          <span className="text-2xl font-semibold text-gray-700 mr-auto">
            Conheça a nossa mais nova funcionalidade:
          </span>
          <button className="px-10 py-2 rounded-full bg-gradient-to-r from-white to-white/0 text-indigo-900 font-semibold shadow hover:bg-indigo-100 transition">
            Cadastrar categoria
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
