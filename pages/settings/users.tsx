import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton, OrangeButton, RedButton } from "../../components/Button/Buttons";
import {
  DashboardContainer,
  ResponsiveRow,
  CheckboxRow
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackText, BlackTitle, StyledLink } from "../../components/Text/style";
import {
  StyledTable,
  StyledGreenTr,
  StyledTr,
  StyledTd,
  StyledTh
} from "../../components/Table/style";
import { StyledInput, StyledLabel } from "../../components/Input/style";
import Checkbox from "../../components/Input/Checkbox";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";


export default function Users() {
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
              <StyledInput style={{ marginLeft: minWidth1000 ? "20px" : "0", width: minWidth1000? "300px" : "100%" }} type="text" />
            </ResponsiveRow>
          </ResponsiveRow>

          <form>  
            <CheckboxRow 
              justify="center" 
              width="175px" 
              style={{ 
                marginBottom: minWidth1000 ? "2%" : "4%", 
                alignItems: "center" 
              }}
            >
              <StyledLabel>
                <Checkbox  id="User" checked={Checked["User"]}  onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Utilisateur</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="FirstName" checked={Checked["FirstName"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Prénom</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="LastName" checked={Checked["LastName"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Nom</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Mail" checked={Checked["Mail"]}  onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Email</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Surname" checked={Checked["Surname"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Bucque</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Family" checked={Checked["Family"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Fam's</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Campus" checked={Checked["Campus"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Tagan's</BlackText>
                </StyledLabel>
              <StyledLabel>
                <Checkbox id="Promotion" checked={Checked["Promotion"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Prom's</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Contribution" checked={Checked["Contribution"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Cotisation</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Gadz" checked={Checked["Gadz"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Gadz</BlackText>
              </StyledLabel>
              <StyledLabel>
                <Checkbox id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange} />
                <BlackText style={{ marginLeft: "10px" }}>Rang</BlackText>
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
                <thead>
                <StyledGreenTr>
                    <StyledTh>
                      <StyledLabel width="25px">
                        <Checkbox color="white" id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange}/>
                      </StyledLabel>
                    </StyledTh>
                    <StyledTh>#</StyledTh>
                    <StyledTh>Utilisateur</StyledTh>
                    <StyledTh>Prénom</StyledTh>
                    <StyledTh>Nom</StyledTh>
                    <StyledTh>Email</StyledTh>
                    <StyledTh>Bucque</StyledTh>
                    <StyledTh>Fam's</StyledTh>
                    <StyledTh>Tabagn's</StyledTh>
                    <StyledTh>Prom's</StyledTh>
                    <StyledTh>Cotisation</StyledTh>
                    <StyledTh>Gadz</StyledTh>
                    <StyledTh>Rang</StyledTh>
                  </StyledGreenTr>
                </thead>
                <tbody>
                <StyledTr style={{ padding: "10px 0 10px 30px" }}>
                    <StyledTd>
                      <StyledLabel width="25px">
                        <Checkbox id="Rank" checked={Checked["Rank"]} onChange={handleCheckboxChange}/>
                      </StyledLabel>
                    </StyledTd>
                    <StyledTd>1</StyledTd>
                    <StyledTd>Gauthier</StyledTd>
                    <StyledTd>Gauthier</StyledTd>
                    <StyledTd>Pailhas</StyledTd>
                    <StyledTd>gauthier.pailhas@gmail.com</StyledTd>
                    <StyledTd>Mac Nhat'ss</StyledTd>
                    <StyledTd>47-102</StyledTd>
                    <StyledTd>Li</StyledTd>
                    <StyledTd>219</StyledTd>
                    <StyledTd>
                      <img style={{ height: "20px", marginLeft: "35px" }} src="/static/icons/succes.svg"/>
                    </StyledTd>
                    <StyledTd>
                      <img style={{ height: "20px", marginLeft: "15px" }} src="/static/icons/succes.svg"/>
                    </StyledTd>
                    <StyledTd>Admin</StyledTd>
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
