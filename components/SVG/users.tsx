import { StyledIcon, StyledBackIcon } from "../Card/style";

export  function  SVGUsers(props: {page: string}){
    if(props.page == 'users')
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
                <svg fill="white" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.722a5.777 5.777 0 1 0 0-11.555 5.777 5.777 0 0 0 0 11.555ZM28.688 13.722a3.652 3.652 0 1 0 0-7.305 3.652 3.652 0 0 0 0 7.305ZM5.313 13.722a3.652 3.652 0 1 0 0-7.305 3.652 3.652 0 0 0 0 7.305ZM8.911 17.001c-1.438-1.178-2.74-1.022-4.402-1.022C2.023 15.98 0 17.99 0 20.461v7.252c0 1.073.876 1.946 1.953 1.946 4.65 0 4.09.084 4.09-.2 0-5.14-.609-8.908 2.868-12.458Z"/>
                    
                    <path d="M18.581 16.006c-2.903-.242-5.427.003-7.604 1.8-3.643 2.917-2.942 6.846-2.942 11.652a2.33 2.33 0 0 0 2.326 2.326c14.017 0 14.575.452 15.406-1.389.273-.622.198-.424.198-6.38 0-4.73-4.096-8.01-7.384-8.01ZM29.49 15.98c-1.67 0-2.965-.155-4.401 1.021 3.45 3.524 2.868 7.035 2.868 12.457 0 .287-.465.201 4.02.201A2.02 2.02 0 0 0 34 27.644v-7.183c0-2.47-2.023-4.482-4.51-4.482Z"/>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./users">
                <StyledIcon width="34" height="34" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.722a5.777 5.777 0 1 0 0-11.555 5.777 5.777 0 0 0 0 11.555ZM28.688 13.722a3.652 3.652 0 1 0 0-7.305 3.652 3.652 0 0 0 0 7.305ZM5.313 13.722a3.652 3.652 0 1 0 0-7.305 3.652 3.652 0 0 0 0 7.305ZM8.911 17.001c-1.438-1.178-2.74-1.022-4.402-1.022C2.023 15.98 0 17.99 0 20.461v7.252c0 1.073.876 1.946 1.953 1.946 4.65 0 4.09.084 4.09-.2 0-5.14-.609-8.908 2.868-12.458Z"/>
                    
                    <path d="M18.581 16.006c-2.903-.242-5.427.003-7.604 1.8-3.643 2.917-2.942 6.846-2.942 11.652a2.33 2.33 0 0 0 2.326 2.326c14.017 0 14.575.452 15.406-1.389.273-.622.198-.424.198-6.38 0-4.73-4.096-8.01-7.384-8.01ZM29.49 15.98c-1.67 0-2.965-.155-4.401 1.021 3.45 3.524 2.868 7.035 2.868 12.457 0 .287-.465.201 4.02.201A2.02 2.02 0 0 0 34 27.644v-7.183c0-2.47-2.023-4.482-4.51-4.482Z"/>
                </StyledIcon>
            </StyledBackIcon>
        )
    }
     
};