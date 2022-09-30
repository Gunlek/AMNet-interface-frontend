import { motion } from "framer-motion";
import { ReactNode } from "react";

export const UserMotionDiv = ({ children, style, isScrolling }: {
    children: ReactNode,
    style?: React.CSSProperties,
    isScrolling?: boolean
}) => <motion.div
    style={style}
    variants={{
        initial: { height: 0, overflowY: "clip" },
        animate: { height: "auto", overflowY: "visible", transition: { overflowY: { delay: 0.2 } } },
        exit: { height: 0, overflowY: "clip" }
    }}
    initial="initial" animate="animate" exit="exit"
    transition={{ ease: "linear", duration: 0.2 }}
>
        {children}
    </motion.div>

export const AdminMotionDiv = ({ children, style, isScrolling }: {
    children: ReactNode,
    style?: React.CSSProperties,
    isScrolling?: boolean
}) => <motion.div
    style={style}
    exit={isScrolling ? null : { height: 0, overflowY: "clip" }}
    transition={{ ease: "linear", duration: 0.2 }}
>
        {children}
    </motion.div>