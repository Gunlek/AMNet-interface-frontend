import { StyledBackIcon, StyledIcon } from "./style"

export  function  SVGFiles(props: {page: string}){
    if(props.page == 'file')
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
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 19.579 19.579" fill="white">
                    <path  d="m131.46 144.04-3.264-3.262a.816.816 0 0 0-1.392.577v2.447h-3.264a.816.816 0 0 0 0 1.631h3.264v2.448a.816.816 0 0 0 1.392.576l3.264-3.263a.815.815 0 0 0 0-1.153zm-6.115-8.712a.332.332 0 0 0-.33.332v6.16h.662v-5.828h9.356v3.035a.332.332 0 0 0 .332.33h3.035v14.887h-12.723v-6.943h-.662v7.275a.332.332 0 0 0 .33.332h13.387a.332.332 0 0 0 .332-.332v-15.549a.332.332 0 0 0-.097-.236l-3.368-3.365a.332.332 0 0 0-.234-.098zm10.352 1.133 2.234 2.235h-2.234z" transform="translate(-121.115 -135.328)"/>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./files">
                <StyledIcon xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 19.579 19.579">
                    <path  d="m131.46 144.04-3.264-3.262a.816.816 0 0 0-1.392.577v2.447h-3.264a.816.816 0 0 0 0 1.631h3.264v2.448a.816.816 0 0 0 1.392.576l3.264-3.263a.815.815 0 0 0 0-1.153zm-6.115-8.712a.332.332 0 0 0-.33.332v6.16h.662v-5.828h9.356v3.035a.332.332 0 0 0 .332.33h3.035v14.887h-12.723v-6.943h-.662v7.275a.332.332 0 0 0 .33.332h13.387a.332.332 0 0 0 .332-.332v-15.549a.332.332 0 0 0-.097-.236l-3.368-3.365a.332.332 0 0 0-.234-.098zm10.352 1.133 2.234 2.235h-2.234z" transform="translate(-121.115 -135.328)"/>
                </StyledIcon>
            </StyledBackIcon>
        )
    }
     
};