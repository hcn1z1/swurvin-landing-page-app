import React, { Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";

const LazyLoadSection = ({ children, fallback }) => {
  // Create a ref to attach to a DOM element
  const ref = useRef(null);

  // This hook checks if the ref is visible in the viewport
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    // We wrap in a container that we can observe
    <div ref={ref}>
      <motion.div
        // "initial" animation style
        initial={{ opacity: 0, y: 50 }}
        // "animate" only if visible
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Once in view, load the Suspense children */}
        {isInView ? (
          <Suspense fallback={fallback}>{children}</Suspense>
        ) : (
          fallback
        )}
      </motion.div>
    </div>
  );
};

export default LazyLoadSection;
