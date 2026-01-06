import { motion } from "framer-motion";
import { about, skills } from "@/data/resume";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-semibold text-heading mb-10">
            <span className="font-mono text-lg text-primary">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              {about.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-body leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-sm text-heading font-medium mb-4">
                Technologies I work with:
              </h3>
              
              <div className="space-y-4">
                <SkillGroup title="Languages" items={skills.languages.slice(0, 4)} />
                <SkillGroup title="AI/ML" items={skills.aiMl.slice(0, 4)} />
                <SkillGroup title="Web" items={skills.webFrameworks} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <p className="text-xs text-subtle uppercase tracking-wider mb-2">{title}</p>
    <ul className="grid grid-cols-2 gap-1">
      {items.map((skill) => (
        <li key={skill} className="font-mono text-xs text-body flex items-center gap-2">
          <span className="text-accent">▹</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
