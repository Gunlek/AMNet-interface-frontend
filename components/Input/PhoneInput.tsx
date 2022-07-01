import React, { useState } from "react";
import Input from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import fr from 'react-phone-input-2/lang/fr.json'
import PhoneStyle from "../../styles/phone";
import startsWith from 'lodash.startswith';
import { isPossiblePhoneNumber } from 'react-phone-number-input'

export default function PhoneInput(props: { value: string, onChange: any }) {
    const [focus, setFocus] = useState(false)

    const onChange = (value: string, country: { dialCode: any; }) => {
        props.onChange(value, isPossiblePhoneNumber("+" + value) && startsWith(value, country.dialCode))
    }

    return (
        <>
            <PhoneStyle />
            <Input
                country='fr'
                onlyCountries={['fr', 'mc', 'be', 'de', 'es', 'ie', 'gb', 'pt', 'it', 'lu']}
                value={props.value}
                localization={fr}
                containerStyle={{ width: "100%", background: "transparent" }}
                inputClass="phoneInput"
                buttonStyle={{ background: "transparent", border: "none", marginLeft: "20px" }}
                placeholder=""
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                onChange={onChange}
                inputProps={{ required: true, id: "user_phone" }}
            />
        </>
    )
}

