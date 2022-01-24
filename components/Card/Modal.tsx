import React, { useState } from "react";
import { GreenButton } from "../Button/Buttons";
import useMediaQuery from "../MediaQueries/MediaQuery";
import { BlackText, GreenTitle, StyledLink } from "../Text/style";
import { TitleCard } from "./Cards";
import { StyledCard} from "./style";

export const ModalLogic = () =>{
    var [reveal, setreveal] = useState(false);

    function toggle(){
        setreveal(!reveal);
    }

    return{
        reveal, 
        toggle
    }
}

export default function(props: {reveal: boolean, hide: any})  {
    const minWidth1000 = useMediaQuery('(min-width: 1000px)')

    return props.reveal ?(
    <>
        <div 
            onClick={props.hide} 
            style={{
                background:"rgba(0, 0, 0, 0.3)", 
                position: "fixed", 
                height:"100%", 
                width:"100%", 
                left:"0", 
                top:"0"
            }}
        />
        <StyledCard 
            style={{
                width: minWidth1000 ? "600px" : "90%", 
                alignItems:"center", 
                background: "rgba(255, 255, 255)", 
                padding:"30px", 
                position: "fixed", 
                top:"50%", 
                left:"50%",  
                transform: "translate(-50%, -50%)" 
            }}
        >  
            <TitleCard>Cotisation</TitleCard>  
            <BlackText style={{marginBottom:"30px", textAlign:"justify"}}>
                Le paiement de la cotisation s'effectue en utilisant Lydia. Il vous sera proposé d'utiliser votre compte Lydia pour régler votre cotisation. Si vous n'êtes pas titulaire d'un compte Lydia, il vous sera possible de réaliser le paiement en utilisant votre carte bancaire.
                <br/><br/>
                En cas de problème lors du paiement, n'hésitez pas à nous en informer à  <StyledLink color="#096a09" style={{fontSize: "1em"}} href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink>
            </BlackText>
            <GreenButton width={minWidth1000 ? "500px" : "100%"}>Cliquez pour procéder au paiement (35€)</GreenButton>
        </StyledCard>
    </>
    )  : null;
} 