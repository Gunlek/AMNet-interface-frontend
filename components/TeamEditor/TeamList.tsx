import React from 'react';

export const TeamList = (props: {list: any[], setter: Function}) => {
    let listHTML = [];
    props.list.map((value, index) => {
        listHTML.push(
            <tr key={index}>
                <td>{value['pseudo']}</td>
                <td>{value.id}</td>
            </tr>
        );
    })
    
    return (
        <table><tbody>{listHTML}</tbody></table>
    );
};