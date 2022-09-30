import { LayoutGroup } from "framer-motion";
import React, { forwardRef } from "react";
import { TableVirtuoso, Virtuoso } from "react-virtuoso";
import { Row } from "../../../Container/style";
import { WhiteText } from "../../../Text/style";
import { StyledHeadTr, StyledTable, StyledTh } from "../../style";
import UsersDesktopRow from "./DesktopRow";
import UsersMobileLine from "./MobileRow";

export function UserDeskopTable({ headerGroups, selectedRowIds, rows, prepareRow, count }) {
    return (
        <TableVirtuoso
            style={{ height: "100%" }}
            totalCount={count}
            initialItemCount={10}
            fixedHeaderContent={() => (
                <StyledHeadTr {...headerGroups[0].getHeaderGroupProps()}>
                    {headerGroups[0].headers.map((column, index) => {
                        const replaceBySvg = (column['id'] == 'user_pay_status' || column['id'] == 'user_is_gadz' || column['id'] == 'user_notification')

                        return (
                            <StyledTh
                                key={column.id}
                                textAlign={replaceBySvg ? "center" : undefined}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
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
            )}
            components={{
                // eslint-disable-next-line react/display-name
                TableHead: forwardRef(({ style, ...props }, ref) => <thead ref={ref} {...props} style={{ ...style, zIndex: "2" }} />),
                Table: ({ style, ...props }) => <StyledTable {...props} style={{ ...style, tableLayout: 'fixed' }} />,
                TableRow: (props) => {
                    const row = rows[props['data-index']];

                    if (row) {
                        prepareRow(row);
                        return (
                            <UsersDesktopRow
                                virtuosoProps={props}
                                key={props['data-index']}
                                row={row}
                                remainder={props['data-index'] % 2}
                            />
                        )
                    }

                    return null
                },
            }}
        />
    )
};


export function UserMobileTable({ headerGroups, selectedRowIds, rows, prepareRow, count }) {
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
                style={{ flex: "1" }}
                increaseViewportBy={{ bottom: 300, top: 0 }}
                totalCount={count}
                initialItemCount={10}
                fixedItemHeight={85}
                components={{
                    Item: (props) => {
                        const row = rows[props['data-index']];

                        if (row) {
                            prepareRow(row);
                            return (
                                <UsersMobileLine
                                    virtuosoProps={props}
                                    key={props['data-index']}
                                    row={row}
                                    isLast={props['data-index'] + 1 == rows.length}
                                />
                            )
                        }

                        return null
                    },
                }}
            />
        </LayoutGroup>
    );
};
