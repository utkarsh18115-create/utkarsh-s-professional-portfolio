import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-primary mb-4">07. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-heading mb-6">
            Get In Touch
          </h2>
          <p className="text-body mb-10 leading-relaxed">
            I'm currently looking for AI/ML and software development opportunities. 
            Whether you have a question, want to discuss a project, or just want to 
            say hi—my inbox is always open.
          </p>

          {/* Contact Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-subtle hover:text-heading transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-subtle hover:text-heading transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-subtle hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="text-left space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded text-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded text-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded text-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
            
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm mt-3">✓ Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm mt-3">✗ Failed to send message. Please try again or email me directly.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
