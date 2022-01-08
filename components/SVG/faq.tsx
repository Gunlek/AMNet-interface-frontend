import { StyledBackIcon, StyledIcon } from "./style"


export  function  SVGFaq(props: {page: string}){
    if(props.page == 'faq')
    {
        return(
            <div 
                style={{
                    height: "60px", 
                    width: "60px", 
                    background:"linear-gradient(134.54deg, #67BC45 5.67%, #096A09 94.96%)", 
                    borderRadius: "15px", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="34" height="34" viewBox="0 0 8.996 8.996">
                    <path d="M42.834 51.07q0-2.333.694-4.413.756-2.144 2.71-4.918 2.27-3.215 3.09-5.548.82-2.333.82-4.918 0-2.27-.883-3.278-.883-1.072-2.585-1.072t-2.585 1.072q-.883 1.008-.883 3.278v4.792h-6.557v-4.35q0-5.36 2.585-8.197 2.585-2.9 7.566-2.9 5.044 0 7.629 2.9 2.648 2.837 2.648 8.196 0 2.9-1.072 5.612-1.009 2.648-3.53 5.99-2.018 2.71-2.838 4.539-.756 1.765-.756 3.467v2.396h-6.053Zm-.315 7.629h6.683v6.683h-6.683z" transform="translate(-4.921 -4.143) scale(.20096)" aria-label="?"/>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./faq">
                <StyledIcon xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 8.996 8.996">
                    <path d="M42.834 51.07q0-2.333.694-4.413.756-2.144 2.71-4.918 2.27-3.215 3.09-5.548.82-2.333.82-4.918 0-2.27-.883-3.278-.883-1.072-2.585-1.072t-2.585 1.072q-.883 1.008-.883 3.278v4.792h-6.557v-4.35q0-5.36 2.585-8.197 2.585-2.9 7.566-2.9 5.044 0 7.629 2.9 2.648 2.837 2.648 8.196 0 2.9-1.072 5.612-1.009 2.648-3.53 5.99-2.018 2.71-2.838 4.539-.756 1.765-.756 3.467v2.396h-6.053Zm-.315 7.629h6.683v6.683h-6.683z" transform="translate(-4.921 -4.143) scale(.20096)" aria-label="?"/>
                </StyledIcon>
            </StyledBackIcon>
        )
    }
     
};