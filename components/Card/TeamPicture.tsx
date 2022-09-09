import { Column } from "../Container/style";
import { BlackText, GreenText } from "../Text/style";
import { GreenCard } from "./Cards";
import { StyledTeamPicture, StyledCardCampus } from "./style";
import Image from 'next/image';

export default function TeamPicture(props: { Team: { pseudo: string, id: string }[], background?: string, outline?: string, promotion: string }) {
  const promotion = props.promotion;

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
      outline={props.outline}
      style={{
        paddingTop: "15px",
        justifyContent: "space-between"
      }}
    >
      <Image 
        src={props.background || `${process.env.NEXT_PUBLIC_API_HOST}/team.jpeg`} 
        alt="Team AMNet Résidence Arts et Métiers Lille"
        objectFit="cover" 
        layout="fill"/>
      <GreenCard promotion={promotion} />
      <StyledCardCampus style={{ alignItems: "center", flexDirection: "row", position: "relative", zIndex: "2" }}>
        {Team}
      </StyledCardCampus>
    </StyledTeamPicture>
  );
}