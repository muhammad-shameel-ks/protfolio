import { motion } from "framer-motion";

const proofs = [
  { value: "15", label: "projects shipped", sub: "6 featured above, all on GitHub" },
  {
    value: "Scentance",
    label: "live e-commerce",
    sub: "real revenue at scentenceparfum.com",
  },
  {
    value: "KSDC",
    label: "govt corp tooling",
    sub: "used daily by non-technical staff",
  },
  {
    value: "Self-hosted",
    label: "Kubernetes on VAIO",
    sub: "CI/CD via GitHub → Tailscale → K3s",
  },
];

export default function ProxyProofStrip() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 border-y border-border/60 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-[Silkscreen] text-[11px] tracking-widest uppercase text-fg-faint">
            Trusted to ship
          </span>
          <span className="h-px flex-1 bg-border/60" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {proofs.map((p) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-1"
            >
              <span className="text-lg font-extrabold tracking-tight text-fg">
                {p.value}
              </span>
              <span className="text-sm font-semibold text-fg-muted leading-none">
                {p.label}
              </span>
              <span className="text-xs text-fg-faint leading-snug">
                {p.sub}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-fg-faint mt-6">
          No fake testimonials — verifiable proof only.{" "}
          <span className="text-fg-muted">
            Worked with me?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="underline underline-offset-4 hover:text-accent"
            >
              Leave a review
            </a>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
