import { motion } from "framer-motion";

export default function TestAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Test Animation</h1>
    </motion.div>
  );
}