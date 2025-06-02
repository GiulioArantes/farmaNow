import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-3 bg-[#AFDDFF] text-white border-b border-[#60B5FF]">
        <div className="container flex text-lg text-black max-w-11/12">
          <Link
            to="/"
            className="mask-b-from-neutral-50 text-3xl font-extrabold text-gray-700 mx-auto"
          >
            FarmaNow
          </Link>
          <div className="absolute right-5 flex gap-4 text-xl font-semibold text-gray-700">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
