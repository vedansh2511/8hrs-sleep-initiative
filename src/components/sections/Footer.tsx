import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Final CTA Section */}
      <section id="final-cta" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo size="lg" variant="white" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-6">
              Don't Miss the Launch
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              Get early access, exclusive offers, and sleep tips from 8hrs.club. 
              Be the first to experience better sleep.
            </p>

            <div className="flex justify-center">
              <EmailSignup variant="footer" />
            </div>

            <p className="mt-6 text-sm text-primary-foreground/50">
              Join 2,400+ people on the waitlist
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/8hrsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/8hrsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@8hrs.club"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-primary-foreground/50">
              © 2024 8hrs.club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
