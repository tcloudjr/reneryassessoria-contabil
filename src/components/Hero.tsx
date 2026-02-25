import { motion } from "framer-motion";
import reneryPhoto from "@/assets/renery-photo.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen hero-gradient overflow-hidden flex items-center pt-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1">

            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90 mb-6">
              Assessoria Contábil Especializada
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
              Contabilidade que{" "}
              <span className="relative">
                impulsiona
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(213, 60%, 55%)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              o seu negócio
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 text-white">Abra sua empresa, regularize seu CNPJ e pague menos impostos! Com segurança, agilidade e atendimento humanizado.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="http://wa.me/5579981397068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-base font-bold text-whatsapp-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">

                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.597-.838-6.323-2.236l-.442-.37-3.238 1.085 1.085-3.238-.37-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Quero uma Consulta Gratuita
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                100% Seguro
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Atendimento Rápido
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2">

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
              <img
                src={reneryPhoto}
                alt="Renery Souza - Contador"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Hero;