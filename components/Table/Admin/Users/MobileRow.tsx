import { StyledTable, StyledTd, StyledTr } from "../../style";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Fail = dynamic(() => import("../../../NavIcons/fail"));
const Succes = dynamic(() => import("../../../NavIcons/succes"));

export const UsersMobileLine = ({ row, virtuosoProps, isLast }: {
    row: any,
    virtuosoProps: any,
    isLast: boolean
}) => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <div {...virtuosoProps} style={{ paddingBottom: isLast ? "0" : "30px", overflowAnchor: "none" }}>
            <motion.div
                initial={false}
                animate={{height: scrolled ? `auto` : 55 }}
                transition={{ ease: "linear", duration: 0.3 }}
                style={{
                    overflow: scrolled ? "auto" : "clip",
                    borderRadius: "10px",
                    border: "2px solid #096A09",
                    backgroundColor: "white"
                }}
            >
                <StyledTable>
                    <tbody>
                        {row.cells.map((cell, index) => {
                            const isUserName = cell.column['id'] == 'user_name';

                            if ((index != 0 && index != 1)) {
                                return (
                                    <StyledTr {...cell.getCellProps()} onClick={() => setScrolled(!scrolled)}>
                                        <StyledTd>
                                            {isUserName ? cell.column['id'] == 'user_name' &&
                                                <div style={{ width: "60px", display: "flex", justifyContent: "space-between" }}>
                                                    {row.cells[0].render('Cell')}
                                                    {row.cells[1].render('Cell')}
                                                </div>
                                                :
                                                cell.column.render('Header')
                                            }
                                        </StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            {isUserName ?
                                                <Link href={{
                                                    pathname: '/admin/users/[user_id]',
                                                    query: { user_id: row.original.user_id },
                                                }}
                                                    passHref
                                                    scroll={false}
                                                >
                                                    <StyledLink color="#096a09" style={{ pointerEvents: scrolled ? undefined : "none" }}>
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
            </motion.div>
        </div>
    );
};

export default UsersMobileLine