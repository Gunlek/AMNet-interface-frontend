import { StyledBackIcon, StyledIcon } from "./style"

export default function Material(props: {page: string, location: string}){
    if(props.page == 'material')
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
                <svg width="34" height="33" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.203 27.532-3.047 4.676H24.24l-3.046-4.675h-7.992ZM31.35 0H2.65C1.185 0 0 1.395 0 3.117v19.22c0 1.722 1.186 3.117 2.65 3.117h28.7c1.464 0 2.65-1.395 2.65-3.116V3.117C34 1.395 32.814 0 31.35 0Z" />
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon content={props.location=="dashboard" && "Matériel"} href={"../"+props.location+"/material"}>
                <StyledIcon width="34" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.203 27.532-3.047 4.676H24.24l-3.046-4.675h-7.992ZM31.35 0H2.65C1.185 0 0 1.395 0 3.117v19.22c0 1.722 1.186 3.117 2.65 3.117h28.7c1.464 0 2.65-1.395 2.65-3.116V3.117C34 1.395 32.814 0 31.35 0Z" />
                </StyledIcon>   
            </StyledBackIcon>
            
        )
    }
};