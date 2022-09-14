import Link from "next/link"
import { StyledActiveIcon, StyledActiveSVG, StyledBackIcon, StyledIcon } from "./style"
import dynamic from "next/dynamic";
const StyledTooltip = dynamic(() => import("./style").then((mod) => mod.StyledTooltip));

export default function IoT(props: { page: string, admin?: boolean }) {
    const content = "AMNet IoT"
    if (props.page == 'iot') {
        return (
            <>
                <StyledActiveIcon tooltip={content} />
                <StyledActiveSVG height="34" width="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 27.82">
                    <path d="M0,23.24v4.58H4.7A4.59,4.59,0,0,0,0,23.24Zm0-6.18v3.09a7.73,7.73,0,0,1,7.79,7.67h3.09A10.87,10.87,0,0,0,0,17.06Zm0-6.18V14A14,14,0,0,1,14,27.82h3.09A17,17,0,0,0,0,10.88ZM30.91,0H3.09A3.06,3.06,0,0,0,0,3.09v4.7H3.09V3.09H30.91V24.73H20.15v3.09H30.91A3.06,3.06,0,0,0,34,24.73V3.09A3.06,3.06,0,0,0,30.91,0Z" />
                </StyledActiveSVG>
            </>
        )
    }
    else {
        return (
            <Link href={props.admin ? "/admin/iot" : "/iot"} passHref scroll={false}>
                <StyledBackIcon>
                    <StyledIcon height="34" width="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 27.82">
                        <path d="M0,23.24v4.58H4.7A4.59,4.59,0,0,0,0,23.24Zm0-6.18v3.09a7.73,7.73,0,0,1,7.79,7.67h3.09A10.87,10.87,0,0,0,0,17.06Zm0-6.18V14A14,14,0,0,1,14,27.82h3.09A17,17,0,0,0,0,10.88ZM30.91,0H3.09A3.06,3.06,0,0,0,0,3.09v4.7H3.09V3.09H30.91V24.73H20.15v3.09H30.91A3.06,3.06,0,0,0,34,24.73V3.09A3.06,3.06,0,0,0,30.91,0Z" />
                    </StyledIcon>
                    <StyledTooltip>{content}</StyledTooltip>
                </StyledBackIcon>
            </Link>
        )
    }
};