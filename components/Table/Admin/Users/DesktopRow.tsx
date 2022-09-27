import Link from "next/link";
import React from "react";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import { StyledLink } from "../../../Text/style";
import { StyledUsersTr, StyledTd } from "../../style";

const UsersDesktopRow = ({
    remainder,
    row,
    virtuosoProps
}) => {
    const style = virtuosoProps.style
    return (
        <StyledUsersTr  {...virtuosoProps} {...row.getRowProps({style})}>
            {row.cells.map((cell, index) => {
                const replaceBySvg = (cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz' || cell.column['id'] == 'user_notification')
                return (
                    <StyledTd
                        key={index}
                        textAlign={replaceBySvg ? "center" : undefined}
                        BackgroundColor={remainder ? "rgba(0, 0, 0, 0.075)" : undefined}
                        {...cell.getCellProps()}
                        as="div"
                    >
                        {replaceBySvg ?
                            cell.value ? <Succes /> : <Fail />
                            :
                            cell.column['id'] == 'user_name' ?
                                <Link
                                    href={{
                                        pathname: '/admin/users/[user_id]',
                                        query: { user_id: row.allCells[15].value }
                                    }}
                                    passHref
                                    scroll={false}
                                >
                                    <StyledLink color="#096a09">
                                        {cell.render('Cell')}
                                    </StyledLink>
                                </Link>
                                :
                                cell.render('Cell')
                        }
                    </StyledTd>
                )
            })}
        </StyledUsersTr>
    )
};

export default UsersDesktopRow