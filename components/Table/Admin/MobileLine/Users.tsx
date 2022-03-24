import { StyledTable, StyledTd, StyledTr } from "../../style";
import React, { useState } from "react";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";

export const UsersMobileLine = ({ row, columnsNumber, isLast }: {
    columnsNumber: number,
    row: any,
    isLast: boolean
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <>

            <div
                style={{
                    height: scrolled ? (columnsNumber * 55 + 10).toString() + "px" : "56px",
                    transition: "0.3s linear",
                    overflowY: "hidden",
                    overflowX: scrolled ? "auto" : "hidden",
                    marginBottom: isLast? "0" : "30px",
                    borderRadius: "10px",
                    border:  "2px solid #096A09"
                }}
            >
                <StyledTable style={{ tableLayout: !scrolled && "fixed" }}>
                    <tbody>
                        {row.cells.map((cell, index) => {
                            if (cell.column['id'] == 'user_name') {
                                return (
                                    <StyledTr {...cell.getCellProps()} onClick={() => setScrolled(!scrolled)}>
                                        <StyledTd>
                                            <div style={{ width: "140px", display: "flex", justifyContent: "space-between" }}>
                                                <label style={{ width: "55px", display: "flex", justifyContent: "space-between" }}>
                                                    {row.cells[1].render('Cell')}
                                                    {row.cells[0].render('Cell')}
                                                </label>
                                                {cell.column.render('Header')}
                                            </div>
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>{cell.render('Cell')}</StyledTd>
                                    </StyledTr>
                                )
                            }

                            if (cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz') {
                                return (
                                    <StyledTr {...cell.getCellProps()}>
                                        <StyledTd>
                                            {cell.column.render('Header')}
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            {cell.value ? <Succes/> : <Fail/>}
                                        </StyledTd>
                                    </StyledTr>
                                )
                            }
                            else if (index != 0 && index != 1) {
                                return (
                                    <StyledTr {...cell.getCellProps()}>
                                        <StyledTd>
                                            {cell.column.render('Header')}
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                            {cell.render('Cell')}
                                        </StyledTd>
                                    </StyledTr>
                                )
                            }
                        })}
                    </tbody>
                </StyledTable>
            </div>
        </>
    );
}

export default UsersMobileLine