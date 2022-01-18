import { 
    StyledBackIcon, 
    StyledIcon, 
    StyledPath 
} from "./style"

export  function  SVGFiles(props: {page: string}){
    if(props.page == 'file')
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
                <svg width="36" height="36" viewBox="0 0 36 36" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="white"
                    ><path d="m21.7 13.35-1 1-2.05-2.05 1-1a.55.55 0 0 1 .77 0l1.28 1.28a.55.55 0 0 1 0 .77ZM12 18.94l6.06-6.06 2.05 2.05L14.06 21H12v-2.06Z" transform="matrix(3.01272 0 0 3.01272 -29.85 -33.569)"/>
                    <path d="M1070.63 1722.86h-12.18c-4.32 0-7.82 3.5-7.82 7.81v24.38c0 4.31 3.5 7.81 7.82 7.81h24.37c4.32 0 7.81-3.5 7.81-7.81v-12.19" style={{fill:"none", stroke:"white", strokeWidth:"3.36px"}} transform="matrix(.74242 0 0 .74242 -779.016 -1273.788)"/>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./files">
                <StyledIcon width="36" height="36" viewBox="0 0 36 36" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m21.7 13.35-1 1-2.05-2.05 1-1a.55.55 0 0 1 .77 0l1.28 1.28a.55.55 0 0 1 0 .77ZM12 18.94l6.06-6.06 2.05 2.05L14.06 21H12v-2.06Z"  transform="matrix(3.01272 0 0 3.01272 -29.85 -33.569)"/>
                    <StyledPath d="M1070.63 1722.86h-12.18c-4.32 0-7.82 3.5-7.82 7.81v24.38c0 4.31 3.5 7.81 7.82 7.81h24.37c4.32 0 7.81-3.5 7.81-7.81v-12.19" transform="matrix(.74242 0 0 .74242 -779.016 -1273.788)"/>
                </StyledIcon>
                
            </StyledBackIcon>
        )
    }
     
};