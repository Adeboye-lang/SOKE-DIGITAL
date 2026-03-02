import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -15 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                ease: "easeInOut"
            }}
        >
            {children}
        </m.div>
    );
};

export default PageTransition;
