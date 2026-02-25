import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Renery Souza" className="h-[4.5rem] md:h-20 brightness-0 invert" />

          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#inicio" className="hover:text-primary-foreground transition-colors">Início</a>
            <a href="#beneficios" className="hover:text-primary-foreground transition-colors">Benefícios</a>
            <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Renery Souza Assessoria Contábil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
