import React from 'react'
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
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        props.setfile(props.id, fileUploaded);

    };

    return (
        <>
            <SmallGreenButton width="175px" onClick={handleClick}>
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
