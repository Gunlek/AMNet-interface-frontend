import { motion } from "framer-motion"
import { StyledBackBurger } from "./style"

export default function BurgerMenu(props: { open: boolean }) {
    return (
        <>
            <StyledBackBurger animate={{ opacity: props.open ? 1 : 0 }} initial={{ opacity: 0 }} layout/>
            <motion.svg
                variants={props.open ?
                    { exit: { fill: "#C5C7C6" }, animate: { fill: "#FFFFFF" }, initial: { fill: "#FFFFFF" } }
                    :
                    { exit: { fill: "#C5C7C6" }, animate: { fill: "#C5C7C6" }, initial: { fill: "#C5C7C6" } }
                }
                exit="exit"
                animate="animate"
                initial="initial"
                transition={{ ease: "linear", duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 8.996 8.996"
            >
                <path transform="matrix(.49977 0 0 .47412 -1.5 -.983)" d="M3 6.532c0-.374.141-.732.392-.997.251-.264.591-.413.946-.413h15.324c.355 0 .695.149.946.413.251.265.392.623.392.997v.058c0 .374-.141.733-.392.997a1.306 1.306 0 0 1-.946.413H4.338c-.355 0-.695-.149-.946-.413A1.448 1.448 0 0 1 3 6.59Zm0 5c0-.374.141-.732.392-.997.251-.264.591-.413.946-.413h15.324c.355 0 .695.149.946.413.251.265.392.623.392.997v.058c0 .374-.141.733-.392.997a1.306 1.306 0 0 1-.946.413H4.338c-.355 0-.695-.149-.946-.413A1.448 1.448 0 0 1 3 11.59Zm0 5c0-.374.141-.732.392-.997.251-.264.591-.413.946-.413h15.324c.355 0 .695.149.946.413.251.265.392.623.392.997v.058c0 .374-.141.733-.392.997a1.306 1.306 0 0 1-.946.413H4.338c-.355 0-.695-.149-.946-.413A1.448 1.448 0 0 1 3 16.59Z" />
            </motion.svg>
        </>
    )
};