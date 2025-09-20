"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        Build skills faster with AI-powered learning
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
      >
        Upskillr combines AI-driven course creation, personalized learning
        paths, and secure infrastructure to help you grow with confidence.
      </motion.p>

      <div className="mt-6 flex justify-center gap-4">
        <Button size="lg">Start Learning Free</Button>
        <Button variant="outline" size="lg">
          Request Demo
        </Button>
      </div>
    </section>
  );
}
