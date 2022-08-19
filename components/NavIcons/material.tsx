import Link from "next/link";
import { StyledActiveIcon, StyledActiveSVG, StyledBackIcon, StyledIcon, StyledTooltip } from "./style"

export default function Material(props: { page: string, admin?: boolean }) {
    const content = "Matériel";
    if (props.page == 'material') {
        return (
            <>
                <StyledActiveIcon tooltip={content} />
                <StyledActiveSVG width="34" height="33" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.203 27.532-3.047 4.676H24.24l-3.046-4.675h-7.992ZM31.35 0H2.65C1.185 0 0 1.395 0 3.117v19.22c0 1.722 1.186 3.117 2.65 3.117h28.7c1.464 0 2.65-1.395 2.65-3.116V3.117C34 1.395 32.814 0 31.35 0Z" />
                </StyledActiveSVG>
            </>
        )
    }
    else {
        return (
            <Link href={props.admin ? "/admin/material" : "/material"} passHref scroll={false}>
                <StyledBackIcon>
                    <StyledIcon width="34" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.203 27.532-3.047 4.676H24.24l-3.046-4.675h-7.992ZM31.35 0H2.65C1.185 0 0 1.395 0 3.117v19.22c0 1.722 1.186 3.117 2.65 3.117h28.7c1.464 0 2.65-1.395 2.65-3.116V3.117C34 1.395 32.814 0 31.35 0Z" />
                    </StyledIcon>
                    <StyledTooltip>{content}</StyledTooltip>
                </StyledBackIcon>
            </Link>
        )
    }
};