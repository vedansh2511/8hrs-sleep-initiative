import { motion } from "framer-motion";
import { Moon, Sparkles, Heart } from "lucide-react";

const products = [
  {
    name: "Deep Sleep",
    tagline: "The Melatonin-based Rapid Fix",
    description: "Fast-acting formula for those nights when you need to fall asleep quickly. Reset your circadian rhythm.",
    icon: Moon,
    gradient: "bg-gradient-indigo",
    accentColor: "indigo",
    borderColor: "border-indigo/30",
    bgGlow: "bg-indigo/5",
  },
  {
    name: "Sleep Dream",
    tagline: "The Daily Stress & Recovery Powder",
    description: "Adaptogenic blend for nightly relaxation. Reduce stress, enhance recovery, wake restored.",
    icon: Sparkles,
    gradient: "bg-gradient-teal",
    accentColor: "teal",
    borderColor: "border-teal/30",
    bgGlow: "bg-teal/5",
  },
  {
    name: "Sleeping Beauty",
    tagline: "Restorative Sleep + Collagen for Glow",
    description: "Beauty sleep redefined. Collagen peptides meet sleep enhancers for radiant skin and restful nights.",
    icon: Heart,
    gradient: "bg-gradient-lavender",
    accentColor: "lavender",
    borderColor: "border-lavender/30",
    bgGlow: "bg-lavender/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Products = () => {
  const scrollToSignup = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Your Perfect Formula
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three distinct formulas, each designed for a specific sleep goal.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-3xl border ${product.borderColor} bg-card transition-all duration-500 hover:shadow-elevated`}>
                {/* Product Color Header */}
                <div className={`h-48 ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <product.icon className="w-20 h-20 text-primary-foreground/90" />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className={`p-8 ${product.bgGlow}`}>
                  <span className={`text-sm font-medium uppercase tracking-wider text-${product.accentColor}`}>
                    {product.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button
                    onClick={scrollToSignup}
                    className={`text-sm font-semibold text-${product.accentColor} hover:underline transition-colors flex items-center gap-2`}
                  >
                    Get notified at launch →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
