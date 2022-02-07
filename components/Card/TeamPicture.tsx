import { Column } from "../Container/style";
import { BlackText, GreenText } from "../Text/style";
import { GreenCard } from "./Cards";
import { StyledTeamPicture, StyledCardCampus } from "./style";

export default function TeamPicture() {
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
    }];

  const promotion="220"

  const Flex = {
    flex: (12 / accutalTeam.length).toString(),
    textAlign: "center"
  };

  let Team = [];
  
  accutalTeam.map((value, index) => {
    Team.push(
      <Column key={index} style={Flex}>
        <BlackText>
          {value['pseudo']}
        </BlackText>
        <GreenText>
          {value.id}
        </GreenText>
      </Column>
    )
  });

  return (
    <StyledTeamPicture style={{ paddingTop:"15px", justifyContent:"space-between" }}>
      <GreenCard promotion={promotion}/>
      <StyledCardCampus style={{ alignItems:"center", flexDirection: "row" }}>
        {Team}
      </StyledCardCampus> 
    </StyledTeamPicture>
  );
}