import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Header = () => {
  const scrollToSignup = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="md" />
        <motion.button
          onClick={scrollToSignup}
          className="px-6 py-2.5 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Early Access
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
