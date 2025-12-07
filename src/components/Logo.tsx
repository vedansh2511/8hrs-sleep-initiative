import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white";
}

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

const Logo = ({ size = "md", variant = "default" }: LogoProps) => {
  const textColor = variant === "white" ? "text-primary-foreground" : "text-primary";
  
  return (
    <motion.div 
      className="flex items-baseline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className={`font-sans font-bold ${sizeClasses[size]} ${textColor} tracking-tight`}>
        8
      </span>
      <span className={`font-script ${sizeClasses[size]} ${textColor} -ml-0.5`}>
        hrs
      </span>
    </motion.div>
  );
};

export default Logo;
