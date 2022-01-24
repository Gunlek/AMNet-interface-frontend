import { Column } from "../Container/style";
import { BlackText, GreenText } from "../Text/style";
import { GreenCard } from "./Cards";
import { StyledTeamPicture, StyledCardCampus } from "./style";

export default function TeamPicture(props: { promotion: string, names: string, nums: string}) {
    var separator = /\s*(;|$)\s*/;
    var names = props.names.split(separator);
    var nums = props.nums.split(separator);
    var size = Math.round(names.length / 2);
  
    const Flex = {
      flex: (12 / size).toString(),
      alignItems: "center",
      textAlign: "center"
    };
  
    let Team = [];
    var i = 0;
    
    for (var pas = 0; pas < size; pas++){
      Team.push(
        <Column key={pas} style={Flex}>
          <BlackText>
            {names[i]}
          </BlackText>
          <GreenText>
            {nums[i]}
          </GreenText>
        </Column>
      )
      i = i+2;
    }
  
    return (
      <StyledTeamPicture style={{ paddingTop:"15px", justifyContent:"space-between" }}>
        <GreenCard promotion={props.promotion}/>
        <StyledCardCampus style={{ alignItems:"center", flexDirection: "row" }}>
          {Team}
        </StyledCardCampus> 
      </StyledTeamPicture>
    );
  }