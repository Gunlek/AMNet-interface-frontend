import React, { useRef } from 'react'
import { SmallGreenButton } from '../Button/Buttons'
import styled from 'styled-components'

const HiddenFile = styled.input.attrs({ type: 'file' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const FileUploader = (props: {accept?: string, id?: string, setfile?: Function }) => {
    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        props.setfile(fileUploaded, props.id);
    };

    return (
        <>
            <SmallGreenButton width="175px" onClick={handleClick} fontSize="1rem">
                Choisir un fichier
            </SmallGreenButton>
            <HiddenFile
                accept={props.accept}
                id={props.id}
                ref={hiddenFileInput}
                onChange={handleChange}
            />
        </>
    );
};

export default FileUploader;
