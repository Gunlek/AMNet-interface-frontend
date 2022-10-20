import { motion } from "framer-motion";
import { ReactNode } from "react";

export const UserMotionDiv = ({ children, style }: {
    children?: ReactNode,
    style?: React.CSSProperties
}) => <motion.div
    style={style}
    variants={{
        initial: { height: 0, overflowY: "clip" },
        animate: { height: "auto", overflowY: "visible", padding: "15px 0", transition: { overflowY: { delay: 0.2 } } },
        exit: { height: 0, overflowY: "clip" }
    }}
    initial="initial" animate="animate" exit="exit"
    transition={{ ease: "linear", duration: 0.3 }}
>
        {children}
    </motion.div>

export const UserInnerHTMLDiv = ({ dangerouslySetInnerHTML, style }: {
    dangerouslySetInnerHTML?: string,
    style?: React.CSSProperties
}) => <motion.div
    style={style}
    variants={{
        initial: { height: 0, overflowY: "clip" },
        animate: { height: "auto", overflowY: "visible", padding: "15px 0", transition: { overflowY: { delay: 0.2 } } },
        exit: { height: 0, overflowY: "clip" }
    }}
    initial="initial" animate="animate" exit="exit"
    transition={{ ease: "linear", duration: 0.3 }}
    dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML || "" }}
/>

export const AdminMotionDiv = ({ children, style, animate }: {
    children: ReactNode,
    style?: React.CSSProperties,
    animate?: boolean
}) => <motion.div
    style={style}
    initial={false}
    animate={{ height: animate ? 0 : "auto", padding: animate ? 0 : "15px 0", overflow: "clip" }}
    transition={{ ease: "linear", duration: 0.3 }}
>
        {children}
    </motion.div>


export const AdminInnerHTMLDiv = ({ dangerouslySetInnerHTML, style, animate }: {
    dangerouslySetInnerHTML: string,
    style?: React.CSSProperties,
    animate?: boolean
}) => <motion.div
    style={style}
    initial={false}
    animate={{ height: animate ? 0 : "auto", padding: animate ? 0 : "15px 0", overflow: "clip" }}
    transition={{ ease: "linear", duration: 0.3 }}
    dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML || "" }}
/>