import React, { useState } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import { CheckboxRow } from '../Container/style';
import Checkbox from '../Input/Checkbox';
import { StyledLabel } from '../Input/style';
import { BlackText } from '../Text/style';
import useMediaQuery from '../MediaQueries/MediaQuery';
import {
  StyledTable,
  StyledGreenTr,
  StyledTh,
  StyledTr,
  StyledTd
} from './style';

export function UsersTable({ data }) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const columns = React.useMemo(
    () => [
      {
        Header: 'Utilisateur',
        accessor: 'user_name',
      },
      {
        Header: 'Prénom',
        accessor: 'user_firstname',
      },
      {
        Header: 'Nom',
        accessor: 'user_lastname',
      },
      {
        Header: 'Mail',
        accessor: 'user_email',
      },
      {
        Header: 'Cotisation',
        accessor: 'user_pay_status',
      },
      {
        Header: 'Téléphone',
        accessor: 'user_phone',
      },
      {
        Header: 'Bucque',
        accessor: 'user_bucque',
      },
      {
        Header: 'Fam\'s',
        accessor: 'user_fams',
      },
      {
        Header: 'Campus',
        accessor: 'user_campus',
      },
      {
        Header: 'Promotion',
        accessor: 'user_pomotion',
      },
      {
        Header: 'Rank',
        accessor: 'user_rank',
      },
      {
        Header: 'Gadz',
        accessor: 'user_is_gadz',
      }
    ]
    ,
    []
  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: [
        'user_phone',
        'user_bucque',
        'user_fams',
        'user_fams',
        'user_campus',
        'user_pomotion',
        'user_rank',
        'user_is_gadz'
      ]
    }
  })



  return [
    <CheckboxRow
      justify="center"
      width="175px"
      style={{
        marginBottom: minWidth1000 ? "2%" : "4%",
        alignItems: "center"
      }}
    >
      {allColumns.map(column => (
        <StyledLabel key={column.id}>
          <Checkbox {...column.getToggleHiddenProps()} />{' '}
          <BlackText style={{ marginLeft: "10px" }}>{column.render('Header')}</BlackText>
        </StyledLabel>
      ))}
    </CheckboxRow>,

    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <StyledGreenTr {...headerGroup.getHeaderGroupProps()}>
            <StyledTh>
              <StyledLabel width="25px">
                <Checkbox color="white" />
              </StyledLabel>
            </StyledTh>
            {headerGroup.headers.map(column => (
              <StyledTh {...column.getHeaderProps()}>{column.render('Header')}</StyledTh>
            ))}
          </StyledGreenTr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <StyledTr key={index} {...row.getRowProps()}>
              <StyledTd>
                <StyledLabel id={index} width="25px">
                  <Checkbox />
                </StyledLabel>
              </StyledTd>
              {row.cells.map((cell) => {
               
                if (cell.column['id'] == 'user_pay_status') {
                  return (
                    <StyledTd {...cell.getCellProps()}>
                      <img style={{ height: "20px", marginLeft: "40px" }} src={cell.value ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                    </StyledTd>
                  )
                }
                else if (cell.column['id'] == 'user_is_gadz') {
                  return (
                    <StyledTd {...cell.getCellProps()}>
                      <img style={{ height: "20px", marginLeft: "12.5px" }} src={cell.value ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} />
                    </StyledTd>
                  )
                }
                else {
                  return (
                    <StyledTd {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </StyledTd>
                  )
                }
              })}
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  ]


}


