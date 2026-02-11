import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
                duration: 0.8, // Slow and steady
                ease: "easeInOut" // Smooth acceleration and deceleration
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
