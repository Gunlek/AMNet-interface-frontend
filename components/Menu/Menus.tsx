import { Column, Row } from "../Container/style";
import { SVGFaq } from "../SVG/faq";
import { SVGFiles } from "../SVG/files";
import { SVGGadzflix } from "../SVG/gadzflix";
import { SVGHome } from "../SVG/home";
import { SVGLogOut } from "../SVG/log_out";
import { SVGMaterial } from "../SVG/material";
import { SVGIoT } from "../SVG/network";
import { SVGProfil } from "../SVG/profil";
import { SVGSettings } from "../SVG/settings";
import { SVGUsers } from "../SVG/users";
import { MenuContener, StyledDivLogo, StyledDivLogOut, StyledImg, StyledMenu } from "./style";

export function Menu(props: {page?: string}){
    const positionning = {
      flex: "1", 
      margin: "5px 0", 
      justifyContent:"center", 
      alignItems: "center"
    };
    return(
      <MenuContener>
        <StyledMenu >
          <StyledDivLogo>
            <a href="../" style={{display: "flex", justifyContent:"center"}}>
              <StyledImg src="/static/logo/small_logo.svg" />
            </a>
          </StyledDivLogo>
            
          <Row style={positionning}>
            <SVGHome page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGProfil page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGFaq page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGIoT page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGMaterial page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGGadzflix/>
          </Row>
          
          <Row style={positionning}>
              <SVGSettings page={props.page}/>        
          </Row>

          <StyledDivLogOut>
            <SVGLogOut />
          </StyledDivLogOut>
        </StyledMenu>
      </MenuContener>
    )
  }
  
  export function AdminMenu(props: {page?: string}){
    const positionning = {
      flex: "1", 
      margin: "5px 0", 
      justifyContent:"center", 
      alignItems: "center"
    };
    
    return(
      <MenuContener>
        <StyledMenu>
          <StyledDivLogo>
              <a href="../" style={{display: "flex", justifyContent:"center"}}>
                <StyledImg src="/static/logo/small_logo.svg" />
              </a>
          </StyledDivLogo>
            
          <Row style={positionning}>
              <SVGSettings page={props.page}/>        
          </Row>
          
          <Row style={positionning}>
              <SVGUsers page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGIoT page={props.page}/>
          </Row>
          
          <Row style={positionning}>
              <SVGMaterial page={props.page}/>
          </Row>

          <Row style={positionning}>
              <SVGFiles page={props.page}/>
          </Row>

          <Row style={positionning}>
            <SVGHome page={props.page}/>
          </Row>
          
          <StyledDivLogOut style={{flex:"3", marginTop:"10px"}}>
            <SVGLogOut />
          </StyledDivLogOut>
        </StyledMenu>
      </MenuContener>
    )
  }