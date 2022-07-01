import { createGlobalStyle } from "styled-components";

const PhoneStyle = createGlobalStyle`
    .phoneInput{
        background: rgba(255, 255, 255, 0.6) !important;
        border: 2px solid transparent !important;
        transition: border 0.3s, background-color 0.3s;
        border-radius: 15px !important;
        padding-left: 80px !important;
        height: 40px !important;
        box-shadow: 0px 4px 14px rgba(0,0,0,0.06);
        font-size: 1.2rem !important;
        width: 100% !important;
    }

    .phoneInput:hover, .phoneInput:focus {
        background: rgba(255, 255, 255, 0.8) !important;
        border: 2px solid #096A09 !important;
    }

    .react-tel-input .flag{
        width: 24px !important;
        
    }

    .react-tel-input .country-list .flag{
        width: 24px !important;
        top: 6.5px !important;
    }

    .react-tel-input .selected-flag{
        background: transparent !important;
    }

    @media screen and (max-width: 1000px) {
        .phoneInput{
            font-size: 16px !important;
        }
    }
`

export default PhoneStyle