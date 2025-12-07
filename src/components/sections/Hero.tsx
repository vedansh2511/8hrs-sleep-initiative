import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";
import heroBedroom from "@/assets/hero-bedroom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBedroom}
          alt="Peaceful bedroom at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Floating Logo Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="text-[120px] md:text-[180px] lg:text-[220px] font-bold opacity-10 text-primary-foreground select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="font-sans">8</span>
          <span className="font-script">hrs</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Logo size="xl" variant="white" />
        </motion.div>

        <motion.span
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-lavender-light bg-lavender/20 rounded-full border border-lavender/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Coming Soon
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-4xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The New Formula for{" "}
          <span className="text-gradient-primary bg-gradient-to-r from-lavender-light to-teal-light bg-clip-text text-transparent">
            India's Sleep Crisis
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're helping you master your sleep cycle and wake up with 8 hours of deep, restorative rest.{" "}
          <span className="text-primary-foreground font-medium">Non-habit forming, science-backed.</span>
        </motion.p>

        <EmailSignup variant="hero" />

        <motion.p
          className="mt-6 text-sm text-primary-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join 2,400+ people waiting for launch • Get 20% off your first order
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
