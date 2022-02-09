import { Column } from "../Container/style";
import { BlackText, GreenText } from "../Text/style";
import { GreenCard } from "./Cards";
import { StyledTeamPicture, StyledCardCampus } from "./style";

export default function TeamPicture(props: {Team: any, background?: string}) {
  const promotion="220"

  const Flex = {
    flex: (12 / props.Team.length).toString(),
    textAlign: "center"
  };

  let Team = [];
  
  props.Team.map((value, index) => {
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
    <StyledTeamPicture 
      background={props.background} 
      style={{ 
        paddingTop:"15px", 
        justifyContent:"space-between" 
      }}
    >
      <GreenCard promotion={promotion}/>
      <StyledCardCampus style={{ alignItems:"center", flexDirection: "row" }}>
        {Team}
      </StyledCardCampus> 
    </StyledTeamPicture>
  );
}