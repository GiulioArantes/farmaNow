import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#AFDDFF] border border-[#AFDDFF]">
      <div className="mt-2.5 px-4 py-5 grid grid-cols-2 items-start bg-gradient-to-b from-white/50 to-white/0">
        <div>
          <div className="text-2xl font-extrabold text-gray-700">FarmaNow</div>
          <div className="text-xs font-bold mt-1 text-gray-800">
            {data}. Todos os direitos reservados.
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xl font-bold text-gray-700 mb-1">Contatos</div>
          <div className="flex flex-row gap-3">
            <a href="https://github.com/GiulioArantes" target="_blank">
              <GithubLogoIcon size={22} weight="bold" className="inline" />
            </a>
            <a
              href="https://www.linkedin.com/in/giulio-arantes/"
              target="_blank"
            >
              <LinkedinLogoIcon size={22} weight="bold" className="inline" />
            </a>
            <a
              href="https://www.instagram.com/arantesgabriel_/"
              target="_blank"
            >
              <InstagramLogoIcon size={22} weight="bold" className="inline" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
