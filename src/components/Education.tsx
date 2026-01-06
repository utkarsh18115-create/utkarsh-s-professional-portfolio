import { motion } from "framer-motion";
import { education, certifications } from "@/data/resume";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-semibold text-heading mb-10">
            <span className="font-mono text-lg text-primary">05.</span>
            Education & Certifications
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-accent" size={24} />
                <h3 className="text-lg font-medium text-heading">Education</h3>
              </div>

              <div className="bg-card p-6 rounded border border-border/50">
                <h4 className="font-medium text-heading mb-1">
                  {education.institution}
                </h4>
                <p className="text-body text-sm mb-2">{education.degree}</p>
                <p className="font-mono text-xs text-subtle">
                  {education.year} · Expected {education.graduation}
                </p>
                <p className="text-xs text-subtle mt-1">{education.location}</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={24} />
                <h3 className="text-lg font-medium text-heading">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-card p-4 rounded border border-border/50"
                  >
                    <h4 className="font-medium text-heading text-sm mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-subtle mb-1">{cert.issuer}</p>
                    <p className="text-xs text-body">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
