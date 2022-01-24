import { StyledBackIcon, StyledIcon } from "./style"


export default function Faq(props: {page: string}){
    if(props.page == 'faq')
    {
        return(
            <div 
                style={{
                    height: "60px", 
                    width: "60px", 
                    background:"linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%)", 
                    borderRadius: "15px", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <svg viewBox="0 0 25 43"  width="34" height="34" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="white">
                    <path d="M12 2c5.354.223 7.677 5.618 4.5 9.67-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08.66-1 2-1.59 2.83-2.25C15.916 8.43 15.32 5.257 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6Z"  transform="matrix(2.05 0 0 2.05 -12.04 -3.46)"/>
                    <g transform="matrix(2 0 0 2 -2234.14 -3463.86)">
                        <path d="M1122.81 1749.5c.96 0 1.75.78 1.75 1.75s-.79 1.75-1.75 1.75c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75Zm0 2.36c-.34 0-.61-.27-.61-.61 0-.34.27-.61.61-.61.33 0 .61.27.61.61 0 .34-.28.61-.61.61Z"/>
                    </g>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./faq">
                <StyledIcon width="34" height="34" viewBox="0 0 25 43" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                    <path d="M12 2c5.354.223 7.677 5.618 4.5 9.67-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08.66-1 2-1.59 2.83-2.25C15.916 8.43 15.32 5.257 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6Z" transform="matrix(2.05 0 0 2.05 -12.04 -3.46)"/>
                    <g transform="matrix(2 0 0 2 -2234.14 -3463.86)">
                        <path d="M1122.81 1749.5c.96 0 1.75.78 1.75 1.75s-.79 1.75-1.75 1.75c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75Zm0 2.36c-.34 0-.61-.27-.61-.61 0-.34.27-.61.61-.61.33 0 .61.27.61.61 0 .34-.28.61-.61.61Z"/>
                    </g>
                </StyledIcon>
            </StyledBackIcon>
        )
    }
     
};