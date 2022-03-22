import React from "react";
import Head from "next/head";
import { GreenButton, OrangeButton, RedButton } from "../../components/Button/Buttons";
import { DashboardContainer, ResponsiveRow, Row } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { UsersTable } from "../../components/Table/Users";
import { Footer } from "../../components/Card/Cards";

const data = [
  {
    
'user_name': "hardwins",   
    
'user_firstname': "fabien",   
    
'user_lastname': "aubret",   
    
'user_email': "fabien.aubret@gmail.com",   
    
'user_phone': "0606060606",   
    
'user_bucque': "hardwins",   
    
'user_fams': "58",   
    
'user_campus': "Li",   
    
'user_pomotion': "218",   
    
'user_rank': "admin",   
    
'user_is_gadz': 0,   
    
'user_pay_status': 0  

  },
  {
    
    'user_name': "hardwins",   
        
    'user_firstname': "fabien",   
        
    'user_lastname': "aubret",   
        
    'user_email': "fabien.aubret@gmail.com",   
        
    'user_phone': "0606060606",   
        
    'user_bucque': "hardwins",   
        
    'user_fams': "58",   
        
    'user_campus': "Li",   
        
    'user_pomotion': "218",   
        
    'user_rank': "admin",   
        
    'user_is_gadz': 1,   
        
    'user_pay_status': 1  
    
      },
      {
    
        'user_name': "hardwins",   
            
        'user_firstname': "fabien",   
            
        'user_lastname': "aubret",   
            
        'user_email': "fabien.aubret@gmail.com",   
            
        'user_phone': "0606060606",   
            
        'user_bucque': "hardwins",   
            
        'user_fams': "58",   
            
        'user_campus': "Li",   
            
        'user_pomotion': "218",   
            
        'user_rank': "admin",   
            
        'user_is_gadz': 0,   
            
        'user_pay_status': 0  
        
          },
          {
    
            'user_name': "hardwins",   
                
            'user_firstname': "fabien",   
                
            'user_lastname': "aubret",   
                
            'user_email': "fabien.aubret@gmail.com",   
                
            'user_phone': "0606060606",   
                
            'user_bucque': "hardwins",   
                
            'user_fams': "58",   
                
            'user_campus': "Li",   
                
            'user_pomotion': "218",   
                
            'user_rank': "admin",   
                
            'user_is_gadz': 1,   
                
            'user_pay_status': 1  
            
              },
              {
    
                'user_name': "hardwins",   
                    
                'user_firstname': "fabien",   
                    
                'user_lastname': "aubret",   
                    
                'user_email': "fabien.aubret@gmail.com",   
                    
                'user_phone': "0606060606",   
                    
                'user_bucque': "hardwins",   
                    
                'user_fams': "58",   
                    
                'user_campus': "Li",   
                    
                'user_pomotion': "218",   
                    
                'user_rank': "admin",   
                    
                'user_is_gadz': 0,   
                    
                'user_pay_status': 0  
                
                  },
                  {
    
                    'user_name': "argilla",   
                        
                    'user_firstname': "gauthier",   
                        
                    'user_lastname': "pailhas",   
                        
                    'user_email': "gauthier.pailhas@gmail.com",   
                        
                    'user_phone': "07070707",   
                        
                    'user_bucque': "mac nhats",   
                        
                    'user_fams': "47-102",   
                        
                    'user_campus': "Li",   
                        
                    'user_pomotion': "219",   
                        
                    'user_rank': "user",   
                        
                    'user_is_gadz': 0,   
                        
                    'user_pay_status': 0  
                    
                      },
                      {
    
                        'user_name': "hardwins",   
                            
                        'user_firstname': "fabien",   
                            
                        'user_lastname': "aubret",   
                            
                        'user_email': "fabien.aubret@gmail.com",   
                            
                        'user_phone': "0606060606",   
                            
                        'user_bucque': "hardwins",   
                            
                        'user_fams': "58",   
                            
                        'user_campus': "Li",   
                            
                        'user_pomotion': "218",   
                            
                        'user_rank': "admin",   
                            
                        'user_is_gadz': 0,   
                            
                        'user_pay_status': 0  
                        
                          },
                          {
    
                            'user_name': "hardwins",   
                                
                            'user_firstname': "fabien",   
                                
                            'user_lastname': "aubret",   
                                
                            'user_email': "fabien.aubret@gmail.com",   
                                
                            'user_phone': "0606060606",   
                                
                            'user_bucque': "hardwins",   
                                
                            'user_fams': "58",   
                                
                            'user_campus': "Li",   
                                
                            'user_pomotion': "218",   
                                
                            'user_rank': "admin",   
                                
                            'user_is_gadz': 0,   
                                
                            'user_pay_status': 0  
                            
                              },
                              {
    
                                'user_name': "hardwins",   
                                    
                                'user_firstname': "fabien",   
                                    
                                'user_lastname': "aubret",   
                                    
                                'user_email': "fabien.aubret@gmail.com",   
                                    
                                'user_phone': "0606060606",   
                                    
                                'user_bucque': "hardwins",   
                                    
                                'user_fams': "58",   
                                    
                                'user_campus': "Li",   
                                    
                                'user_pomotion': "218",   
                                    
                                'user_rank': "admin",   
                                    
                                'user_is_gadz': 0,   
                                    
                                'user_pay_status': 0  
                                
                                  },
                                  {
    
                                    'user_name': "hardwins",   
                                        
                                    'user_firstname': "fabien",   
                                        
                                    'user_lastname': "aubret",   
                                        
                                    'user_email': "fabien.aubret@gmail.com",   
                                        
                                    'user_phone': "0606060606",   
                                        
                                    'user_bucque': "hardwins",   
                                        
                                    'user_fams': "58",   
                                        
                                    'user_campus': "Li",   
                                        
                                    'user_pomotion': "218",   
                                        
                                    'user_rank': "admin",   
                                        
                                    'user_is_gadz': 0,   
                                        
                                    'user_pay_status': 0  
                                    
                                      },
                                      {
    
                                        'user_name': "hardwins",   
                                            
                                        'user_firstname': "fabien",   
                                            
                                        'user_lastname': "aubret",   
                                            
                                        'user_email': "fabien.aubret@gmail.com",   
                                            
                                        'user_phone': "0606060606",   
                                            
                                        'user_bucque': "hardwins",   
                                            
                                        'user_fams': "58",   
                                            
                                        'user_campus': "Li",   
                                            
                                        'user_pomotion': "218",   
                                            
                                        'user_rank': "admin",   
                                            
                                        'user_is_gadz': 0,   
                                            
                                        'user_pay_status': 0  
                                        
                                          },
                                          {
    
                                            'user_name': "hardwins",   
                                                
                                            'user_firstname': "fabien",   
                                                
                                            'user_lastname': "aubret",   
                                                
                                            'user_email': "fabien.aubret@gmail.com",   
                                                
                                            'user_phone': "0606060606",   
                                                
                                            'user_bucque': "hardwins",   
                                                
                                            'user_fams': "58",   
                                                
                                            'user_campus': "Li",   
                                                
                                            'user_pomotion': "218",   
                                                
                                            'user_rank': "admin",   
                                                
                                            'user_is_gadz': 0,   
                                                
                                            'user_pay_status': 0  
                                            
                                              },
                                              {
    
                                                'user_name': "hardwins",   
                                                    
                                                'user_firstname': "fabien",   
                                                    
                                                'user_lastname': "aubret",   
                                                    
                                                'user_email': "fabien.aubret@gmail.com",   
                                                    
                                                'user_phone': "0606060606",   
                                                    
                                                'user_bucque': "hardwins",   
                                                    
                                                'user_fams': "58",   
                                                    
                                                'user_campus': "Li",   
                                                    
                                                'user_pomotion': "218",   
                                                    
                                                'user_rank': "admin",   
                                                    
                                                'user_is_gadz': 0,   
                                                    
                                                'user_pay_status': 0  
                                                
                                                  },
                                                  {
    
                                                    'user_name': "hardwins",   
                                                        
                                                    'user_firstname': "fabien",   
                                                        
                                                    'user_lastname': "aubret",   
                                                        
                                                    'user_email': "fabien.aubret@gmail.com",   
                                                        
                                                    'user_phone': "0606060606",   
                                                        
                                                    'user_bucque': "hardwins",   
                                                        
                                                    'user_fams': "58",   
                                                        
                                                    'user_campus': "Li",   
                                                        
                                                    'user_pomotion': "218",   
                                                        
                                                    'user_rank': "admin",   
                                                        
                                                    'user_is_gadz': 0,   
                                                        
                                                    'user_pay_status': 0  
                                                    
                                                      },
  
]

export default function Users() {
  const minWidth1700 = useMediaQuery('(min-width:1700px)');
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Filter, Checkboxs, SelectedRows, Table] = UsersTable(data)
  
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
        <AdminMenu page="users" />

        <DashboardContainer>
          <ResponsiveRow margin="1% 0" mobileMargin="20px 0 30px">
            <Row mobileJustify="center" mobileMarginBottom="10px">
              <BlackTitle>Liste des adhérents</BlackTitle>
            </Row>
            <ResponsiveRow style={{ flex: "1", alignItems: "center", justifyContent: "end"}}>
              {Filter}
            </ResponsiveRow>
          </ResponsiveRow>

          {Checkboxs}

          <Row
            marginBottom="2%" 
            mobileMarginBottom="30px"
            style={{
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
          </Row>
 
          <StyledCard 
            marginBottom="2%" 
            mobileMarginBottom="10px"
            style={{ 
              flex: "1 0 0",
              minHeight: minWidth1000? "0" : "500px" 
            }}
          >
            <div
              style={{
                height:"100%",
                overflow: "auto",
                position: "sticky"
              }}
            >
            {Table}
            </div>
          </StyledCard>

          <Footer marginTop="0"/>
        </DashboardContainer>
    </>
  );
}
