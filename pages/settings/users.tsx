import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { GreenButton, OrangeButton, RedButton } from "../../components/Button/Buttons";
import { DashboardContainer, ResponsiveRow } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { UsersTable } from "../../components/Table/Users";

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
  const [Filter, Checkboxs, Table] = UsersTable(data)

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
              {Filter}
            </ResponsiveRow>
          </ResponsiveRow>

          {Checkboxs}

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

          <StyledCard style={{ flex: "1", marginBottom: "2%" }}>
            <div
              style={{
                height: "100%",
                maxHeight: "60vh",
                width: "100%",
                overflow: "auto",
                position: "sticky"
              }}
            >
            {Table}
            </div>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
