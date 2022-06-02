import { StyledTable, StyledTd, StyledTr } from "../../style";
import React, { useState } from "react";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";

export const UsersMobileLine = ({ row, columnsNumber, isLast }: {
    columnsNumber: number,
    row: any,
    isLast: boolean
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <div
            style={{
                height: scrolled ? (columnsNumber * 55 + 10).toString() + "px" : "56px",
                transition: "height 0.3s ease-in-out, z-index 0.3s ease-in-out, background-color 0.3s ease-in-out",
                overflowY: "hidden",
                overflowX: scrolled ? "auto" : "hidden",
                marginBottom: isLast ? "0" : "30px",
                borderRadius: "10px",
                border: "2px solid #096A09",
                position: "relative",
                width: "100%",
                zIndex: scrolled ? "2" : "0",
                backgroundColor: scrolled ? "white" : "transparent"
            }}
        >
            <StyledTable>
                <tbody>
                    {row.cells.map((cell, index) => {
                        const isUserName = cell.column['id'] == 'user_name'

                        if ((index != 0 && index != 1)) {
                            return (
                                <StyledTr {...cell.getCellProps()} onClick={() => setScrolled(!scrolled)}>
                                    <StyledTd>
                                        <div style={{ width: "85px", display: "flex", justifyContent: "space-between" }}>
                                            {isUserName ? cell.column['id'] == 'user_name' &&
                                                <label style={{ width: "55px", display: "flex", justifyContent: "space-between" }}>
                                                    {row.cells[0].render('Cell')}
                                                    {row.cells[1].render('Cell')}
                                                </label>
                                                :
                                                cell.column.render('Header')
                                            }
                                        </div>
                                    </StyledTd>
                                    <StyledTd style={{ textAlign: "center" }}>
                                        {isUserName ?
                                            <Link href={{
                                                pathname: '/admin/users/[user_id]',
                                                query: { user_id: row.allCells[14].value },
                                            }}
                                                prefetch={false}
                                                passHref>
                                                <StyledLink color="#096a09">
                                                    {cell.render('Cell')}
                                                </StyledLink>
                                            </Link>
                                            :
                                            cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz' ?
                                                cell.value ? <Succes /> : <Fail />
                                                :
                                                cell.render('Cell')
                                        }
                                    </StyledTd>
                                </StyledTr>
                            )
                        }
                    })}
                </tbody>
            </StyledTable>
        </div>
    );
}

export default UsersMobileLine