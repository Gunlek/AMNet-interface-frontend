import { useState } from "react";
import { StyledInput } from "../../../Input/style";
import { BlackText } from "../../../Text/style";
import { useAsyncDebounce } from 'react-table'

export default function GlobalFilter({ globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <>
            <BlackText mobileMarginBottom="10px" as="label" htmlFor="research">Rechercher</BlackText>
            <StyledInput id="research" value={value || ""}
                spellcheck="false"
                onChange={e => { setValue(e.target.value); onChange(e.target.value); }}
                width="300px" mobileWidth="100%" marginLeft="20px"
                type="text"
            />
        </>
    )
}