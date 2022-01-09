import React, { useState } from 'react';
import { SmallGreenButton } from '../Button/Buttons';
import { Col2, Col5, Row } from '../Container/style';
import { StyledInput } from '../Input/style';
import { GreenText } from '../Text/style';
import { TeamList } from './TeamList';

export const TeamEditor = () => {
    let [team, setTeam] = useState([]);

    let [pseudo, setPseudo] = useState("");
    let [id, setId] = useState("");

    const registerNewTeamMember = (e) => {
        e.preventDefault();

        setTeam(team.concat({
            pseudo: pseudo,
            id: id
        }));
    }

    return (
        <>
            <Row>
                <Col5 style={{ paddingRight:"10px" }}>
                    <GreenText style={{ marginBottom:"5px" }}>Bucque</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setPseudo(elmt.target.value)}/>
                </Col5>
                <Col5 style={{ paddingLeft:"10px", paddingRight:"10px"  }}>
                    <GreenText style={{ marginBottom:"5px" }}>Num's</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setId(elmt.target.value)}/>
                </Col5>

                <Col2 style={{ fontSize: "1.2em", paddingLeft:"10px", justifyContent: "end", alignItems:"center", minWidth:"160px"}}>
                    <SmallGreenButton onClick={registerNewTeamMember}>Ajouter</SmallGreenButton>
                </Col2>
            </Row>

            <TeamList list={team} setter={setTeam} />
        </>
    );
}