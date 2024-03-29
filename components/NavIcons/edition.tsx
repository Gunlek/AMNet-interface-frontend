import Link from "next/link"
import { StyledActiveIcon, StyledActiveSVG, StyledBackIcon, StyledIcon } from "./style"
import dynamic from "next/dynamic";
const StyledTooltip = dynamic(() => import("./style").then((mod) => mod.StyledTooltip));

export default function Edition(props: { page: string }) {
    const content = "Edition"
    if (props.page == 'edition') {
        return (
            <>
                <StyledActiveIcon tooltip={content} />
                <StyledActiveSVG xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 8.996 8.996">
                    <path d="m8.877 1.669-.755.755L6.573.876 7.33.12a.415.415 0 0 1 .581 0l.967.967a.415.415 0 0 1 0 .582zM1.551 5.89l4.577-4.577 1.548 1.548-4.57 4.585H1.552Z" />
                    <path d="M6.798 4.421c-3.68 0-6.682 3-6.682 6.675v18.1c0 3.675 3.001 6.674 6.682 6.674H24.89c3.68 0 6.675-3 6.675-6.673v-9.051h-1.753v9.05a4.906 4.906 0 0 1-4.922 4.922H6.798a4.913 4.913 0 0 1-4.929-4.921V11.096a4.914 4.914 0 0 1 4.929-4.923h9.044V4.421Z" transform="matrix(.2507 0 0 .2507 -.03 .001)" />
                </StyledActiveSVG>
            </>
        )
    }
    else {
        return (
            <Link href="/admin/edition" passHref scroll={false}>
                <StyledBackIcon>
                    <StyledIcon xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 8.996 8.996">
                        <path d="m8.877 1.669-.755.755L6.573.876 7.33.12a.415.415 0 0 1 .581 0l.967.967a.415.415 0 0 1 0 .582zM1.551 5.89l4.577-4.577 1.548 1.548-4.57 4.585H1.552Z" />
                        <path d="M6.798 4.421c-3.68 0-6.682 3-6.682 6.675v18.1c0 3.675 3.001 6.674 6.682 6.674H24.89c3.68 0 6.675-3 6.675-6.673v-9.051h-1.753v9.05a4.906 4.906 0 0 1-4.922 4.922H6.798a4.913 4.913 0 0 1-4.929-4.921V11.096a4.914 4.914 0 0 1 4.929-4.923h9.044V4.421Z" transform="matrix(.2507 0 0 .2507 -.03 .001)" />
                    </StyledIcon>
                    <StyledTooltip>{content}</StyledTooltip>
                </StyledBackIcon>
            </Link>
        )
    }
};