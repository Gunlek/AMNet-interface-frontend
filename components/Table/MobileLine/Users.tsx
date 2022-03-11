import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../style";
import React, { useState } from "react";

export const UsersMobileLine = ({ row, columnsNumber }: {
    columnsNumber: number,
    row: any
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <>

            <div
                style={{
                    height: scrolled ? (columnsNumber * 55 + 10).toString() + "px" : "55px",
                    transition: "0.3s linear",
                    overflowY: "hidden",
                    overflowX: scrolled ? "auto" : "hidden",
                    marginBottom: scrolled ? "10px" : "0"
                }}
            >
                <StyledTable style={{ tableLayout: !scrolled && "fixed" }}>
                    <tbody>
                        {row.cells.map((cell, index) => {
                            if (cell.column['id'] == 'user_name') {
                                return (
                                    <StyledHeadTr  {...cell.getCellProps()} onClick={() => setScrolled(!scrolled)}>
                                        <StyledTh>
                                            <div style={{ width: "140px", display: "flex", justifyContent: "space-between" }}>
                                                <label style={{width: "55px", display: "flex", justifyContent: "space-between"}}>
                                                    {row.cells[1].render('Cell')}
                                                    {row.cells[0].render('Cell')}
                                                </label>
                                                {cell.column.render('Header')}
                                            </div>
                                        </StyledTh>
                                        <StyledTh style={{ textAlign: "center" }}>{cell.render('Cell')}</StyledTh>
                                    </StyledHeadTr>
                                )
                            }

                            if (cell.column['id'] == 'user_pay_status') {
                                return (
                                    <StyledTr {...cell.getCellProps()}>
                                        <StyledTd>
                                            {cell.column.render('Header')}
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            <img style={{ height: "20px" }} src={cell.value ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                                        </StyledTd>
                                    </StyledTr>
                                )
                            }
                            else if (cell.column['id'] == 'user_is_gadz') {
                                return (
                                    <StyledTr>
                                        <StyledTd {...cell.getCellProps()}>
                                            {cell.column.render('Header')}
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            <img style={{ height: "20px" }} src={cell.value ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
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


            <div
                style={{
                    height: scrolled ? "0" : "30px",
                    transition: "0.3s linear",
                    overflow: "hidden"
                }}
            />

        </>
    );
}

export default UsersMobileLine