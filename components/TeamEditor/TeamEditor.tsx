import React, { useState } from 'react';
import { SmallGreenButton } from '../Button/Buttons';
import { Col2, Col5, Col6, Column, ResponsiveRow, Row } from '../Container/style';
import { StyledInput } from '../Input/style';
import useMediaQuery from '../MediaQueries/MediaQuery';
import { GreenText } from '../Text/style';
import TeamList from './TeamList';

export const TeamEditor = () => {
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    const accutalTeam = [
        {
          'pseudo': "Trobotyk'ss (ML)°",
          id: "47Li220"
        },
        {
          'pseudo': "Sdoosh",
          id: "96Li220"
        },
        {
          'pseudo': "Nem'O",
          id: "74Li220"
        }
    ];

    let [team, setTeam] = useState(accutalTeam);
    let [pseudo, setPseudo] = useState("");
    let [id, setId] = useState("");

    const registerNewTeamMember = (e) => {
        e.preventDefault();

        setTeam(team.concat({
            pseudo: pseudo,
            id: id
        }));

    }

    function SetterTeam(NewTeam){
        setTeam(NewTeam)
    }

    return[
        team,
        <>
            <ResponsiveRow style={{ marginBottom: "20px" }}>
                <Col5
                    style={{
                        paddingRight: minWidth1000 ? "10px" : "0",
                        marginBottom: minWidth1000 ? "0" : "20px",
                        maxWidth: minWidth1000 ? "41.66%" : "100%"
                    }}
                >
                    <GreenText style={{ marginBottom: "5px", paddingLeft: "5px" }}>Bucque</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setPseudo(elmt.target.value)} />
                </Col5>
                <Col5
                    style={{
                        paddingLeft: minWidth1000 ? "10px" : "0",
                        paddingRight: minWidth1000 ? "10px" : "0",
                        marginBottom: minWidth1000 ? "0" : "20px",
                        maxWidth: minWidth1000 ? "41.66%" : "100%"
                    }}
                >
                    <GreenText style={{ marginBottom: "5px", paddingLeft: "5px" }}>Num's</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setId(elmt.target.value)} />
                </Col5>

                <Col2
                    style={{
                        paddingLeft: minWidth1000 ? "10px" : "0",
                        justifyContent: "end", alignItems: "center",
                        minWidth: "160px"
                    }}
                >
                    <SmallGreenButton onClick={registerNewTeamMember}>Ajouter</SmallGreenButton>
                </Col2>
            </ResponsiveRow>

            <GreenText>La Team actuelle</GreenText>
            <TeamList list={team} setter={SetterTeam} />
        </>
    ];
}

export default TeamEditor