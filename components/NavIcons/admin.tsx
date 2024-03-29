import Link from "next/link";
import { StyledActiveIcon, StyledActiveSVG, StyledBackIcon, StyledIcon } from "./style"
import dynamic from "next/dynamic";
const StyledTooltip = dynamic(() => import("./style").then((mod) => mod.StyledTooltip));

export default function Admin(props: { page: string, setTransition?: Function }) {
    const content = "Administration";
    if (props.page == 'admin') {
        return (
            <>
                <StyledActiveIcon tooltip={content} />
                <StyledActiveSVG width="34" height="34" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.12 15.76a13.014 13.014 0 0 0-.818-3.62l3.064-2.455-4.98-6.217-3.045 2.44a13.006 13.006 0 0 0-3.394-1.633V.405H12.98V4.3a12.992 12.992 0 0 0-3.535 1.762L6.37 3.67 1.481 9.96l3.132 2.433a13.033 13.033 0 0 0-.744 3.616L0 16.935l1.853 7.747 2.723-.651 4.143-4.144c-2.116-5.742 2.138-11.88 8.287-11.88a8.829 8.829 0 0 1 8.828 8.828c0 6.022-5.909 10.274-11.606 8.382l-5.903 5.902 5.253 2.476 1.747-3.706c1.207.155 2.41.142 3.594-.03l1.79 3.657 7.155-3.5-1.785-3.649a13.091 13.091 0 0 0 2.261-2.844l3.92.877L34 16.627l-3.88-.868Z" />

                    <path d="m22.664 14.547-.56-1.406-3.363 3.363-1.51-1.511 3.363-3.363-1.406-.56c-5.503-2.188-10.59 3.832-7.702 8.866L1.48 29.942l2.603 2.602L14.18 22.447c5.079 2.463 10.578-2.637 8.483-7.9Z" />
                </StyledActiveSVG>
            </>
        )
    }
    else {
        return (
            <Link href="/admin/" passHref scroll={false}>
                <StyledBackIcon onClick={props.setTransition}>
                    <StyledIcon width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.12 15.76a13.014 13.014 0 0 0-.818-3.62l3.064-2.455-4.98-6.217-3.045 2.44a13.006 13.006 0 0 0-3.394-1.633V.405H12.98V4.3a12.992 12.992 0 0 0-3.535 1.762L6.37 3.67 1.481 9.96l3.132 2.433a13.033 13.033 0 0 0-.744 3.616L0 16.935l1.853 7.747 2.723-.651 4.143-4.144c-2.116-5.742 2.138-11.88 8.287-11.88a8.829 8.829 0 0 1 8.828 8.828c0 6.022-5.909 10.274-11.606 8.382l-5.903 5.902 5.253 2.476 1.747-3.706c1.207.155 2.41.142 3.594-.03l1.79 3.657 7.155-3.5-1.785-3.649a13.091 13.091 0 0 0 2.261-2.844l3.92.877L34 16.627l-3.88-.868Z" />

                        <path d="m22.664 14.547-.56-1.406-3.363 3.363-1.51-1.511 3.363-3.363-1.406-.56c-5.503-2.188-10.59 3.832-7.702 8.866L1.48 29.942l2.603 2.602L14.18 22.447c5.079 2.463 10.578-2.637 8.483-7.9Z" />
                    </StyledIcon>
                    <StyledTooltip>{content}</StyledTooltip>
                </StyledBackIcon>
            </Link>
        )
    }
};