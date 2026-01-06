import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  // Featured projects (first 3)
  const featured = projects.slice(0, 3);
  const other = projects.slice(3);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-semibold text-heading mb-10">
            <span className="font-mono text-lg text-primary">03.</span>
            Projects
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featured.map((project, index) => (
              <FeaturedProject key={index} project={project} index={index} />
            ))}
          </div>

          {/* Other Projects */}
          {other.length > 0 && (
            <div>
              <h3 className="text-center text-lg font-medium text-heading mb-8">
                Other Notable Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {other.map((project, index) => (
                  <OtherProject key={index} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  subtitle?: string;
  status?: string;
  date?: string;
  description: string;
  tech: string[];
  github: string | null;
}

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative grid md:grid-cols-12 gap-4 items-center ${
        isEven ? "" : "md:text-right"
      }`}
    >
      {/* Project Info */}
      <div
        className={`md:col-span-7 relative z-10 ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        }`}
      >
        <p className="font-mono text-xs text-accent mb-2">
          {project.status || project.date}
        </p>
        <h3 className="text-xl font-semibold text-heading mb-2">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm text-subtle mb-4">{project.subtitle}</p>
        )}

        <div className="bg-card p-5 rounded shadow-sm border border-border/50 mb-4">
          <p className="text-body text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul
          className={`flex flex-wrap gap-3 font-mono text-xs text-subtle ${
            isEven ? "" : "md:justify-end"
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {project.github && (
          <div className={`mt-4 flex gap-4 ${isEven ? "" : "md:justify-end"}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const OtherProject = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-card p-6 rounded border border-border/50 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <Folder className="text-accent" size={32} />
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-heading transition-colors"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      <h4 className="text-lg font-medium text-heading mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h4>

      <p className="text-sm text-body leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 font-mono text-xs text-subtle">
        {project.tech.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Projects;
