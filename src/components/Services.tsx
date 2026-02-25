import { motion } from "framer-motion";
import { FileText, Calculator, Building2, Search, Receipt } from "lucide-react";

const services = [
  { icon: Building2, title: "Abertura, Alteração e Baixa de Empresas", description: "Do registro à regularização, cuidamos de toda a documentação para você." },
  { icon: Receipt, title: "Gestão de MEI e Simples Nacional", description: "Enquadramento correto e gestão tributária otimizada para pagar menos impostos." },
  { icon: Calculator, title: "Cálculo de Impostos", description: "Planejamento tributário estratégico para reduzir a carga fiscal legalmente." },
  { icon: Search, title: "Consultoria Fiscal", description: "Análise completa da sua situação fiscal com orientações personalizadas." },
  { icon: FileText, title: "Declaração de Imposto de Renda", description: "IRPF e IRPJ com máxima restituição e total conformidade." },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Soluções completas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-card p-7 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
