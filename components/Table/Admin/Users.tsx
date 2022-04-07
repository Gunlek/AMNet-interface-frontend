import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useRowSelect, useSortBy } from 'react-table'
import { CheckboxRow, Row } from '../../Container/style';
import Checkbox from '../../Input/Checkbox';
import { StyledInput, StyledLabel } from '../../Input/style';
import { BlackText, WhiteText } from '../../Text/style';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledUsersTr,
  StyledHeadTr
} from '../style';
import UsersMobileLine from './MobileLine/Users';
import { MediaContextProvider, Media } from '../../MediaQueries/MediaSSR';
import Fail from '../../NavIcons/fail';
import Succes from '../../NavIcons/succes';

interface Props {
  indeterminate?: boolean;
  name: string;
}

const useCombinedRefs = (...refs): React.MutableRefObject<any> => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ indeterminate, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = React.useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);

    return (
      <StyledLabel width="25px">
        <Checkbox refs={combinedRef} {...rest} />
      </StyledLabel>

    );
  }
);

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <>
      <BlackText mobileMarginBottom="10px">Rechercher</BlackText>
      <StyledInput value={value || ""}
        spellcheck="false"
        onChange={e => { setValue(e.target.value); onChange(e.target.value); }}
        width="300px" mobileWidth="100%" marginLeft="20px"
        type="text"
      />
    </>
  )
}

export function UsersTable(data: any[]) {
  const columns = useMemo(
    () => [
      { Header: '#', accessor: (row, i) => i + 1 },
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
          minWidth: 35,
          width: 35,
          maxWidth: 35,
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
      marginBottom="2%"
      mobileMarginBottom="30px"
      justify="center"
      colWidth="150px"
      style={{ alignItems: "center" }}
    >
      {allColumns.slice(2, -1).map(column => (
        <StyledLabel key={column.id}>
          <Checkbox {...column.getToggleHiddenProps()} />{' '}
          <BlackText style={{ marginLeft: "10px" }}>{column.render('Header')}</BlackText>
        </StyledLabel>
      ))}
    </CheckboxRow>,
    selectedFlatRows.map(
      d => d.original["user_id"]
    ),
    <MediaContextProvider>
      <Media at="sm">
        <>
          <Row style={{
            marginBottom: "20px",
            justifyContent: "space-between",
            position: "sticky",
            zIndex: "2",
            top: "0",
            borderRadius: "10px",
            background: "#096A09",
            color: "white",
            padding: "15px 20px"
          }}
          >
            <label
              style={{
                width: "55px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "1.2rem",
              }}
            >
              {Object.keys(selectedRowIds).length}
              {headerGroups[0].headers[0].render('Header')}
            </label>
            <WhiteText style={{ paddingRight: "10px" }}>Tout sélectionner</WhiteText>
          </Row>

          {rows.map((row, index) => {
            prepareRow(row)

            return (
              <UsersMobileLine
                key={index}
                row={row}
                columnsNumber={14 - state.hiddenColumns.length}
                isLast={index == (rows.length - 1)}
              />
            )
          })}
        </>
      </Media>
      <Media greaterThan="sm">
        <StyledTable {...getTableProps()}>
          <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
              <StyledHeadTr {...headerGroups[0].getHeaderGroupProps()}>
                {headerGroups[0].headers.map((column, index) => {
                  if (column['id'] == 'user_pay_status' || column['id'] == 'user_is_gadz') {
                    return (
                      <StyledTh {...column.getHeaderProps(column.getSortByToggleProps())}>
                        <div style={{ display: "flex", userSelect: "none", justifyContent: "center" }}>
                          {column.render('Header')}
                          <span
                            style={{
                              display: "inline-block",
                              marginLeft: "10px",
                              width: "20px"
                            }}
                          >
                            {column.isSorted ? column.isSortedDesc ? '▼' : '▲' : ''}
                          </span>
                        </div>
                      </StyledTh>
                    )
                  }
                  else {
                    return (
                      <StyledTh {...column.getHeaderProps(column.getSortByToggleProps())}>
                        <div style={{ display: "flex", userSelect: "none" }}>
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
                    )
                  }
                })}
              </StyledHeadTr>
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row)
              return (
                <StyledUsersTr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    if (cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz') {
                      return (
                        <StyledTd style={{ textAlign: "center" }}{...cell.getCellProps()}>
                          {cell.value ? <Succes marginRight="25px" /> : <Fail marginRight="25px" />}
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
                </StyledUsersTr>
              )
            })}
          </tbody>
        </StyledTable>
      </Media>
    </MediaContextProvider>
  ]
}







