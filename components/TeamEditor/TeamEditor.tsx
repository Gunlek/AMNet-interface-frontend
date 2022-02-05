import React, { useState } from 'react';
import { SmallGreenButton } from '../Button/Buttons';
import { Col2, Col5, Column, ResponsiveRow, Row } from '../Container/style';
import { StyledInput } from '../Input/style';
import useMediaQuery from '../MediaQueries/MediaQuery';
import { BlackText, GreenText } from '../Text/style';
import TeamList from './TeamList';

export const TeamEditor = () => {
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
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

    const deleteTeamMember = (e, index) => {
        e.preventDefault();
        let Newteam = team.slice(0);
        Newteam.splice(index, 1);
        setTeam(Newteam);
    }

    return (
        <>
            <Row style={{marginBottom:"20px"}}>
                <BlackText>
                Pour faire correspondre les bucques avec les PGs sur la photo de la page d'accueil, il faut les mettre dans l'ordre suivant : de haut en bas les bucques et de gauche à droite sur la photo
                </BlackText>
            </Row>
            <ResponsiveRow>
                <Col5 
                    style={{ 
                        paddingRight: minWidth1000? "10px" : "0", 
                        marginBottom: minWidth1000? "0" : "20px", 
                        maxWidth: minWidth1000 ? "41.66%" :"100%" 
                    }}
                >
                    <GreenText style={{ marginBottom:"5px", paddingLeft:"5px" }}>Bucque</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setPseudo(elmt.target.value)}/>
                </Col5>
                <Col5 
                    style={{ 
                        paddingLeft:minWidth1000? "10px" : "0", 
                        paddingRight:minWidth1000? "10px" : "0", 
                        marginBottom: minWidth1000? "0" : "20px", 
                        maxWidth: minWidth1000 ? "41.66%" :"100%" 
                    }}
                >
                    <GreenText style={{ marginBottom:"5px", paddingLeft:"5px" }}>Num's</GreenText>
                    <StyledInput type="text" onChange={(elmt) => setId(elmt.target.value)}/>
                </Col5>

                <Col2 
                    style={{ 
                        fontSize: "1.2em", 
                        paddingLeft:minWidth1000? "10px" : "0", 
                        justifyContent: "end", alignItems:"center", 
                        minWidth:"160px"
                    }}
                >
                    <SmallGreenButton onClick={registerNewTeamMember}>Ajouter</SmallGreenButton>
                </Col2>
            </ResponsiveRow>
            <TeamList list={team} setter={deleteTeamMember} />
        </>
    );
}

export default TeamEditor