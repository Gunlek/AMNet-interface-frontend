import React from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useRowSelect, useSortBy } from 'react-table'
import { CheckboxRow } from '../Container/style';
import Checkbox from '../Input/Checkbox';
import { StyledInput, StyledLabel } from '../Input/style';
import { BlackText } from '../Text/style';
import useMediaQuery from '../MediaQueries/MediaQuery';
import {
  StyledTable,
  StyledGreenTr,
  StyledTh,
  StyledTr,
  StyledTd
} from './style';

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <>
      <BlackText style={{ marginBottom: minWidth1000 ? "0" : "2%" }}>Rechercher</BlackText>
      <StyledInput value={value || ""}
        spellcheck="false"
        onChange={e => { setValue(e.target.value); onChange(e.target.value); }}
        style={{ marginLeft: minWidth1000 ? "20px" : "0", width: minWidth1000 ? "300px" : "100%" }}
        type="text"
      />
    </>
  )
}

const IndeterminateCheckbox = React.forwardRef(
  ({ ...rest }) => {
    return (
      <StyledLabel width="25px">
        <Checkbox {...rest} />
      </StyledLabel>
    )
  }
)

export function UsersTable(data: any[]) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const columns = React.useMemo(
    () => [
      { Header: '#', accessor: (row, i) => i+1 },
      { Header: 'Utilisateur', accessor: 'user_name' },
      { Header: 'Prénom', accessor: 'user_firstname' },
      { Header: 'Nom', accessor: 'user_lastname' },
      { Header: 'Mail', accessor: 'user_email' },
      { Header: 'Cotisation', accessor: 'user_pay_status' },
      { Header: 'Téléphone', accessor: 'user_phone' },
      { Header: 'Bucque', accessor: 'user_bucque' },
      { Header: 'Fam\'s', accessor: 'user_fams' },
      { Header: 'Campus', accessor: 'user_campus' },
      { Header: 'Promotion', accessor: 'user_pomotion' },
      { Header: 'Rank', accessor: 'user_rank' },
      { Header: 'Gadz', accessor: 'user_is_gadz' },
      { Header: 'Id', accessor: 'user_id' }
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
    state: { selectedRowIds },
    setGlobalFilter,
    state,
    selectedFlatRows,
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
        'user_is_gadz',
        'user_id'
      ]
    }
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect, 
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox color="white" {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  return [
    <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />,
    <CheckboxRow
      justify="center"
      width="175px"
      style={{
        marginBottom: minWidth1000 ? "2%" : "4%",
        alignItems: "center"
      }}
    >
      {allColumns.slice(2, -1).map(column => (
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

            {headerGroup.headers.map((column, index) => (
              <StyledTh {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div style={{ display: "flex" }}>
                  {column.render('Header')}
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "10px",
                      width: "20px"
                    }}
                  >
                    {(index == 0) && Object.keys(selectedRowIds).length}
                    {!(index == 0) && column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''}
                  </span>
                </div>
              </StyledTh>
            ))}
          </StyledGreenTr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <StyledTr key={index} {...row.getRowProps()}>
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


