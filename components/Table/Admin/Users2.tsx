import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useRowSelect, useSortBy, useBlockLayout } from 'react-table'
import { CheckboxRow } from '../../Container/style';
import Checkbox from '../../Input/Checkbox';
import { StyledInput, StyledLabel } from '../../Input/style';
import { BlackText, WhiteText } from '../../Text/style';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledUsersTr,
  StyledHeadTr,
  StyledTr
} from '../style';
import UsersMobileLine from './MobileLine/Users';
import { MediaContextProvider, Media } from '../../MediaQueries/MediaSSR';
import Fail from '../../NavIcons/fail';
import Succes from '../../NavIcons/succes';
import { FixedSizeList } from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer"


import { useContext } from 'react'
import { FixedSizeListProps } from 'react-window'


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
  const newRow = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      newRow {index}
    </div>
  );



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
    totalColumnsWidth
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
    useBlockLayout,
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



  const Row = useCallback(
    ({ index }) => {
      const row = rows[index]
      prepareRow(row)
      return (
        <StyledTr key={index} >
          {row.cells.map((cell) => {
            if (cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz') {
              return (
                <StyledTd style={{ textAlign: "center" }}>
                  {cell.value ? <Succes marginRight="25px" /> : <Fail marginRight="25px" />}
                </StyledTd>
              )
            }
            else {
              return (
                <StyledTd>
                  {cell.render('Cell')}
                </StyledTd>
              )
            }
          })}
        </StyledTr>
      )
    },
    [prepareRow, rows]
  )

  function Table(height,  width) {
    return (
      <VirtualTable
        height={height}
        width={width+"px"}
        itemCount={data.length}
        itemSize={60}
        header={
          <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
            <StyledHeadTr >
              {headerGroups[0].headers.map((column, index) => {
                if (column['id'] == 'user_pay_status' || column['id'] == 'user_is_gadz') {
                  return (
                    <StyledTh >
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
                    <StyledTh >
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
        }
        row={Row}
      />
    )
  }

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
    Table
  ]
}


/** Context for cross component communication */
const VirtualTableContext = React.createContext<{
  top: number
  setTop: (top: number) => void
  header: React.ReactNode
}>({
  top: 0,
  setTop: (value: number) => { },
  header: <></>,
})

/** The virtual table. It basically accepts all of the same params as the original FixedSizeList.*/
function VirtualTable({
  row,
  header,
  footer,
  ...rest
}: {
  header?: React.ReactNode
  row: FixedSizeListProps['children']
} & Omit<FixedSizeListProps, 'children' | 'innerElementType'>) {
  const listRef = useRef<FixedSizeList | null>()
  const [top, setTop] = useState(0)

  return (
    <VirtualTableContext.Provider value={{ top, setTop, header }}>
      <FixedSizeList
        {...rest}
        innerElementType={Inner}
        onItemsRendered={props => {
          const style =
            listRef.current &&
            // @ts-ignore private method access
            listRef.current._getItemStyle(props.overscanStartIndex)
          setTop((style && style.top) || 0)

          // Call the original callback
          rest.onItemsRendered && rest.onItemsRendered(props)
        }}
        ref={el => (listRef.current = el)}
      >
        {row}
      </FixedSizeList>
    </VirtualTableContext.Provider>
  )
}



/**
 * The Inner component of the virtual list. This is the "Magic".
 * Capture what would have been the top elements position and apply it to the table.
 * Other than that, render an optional header and footer.
 **/
const Inner = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function Inner({ children, ...rest }, ref) {
    const { header, top } = useContext(VirtualTableContext)
    return (
      <div {...rest} ref={ref}>
        <StyledTable style={{ top, position: 'absolute', width: '100%' }}>
          {header}
          <tbody >{children}</tbody>
        </StyledTable>
      </div>
    )
  }
)