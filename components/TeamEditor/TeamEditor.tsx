import React, { useState } from 'react';
import { SmallGreenButton } from '../Button/Buttons';
import { Col2, Col5, ResponsiveRow } from '../Container/style';
import { StyledInput, StyledInputLabel } from '../Input/style';
import { GreenText } from '../Text/style';
import TeamList from './TeamList';

export default function TeamEditor(accutalTeam: { pseudo: string, id: string }[]) {
    let [team, setTeam] = useState(accutalTeam);
    let [pseudo, setPseudo] = useState("");
    let [id, setId] = useState("");

    const registerNewTeamMember = (e) => {
        e.preventDefault();

        if (!(pseudo === "" || id === "")) {
            setTeam(team.concat({
                pseudo: pseudo,
                id: id
            }));
        }

    }

    function SetterTeam(NewTeam) {
        setTeam(NewTeam)
    }

    const teamEditor = () => {
        return (
            <>
                <form onSubmit={registerNewTeamMember}>
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
                            paddingRight="10px"
                            style={{
                                justifyContent: "end", alignItems: "center",
                                minWidth: "170px",
                            }}
                        >
                            <SmallGreenButton type="submit">Ajouter</SmallGreenButton>
                        </Col2>
                    </ResponsiveRow>
                </form>

                <GreenText>La Team actuelle</GreenText>
                <TeamList list={team} setter={SetterTeam} />
            </>
        )
    }

    return {
        team,
        teamEditor
    };
}
