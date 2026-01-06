import { motion } from "framer-motion";
import { hackathons, achievements } from "@/data/resume";
import { Trophy, Star } from "lucide-react";

const Hackathons = () => {
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
            <span className="font-mono text-lg text-primary">06.</span>
            Hackathons & Achievements
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hackathons */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-accent" size={20} />
                <h3 className="font-medium text-heading">Hackathon Experience</h3>
              </div>

              <div className="space-y-4">
                {hackathons.map((hack, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-sm font-medium text-heading">
                          {hack.event}
                        </h4>
                        <span className="font-mono text-xs px-2 py-0.5 bg-highlight-subtle text-accent rounded">
                          {hack.result}
                        </span>
                      </div>
                      <p className="text-sm text-body">{hack.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="text-accent" size={20} />
                <h3 className="font-medium text-heading">Achievements</h3>
              </div>

              <div className="bg-card p-5 rounded border border-border/50">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 text-sm text-body"
                    >
                      <span className="text-accent mt-0.5">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
