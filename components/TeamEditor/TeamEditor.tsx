import React, { useState } from 'react';
import { SmallGreenButton } from '../Button/Buttons';
import { Col2, Col5, Col6, Column, ResponsiveRow, Row } from '../Container/style';
import { StyledInput, StyledInputLabel } from '../Input/style';
import useMediaQuery from '../MediaQueries/MediaQuery';
import { GreenText } from '../Text/style';
import TeamList from './TeamList';

export const TeamEditor = () => {
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    const accutalTeam = [
        {
          pseudo: "Trobotyk'ss (ML)°",
          id: "47Li220"
        },
        {
          pseudo: "Sdoosh",
          id: "96Li220"
        },
        {
          pseudo: "Nem'O",
          id: "74Li220"
        }
    ];

    let [team, setTeam] = useState(accutalTeam);
    let [pseudo, setPseudo] = useState("");
    let [id, setId] = useState("");

    const registerNewTeamMember = (e) => {
        e.preventDefault();
        
        if(!(pseudo==="" || id==="")){
        setTeam(team.concat({
            pseudo: pseudo,
            id: id
        }));}

    }

    function SetterTeam(NewTeam){
        setTeam(NewTeam)
    }

    return[
        team,
        <>
            <form> 
                <ResponsiveRow style={{ marginBottom: "20px" }}>
                    <Col5 paddingRight="10px" mobileMarginBottom="20px">
                        <StyledInputLabel htmlFor="adminr_bucque" style={{ paddingLeft: "5px" }}>Bucque</StyledInputLabel>
                        <StyledInput id="admin_bucque" type="text" onChange={(elmt) => setPseudo(elmt.target.value)} />
                    </Col5>
                    <Col5 
                        paddingRight="10px" 
                        mobileMarginBottom="20px" 
                        paddingLeft="10px"    
                    >
                        <StyledInputLabel htmlFor="admin_num" style={{ paddingLeft: "5px" }}>Num's</StyledInputLabel>
                        <StyledInput id="admin_num" type="text" onChange={(elmt) => setId(elmt.target.value)} />
                    </Col5>

                    <Col2
                        paddingLeft="10px"
                        style={{
                            justifyContent: "end", alignItems: "center",
                            minWidth: "160px"
                        }}
                    >
                        <SmallGreenButton type="submit" onClick={registerNewTeamMember}>Ajouter</SmallGreenButton>
                    </Col2>
                </ResponsiveRow>
            </form>

            <GreenText>La Team actuelle</GreenText>
            <TeamList list={team} setter={SetterTeam} />
        </>
    ];
}

export default TeamEditor