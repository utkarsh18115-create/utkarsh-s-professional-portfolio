import { motion } from "framer-motion";
import { skills } from "@/data/resume";

const skillGroups = [
  { title: "Programming Languages", items: skills.languages },
  { title: "AI & Machine Learning", items: skills.aiMl },
  { title: "Data & Visualization", items: skills.dataViz },
  { title: "Web & Frameworks", items: skills.webFrameworks },
  { title: "Databases & Tools", items: skills.databases },
  { title: "Quantum (Basics)", items: skills.quantum },
];

const Skills = () => {
  return (
    <section className="py-24 bg-surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-semibold text-heading mb-10">
            <span className="font-mono text-lg text-primary">04.</span>
            Skills
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="font-mono text-sm font-medium text-heading mb-4 pb-2 border-b border-border">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-body"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
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

export default Skills;
