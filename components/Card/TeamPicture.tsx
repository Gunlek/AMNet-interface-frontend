import { Column } from "../Container/style";
import { BlackText, GreenText } from "../Text/style";
import { GreenCard } from "./Cards";
import { StyledTeamPicture, StyledCardCampus } from "./style";

export default function TeamPicture(props: { promotion: string, names: string, nums: string}) {
    const names = props.names.split(";");
    const nums = props.nums.split(";");
  
    const Flex = {
      flex: (12 / names.length).toString(),
      alignItems: "center",
      textAlign: "center"
    };
  
    let Team = [];
    
    names.map((value, index) => {
      Team.push(
        <Column key={index} style={Flex}>
          <BlackText>
            {value}
          </BlackText>
          <GreenText>
            {nums[index]}
          </GreenText>
        </Column>
      )
    })
  
    return (
      <StyledTeamPicture style={{ paddingTop:"15px", justifyContent:"space-between" }}>
        <GreenCard promotion={props.promotion}/>
        <StyledCardCampus style={{ alignItems:"center", flexDirection: "row" }}>
          {Team}
        </StyledCardCampus> 
      </StyledTeamPicture>
    );
  }