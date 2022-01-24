import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton, OrangeButton, RedButton, SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../../components/Button/Buttons";
import {
  Row,
  DashboardContainer,
  Col4,
  ResponsiveRow,
  CheckboxRow
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { BlackText, BlackTitle, StyledLink } from "../../components/Text/style";
import {
  StyledTable,
  StyledGreenTr,
  StyledTr,
  StyledTd100,
  StyledTd200,
  StyledTd350,
  StyledTd50,
  StyledTd250
} from "../../components/Table/style";
import { StyledInput, StyledLabel } from "../../components/Input/style";
import Checkbox from "../../components/Input/Checkbox";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";


export default function Dashboard() {
  const minWidth1700 = useMediaQuery('(min-width:1700px)');
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  const [Checked, setChecked] = useState({
    "User": true,  
    "FirstName": true, 
    "LastName": true,
    "Mail": true,
    "Surname": false,
    "Family": false,
    "Campus": false,
    "Promotion": false,
    "Contribution": true,
    "Gadz": false,
    "Rank": false
  });

  const handleCheckboxChange = (elmt) =>{
    const NewChecked = {...Checked};
    NewChecked[elmt.currentTarget.id] = !NewChecked[elmt.currentTarget.id];
    setChecked(NewChecked)
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="users" />

        <DashboardContainer>
          <ResponsiveRow style={{ margin: minWidth1000 ? "1% 0" : "4% 0" }}>
            <div>
              <BlackTitle>Liste des adhérents</BlackTitle>
            </div>
            <ResponsiveRow style={{ flex: "1", alignItems: "center", justifyContent: "end", marginTop: minWidth1000 ? "0" : "4%", }}>
              <BlackText style={{ marginBottom: minWidth1000 ? "0" : "2%" }}>Rechercher</BlackText>
              <StyledInput style={{ marginLeft: "20px", width: "300px" }} type="text" />
            </ResponsiveRow>
          </ResponsiveRow>

          <form>  
            <CheckboxRow 
              justify="center" 
              width="300px" 
              style={{ 
                marginBottom: minWidth1000 ? "2%" : "4%", 
                alignItems: "center" 
              }}
            >
              <StyledLabel>
                <Checkbox  id="User" checked={Checked["User"]}  onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Utilisateur</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="FirstName" checked={Checked["FirstName"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Prénom</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="LastName" checked={Checked["LastName"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Nom</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Mail" checked={Checked["Mail"]}  onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Email</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Surname" checked={Checked["Surname"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Bucque</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Family" checked={Checked["Family"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Fam's</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Campus" checked={Checked["Campus"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Tagan's</BlackText>
                </StyledLabel>
              <StyledLabel>
                <Checkbox id="Promotion" checked={Checked["Promotion"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Prom's</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Contribution" checked={Checked["Contribution"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Cotisation</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Gadz" checked={Checked["Gadz"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Gadz</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px", marginRight: "30px" }}>Rang</BlackText>
              </StyledLabel>
            </CheckboxRow>
            
            

            <div
              style={{
                marginBottom: minWidth1000 ? "2%" : "4%",
                display: "grid",
                gridTemplateColumns: minWidth1700 ? "repeat(auto-fill,minmax(425px, 1fr))" : "repeat(auto-fill,minmax(300px, 1fr))",
                gridAutoRows: "minmax(70px, auto)",
                border: "none",
                justifyItems: "center",
                alignItems: "center",
                gap: "20px 0"
              }}
            >
              <GreenButton width="300px">Confirmer le paiement</GreenButton>
              <RedButton width="300px">Annuler le paiement</RedButton>
              <OrangeButton width="300px">Passer en Gadz</OrangeButton>
              <RedButton width="300px">Supprimer</RedButton>
            </div>

          </form>
          <StyledCard style={{ flex: "1", marginBottom: "2%" }}>
            <div
              style={{
                height: "100%",
                maxHeight: "60vh",
                width: "100%",
                overflowX: "auto",
                overflowY: "auto"
              }}
            >
              <StyledTable>
                <tbody>
                  <StyledGreenTr style={{ padding: "10px 0 10px 30px" }}>
                  <StyledTd50><StyledLabel><Checkbox color="white" id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange}/></StyledLabel></StyledTd50>

                    <StyledTd50>#</StyledTd50>
                    <StyledTd250>Utilisateur</StyledTd250>
                    <StyledTd200>Prénom</StyledTd200>
                    <StyledTd200>Nom</StyledTd200>
                    <StyledTd350>Email</StyledTd350>
                    <StyledTd200>Bucque</StyledTd200>
                    <StyledTd100>Fam's</StyledTd100>
                    <StyledTd100>Tabagn's</StyledTd100>
                    <StyledTd100>Prom's</StyledTd100>
                    <StyledTd100 style={{ marginRight: "20px" }}>Cotisation</StyledTd100>
                    <StyledTd50 style={{ marginRight: "20px" }}>Gadz</StyledTd50>
                    <StyledTd100>Rang</StyledTd100>
                  </StyledGreenTr>

                  <StyledTr style={{ padding: "10px 0 10px 30px" }}>
                  <StyledTd50><StyledLabel><Checkbox id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange}/></StyledLabel></StyledTd50>
                    <StyledTd50>1</StyledTd50>
                    <StyledTd250><StyledLink hovercolor="#67bc45">Gauthier</StyledLink></StyledTd250>
                    <StyledTd200>Gauthier</StyledTd200>
                    <StyledTd200>Pailhas</StyledTd200>
                    <StyledTd350>gauthier.pailhas@gmail.com</StyledTd350>
                    <StyledTd200>Mac Naht's</StyledTd200>
                    <StyledTd100>47-102</StyledTd100>
                    <StyledTd100>Li</StyledTd100>
                    <StyledTd100>219</StyledTd100>
                    <StyledTd100 style={{ justifyContent: "center", marginRight: "20px" }}><img style={{ height: "20px" }} src="/static/icons/succes.svg" /> </StyledTd100>
                    <StyledTd50 style={{ justifyContent: "center", marginRight: "20px" }}><img style={{ height: "20px" }} src="/static/icons/succes.svg" /> </StyledTd50>
                    <StyledTd100>Admin</StyledTd100>
                  </StyledTr>

                </tbody>
              </StyledTable>
            </div>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
