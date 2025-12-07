import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EmailSignupProps {
  variant?: "hero" | "footer";
}

const EmailSignup = ({ variant = "hero" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    setEmail("");
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when we launch with an exclusive 20% off.",
    });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  const isHero = variant === "hero";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 w-full ${isHero ? "max-w-md" : "max-w-lg"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`w-full px-5 py-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 
            ${isHero 
              ? "bg-background/90 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50" 
              : "bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50"
            }`}
          disabled={isLoading}
        />
      </div>
      <motion.button
        type="submit"
        disabled={isLoading || isSuccess}
        className={`px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 min-w-[180px]
          ${isSuccess 
            ? "bg-teal text-primary-foreground" 
            : "bg-primary text-primary-foreground hover:bg-indigo-light active:scale-[0.98]"
          }
          disabled:opacity-70 shadow-elevated hover:shadow-glow`}
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : isSuccess ? (
          <>
            <Check className="w-5 h-5" />
            You're In!
          </>
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default EmailSignup;
