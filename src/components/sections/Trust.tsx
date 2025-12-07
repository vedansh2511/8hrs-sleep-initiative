import { motion } from "framer-motion";
import { ShieldCheck, Award, Beaker } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "FSSAI Compliant",
    description: "Fully approved by the Food Safety and Standards Authority of India",
  },
  {
    icon: Award,
    title: "GMP Certified",
    description: "Manufactured in Good Manufacturing Practice certified facilities",
  },
  {
    icon: Beaker,
    title: "Lab Tested",
    description: "Third-party tested for purity, potency, and heavy metals",
  },
];

const Trust = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sleep That Meets the{" "}
            <span className="text-primary">Strictest Standards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to transparency, quality, and your wellbeing. Every batch is tested, every ingredient is verified.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Endorsement */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border border-border text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-indigo flex items-center justify-center text-3xl font-bold text-primary-foreground">
              DR
            </div>
            <blockquote className="text-lg md:text-xl text-foreground italic mb-6 leading-relaxed">
              "Quality sleep is the foundation of health. The 8hrs formulas combine traditional wisdom with modern science in a way that's both effective and safe."
            </blockquote>
            <p className="text-muted-foreground font-medium">
              — Dr. Ananya Sharma, Sleep Medicine Specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
