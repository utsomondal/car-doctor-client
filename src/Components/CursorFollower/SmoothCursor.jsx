import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SmoothCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  const size = 48;

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 loading loading-ring text-gray-800 rounded-full pointer-events-none z-50"
      animate={{
        x: pos.x - size / 2,
        y: pos.y - size / 2,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.5 }}
    />
  );
};

export default SmoothCursor;
