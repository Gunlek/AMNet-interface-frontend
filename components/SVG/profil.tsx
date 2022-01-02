import { StyledIcon, StyledBackIcon } from "../Card/style";

export  function  SVGProfil(props: {page: string}){
    if(props.page == 'profil')
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
                    <path d="M16.758 16.378c2.25 0 4.198-.807 5.79-2.4 1.592-1.591 2.4-3.539 2.4-5.79 0-2.249-.808-4.197-2.4-5.79C20.956.808 19.008 0 16.758 0s-4.198.807-5.79 2.399c-1.592 1.592-2.4 3.54-2.4 5.79s.808 4.198 2.4 5.79c1.592 1.592 3.54 2.399 5.79 2.399ZM31.087 26.144a20.222 20.222 0 0 0-.276-2.148 16.925 16.925 0 0 0-.528-2.16 10.665 10.665 0 0 0-.888-2.014 7.602 7.602 0 0 0-1.34-1.745 5.902 5.902 0 0 0-1.923-1.209 6.646 6.646 0 0 0-2.455-.444c-.347 0-.683.142-1.331.564-.399.26-.866.561-1.387.894-.445.284-1.048.55-1.793.79a7.123 7.123 0 0 1-2.195.355 7.13 7.13 0 0 1-2.194-.355c-.744-.24-1.348-.506-1.793-.79-.516-.33-.983-.63-1.387-.894-.648-.422-.984-.565-1.331-.565-.884 0-1.71.15-2.455.445a5.9 5.9 0 0 0-1.924 1.209A7.602 7.602 0 0 0 4.55 19.82c-.37.65-.668 1.328-.888 2.015-.213.665-.39 1.391-.528 2.16a20.15 20.15 0 0 0-.276 2.15c-.045.65-.068 1.325-.068 2.007 0 1.775.564 3.212 1.677 4.271C5.565 33.47 7.019 34 8.786 34h16.372c1.768 0 3.221-.53 4.32-1.576 1.113-1.059 1.677-2.496 1.677-4.271 0-.685-.023-1.361-.068-2.009Z"/>
                </svg>
            </div>
        ) 
    }
    else{
        return(
            <StyledBackIcon href="./profil">
                <StyledIcon width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.758 16.378c2.25 0 4.198-.807 5.79-2.4 1.592-1.591 2.4-3.539 2.4-5.79 0-2.249-.808-4.197-2.4-5.79C20.956.808 19.008 0 16.758 0s-4.198.807-5.79 2.399c-1.592 1.592-2.4 3.54-2.4 5.79s.808 4.198 2.4 5.79c1.592 1.592 3.54 2.399 5.79 2.399ZM31.087 26.144a20.222 20.222 0 0 0-.276-2.148 16.925 16.925 0 0 0-.528-2.16 10.665 10.665 0 0 0-.888-2.014 7.602 7.602 0 0 0-1.34-1.745 5.902 5.902 0 0 0-1.923-1.209 6.646 6.646 0 0 0-2.455-.444c-.347 0-.683.142-1.331.564-.399.26-.866.561-1.387.894-.445.284-1.048.55-1.793.79a7.123 7.123 0 0 1-2.195.355 7.13 7.13 0 0 1-2.194-.355c-.744-.24-1.348-.506-1.793-.79-.516-.33-.983-.63-1.387-.894-.648-.422-.984-.565-1.331-.565-.884 0-1.71.15-2.455.445a5.9 5.9 0 0 0-1.924 1.209A7.602 7.602 0 0 0 4.55 19.82c-.37.65-.668 1.328-.888 2.015-.213.665-.39 1.391-.528 2.16a20.15 20.15 0 0 0-.276 2.15c-.045.65-.068 1.325-.068 2.007 0 1.775.564 3.212 1.677 4.271C5.565 33.47 7.019 34 8.786 34h16.372c1.768 0 3.221-.53 4.32-1.576 1.113-1.059 1.677-2.496 1.677-4.271 0-.685-.023-1.361-.068-2.009Z"/>
                </StyledIcon>
            </StyledBackIcon>   
        )
    }
};