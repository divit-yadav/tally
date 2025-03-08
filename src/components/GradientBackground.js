import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="gradient-bg"
    />
  );
}
