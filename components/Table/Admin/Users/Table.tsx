import { LayoutGroup } from "framer-motion";
import { Virtuoso } from "react-virtuoso";
import { Row } from "../../../Container/style";
import { WhiteText } from "../../../Text/style";
import { StyledHeadTr, StyledTh } from "../../style";
import UsersDesktopRow from "./DesktopRow";
import UsersMobileLine from "./MobileRow";

export function UserDeskopTable({ headerGroups, selectedRowIds, rows, prepareRow }) {
    return (
        <>
            <div style={{ display: "flex", width: "100%", position: "sticky", top: "0", zIndex: "2" }}>
                <StyledHeadTr {...headerGroups[0].getHeaderGroupProps()} as="div">
                    {headerGroups[0].headers.map((column, index) => {
                        const replaceBySvg = (column['id'] == 'user_pay_status' || column['id'] == 'user_is_gadz' || column['id'] == 'user_notification')

                        return (
                            <StyledTh
                                key={column.id}
                                textAlign={replaceBySvg ? "center" : undefined}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                as="div"
                                title={
                                    column.isSorted ?
                                        column.isSortedDesc ?
                                            'Tri supprimé' : 'Tri par ordre décroisant' : 'Tri par ordre croisant'
                                }
                            >
                                {column.render('Header')}
                                {(index == 0) ?
                                    <span
                                        style={{
                                            display: "inline-block",
                                            transform: "translateY(-15%)",
                                            marginLeft: "10px"
                                        }}
                                    >
                                        {Object.keys(selectedRowIds).length}
                                    </span>
                                    :
                                    column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''
                                }
                            </StyledTh>
                        )
                    })}
                </StyledHeadTr>
            </div>

            <Virtuoso
                style={{ height: "100%" }}
                totalCount={rows.length}
                components={{
                    Item: (props) => {
                        const row = rows[props['data-index']];
                        prepareRow(row);
                        return (
                            <UsersDesktopRow
                                virtuosoProps={props}
                                key={props['data-index']}
                                row={row}
                                remainder={props['data-index'] % 2}
                            />
                        )
                    },
                }}
            />
        </>
    )
};

export function UserMobileTable({ headerGroups, selectedRowIds, rows, prepareRow }) {
    return (
        <LayoutGroup>
            <Row
                style={{
                    marginBottom: "20px",
                    justifyContent: "space-between",
                    position: "sticky",
                    zIndex: "3",
                    top: "0",
                    borderRadius: "10px",
                    background: "#096A09",
                    color: "white",
                    padding: "15px 20px"
                }}
            >
                <div
                    style={{
                        width: "55px",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "1.2rem",
                    }}
                >
                    {Object.keys(selectedRowIds).length}
                    {headerGroups[0].headers[0].render('Header')}
                </div>
                <WhiteText style={{ paddingRight: "10px" }}>Tout sélectionner</WhiteText>
            </Row>

            <Virtuoso
                style={{ height: "100%" }}
                increaseViewportBy={{ bottom: 300, top: 0 }}
                totalCount={rows.length}
                components={{
                    Item: (props) => {
                        const row = rows[props['data-index']];
                        prepareRow(row);
                        return (
                            <UsersMobileLine virtuosoProps={props} key={props['data-index']} row={row} />
                        )
                    },
                }}
            />
        </LayoutGroup>
    );
};
