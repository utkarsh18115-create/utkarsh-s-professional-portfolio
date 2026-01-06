import { motion } from "framer-motion";
import { experience } from "@/data/resume";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-semibold text-heading mb-10">
            <span className="font-mono text-lg text-primary">02.</span>
            Experience
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-heading">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-subtle">
                    {exp.duration} · {exp.type}
                  </p>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-body">
                      <span className="text-accent mt-1.5 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
