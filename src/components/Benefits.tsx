import { motion } from "framer-motion";
import { TrendingUp, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Foco em Crescimento",
    description: "Foque no que importa: o seu negócio. Deixe a burocracia contábil e fiscal com quem entende.",
  },
  {
    icon: Shield,
    title: "Segurança e Praticidade",
    description: "Cuidamos da sua empresa de forma 100% digital e segura, sem você precisar sair de casa.",
  },
  {
    icon: Headphones,
    title: "Atendimento Humanizado",
    description: "Suporte proativo e personalizado. Você nunca está sozinho nas decisões importantes.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background section-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Por que ter um contador <span className="text-gradient">faz diferença</span>?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="group rounded-2xl bg-card p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
