import { motion } from "framer-motion";
import { FlaskConical, Leaf, Droplets, MapPin } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Science First",
    description: "Tested for purity, formulated for results. Every ingredient backed by clinical research.",
  },
  {
    icon: Leaf,
    title: "No Dependence",
    description: "Clean ingredients, non-habit forming. Sleep naturally, wake refreshed.",
  },
  {
    icon: Droplets,
    title: "Maximum Absorption",
    description: "Fast-acting powder formulas designed for optimal bioavailability.",
  },
  {
    icon: MapPin,
    title: "Made for India",
    description: "Ayurveda-inspired adaptogens meet modern sleep science.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Mission = () => {
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
            Sleep is the Core of Wellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We built the solution.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
