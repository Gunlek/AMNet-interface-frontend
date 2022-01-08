import { StyledBackIcon, StyledIcon } from "./style"

export  function  SVGHome(props: {page: string}){
    if(props.page == 'home')
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
                <svg width="34" height="34" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="m33.083 14.788-.002-.002L19.211.917A3.109 3.109 0 0 0 17 0a3.11 3.11 0 0 0-2.214.917L.923 14.779l-.014.014a3.134 3.134 0 0 0 .006 4.42 3.112 3.112 0 0 0 2.173.917h.553v10.207A3.667 3.667 0 0 0 7.305 34h5.426c.55 0 .996-.446.996-.996v-8.002c0-.922.75-1.671 1.671-1.671h3.2c.922 0 1.672.75 1.672 1.671v8.002c0 .55.446.996.996.996h5.426a3.667 3.667 0 0 0 3.664-3.663V20.13h.512a3.11 3.11 0 0 0 2.214-.916 3.135 3.135 0 0 0 .001-4.426Z" />
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="/../dashboard/home">
                <StyledIcon width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m33.083 14.788-.002-.002L19.211.917A3.109 3.109 0 0 0 17 0a3.11 3.11 0 0 0-2.214.917L.923 14.779l-.014.014a3.134 3.134 0 0 0 .006 4.42 3.112 3.112 0 0 0 2.173.917h.553v10.207A3.667 3.667 0 0 0 7.305 34h5.426c.55 0 .996-.446.996-.996v-8.002c0-.922.75-1.671 1.671-1.671h3.2c.922 0 1.672.75 1.672 1.671v8.002c0 .55.446.996.996.996h5.426a3.667 3.667 0 0 0 3.664-3.663V20.13h.512a3.11 3.11 0 0 0 2.214-.916 3.135 3.135 0 0 0 .001-4.426Z"/>
                </StyledIcon> 
            </StyledBackIcon> 
        )
    }
     
};