import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useRowSelect, useSortBy, useBlockLayout, useFlexLayout } from 'react-table'
import { CheckboxRow, Row } from '../../Container/style';
import Checkbox from '../../Input/Checkbox';
import { StyledInput, StyledLabel } from '../../Input/style';
import { BlackText, StyledLink, WhiteText } from '../../Text/style';
import {
  StyledTh,
  StyledTd,
  StyledUsersTr,
  StyledHeadTr,
  StyledUsersBody,
  StyledMobileContainerRow
} from '../style';
import UsersMobileLine from './MobileLine/Users';
import { MediaContextProvider, Media } from '../../MediaQueries/MediaSSR';
import Fail from '../../NavIcons/fail';
import Succes from '../../NavIcons/succes';
import Link from 'next/link';
import { FixedSizeList } from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer"

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
      <StyledLabel Display="inline-flex" width="25px">
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
      <BlackText mobileMarginBottom="10px" as="label" htmlFor="research">Rechercher</BlackText>
      <StyledInput id="research" value={value || ""}
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
      { Header: '#', accessor: (row, i) => i + 1, width: 90 },
      { Header: 'Utilisateur', accessor: 'user_name', minWidth: 250 },
      { Header: 'Prénom', accessor: 'user_firstname', minWidth: 200 },
      { Header: 'Nom', accessor: 'user_lastname', minWidth: 250 },
      { Header: 'Mail', accessor: 'user_email', minWidth: 350 },
      { Header: 'Cotiz', accessor: 'user_pay_status', width: 100 },
      { Header: 'Téléphone', accessor: 'user_phone', width: 200 },
      { Header: 'Bucque', accessor: 'user_bucque', minWidth: 250 },
      { Header: 'Fam\'s', accessor: 'user_fams', width: 150 },
      { Header: 'TBK', accessor: 'user_campus', width: 150 },
      { Header: 'Prom\'s', accessor: 'user_proms', width: 100 },
      { Header: 'Rank', accessor: 'user_rank', width: 100 },
      { Header: 'Gadz', accessor: 'user_is_gadz', width: 100 },
      { Header: 'Notification', accessor: 'user_notification', width: 125 },
      { Header: 'Id', accessor: 'user_id' }
    ]
    ,
    []
  )

  const {
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
        'user_campus',
        'user_proms',
        'user_rank',
        'user_is_gadz',
        'user_id',
        'user_notification'
      ]
    }
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useFlexLayout,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          width: 90,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox Color="white" {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ])
    }
  )

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index]
      prepareRow(row)
      const remainder = index % 2;

      return (
        <StyledUsersTr as="div"  {...row.getRowProps({ style })}>
          {row.cells.map((cell) => {
            const replaceBySvg = (cell.column['id'] == 'user_pay_status' || cell.column['id'] == 'user_is_gadz' || cell.column['id'] == 'user_notification')
            return (
              <StyledTd
                textAlign={replaceBySvg ? "center" : undefined}
                BackgroundColor={remainder ? "rgba(0, 0, 0, 0.075)" : undefined}
                {...cell.getCellProps()}
                as="div"
              >
                {replaceBySvg ?
                  cell.value ? <Succes /> : <Fail />
                  :
                  cell.column['id'] == 'user_name' ?
                    <Link href={{
                      pathname: '/admin/users/[user_id]',
                      query: { user_id: row.allCells[15].value }
                    }}
                      prefetch={false}
                      passHref>
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
    },
    [prepareRow, rows]
  )

  const RenderMobileRow = useCallback(
    ({ index, style }) => {
      const row = rows[index]
      prepareRow(row)
      return (
        <StyledMobileContainerRow  {...row.getRowProps({ style })}>
          <UsersMobileLine
            key={index}
            row={row}
            columnsNumber={14 - state.hiddenColumns.length}
            isLast={index == (rows.length - 1)}
          />
        </StyledMobileContainerRow>
      )
    },
    [prepareRow, rows]
  )

  const idSelected = selectedFlatRows.map(d => d.original["user_id"])

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <>
      <div style={{ display: "flex", width: "100%", position: "sticky", top: "0", zIndex: "2" }}>
        <StyledHeadTr {...headerGroups[0].getHeaderGroupProps()} as="div">
          {headerGroups[0].headers.map((column, index) => {
            const replaceBySvg = (column['id'] == 'user_pay_status' || column['id'] == 'user_is_gadz')

            return (
              <StyledTh textAlign={replaceBySvg ? "center" : undefined} {...column.getHeaderProps(column.getSortByToggleProps())} as="div">
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

      <StyledUsersBody {...rest}>
        {children}
      </StyledUsersBody>
    </>
  ));

  const innerMobileElementType = forwardRef(({ children, ...rest }, ref) => (
    <>
      <Row style={{
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

      <StyledUsersBody {...rest}>
        {children}
      </StyledUsersBody>
    </>
  ));

  function Table() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <MediaContextProvider>
            <Media at="sm">
              <FixedSizeList
                height={height}
                itemCount={rows.length}
                itemSize={86}
                width={width}
                innerElementType={innerMobileElementType}
              >
                {RenderMobileRow}
              </FixedSizeList>
            </Media>

            <Media greaterThan="sm">
              <FixedSizeList
                height={height}
                itemCount={rows.length}
                itemSize={61}
                width={width}
                innerElementType={innerElementType}
              >
                {RenderRow}
              </FixedSizeList>
            </Media>
          </MediaContextProvider>
        )}
      </AutoSizer>
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
    idSelected
    ,
    Table
  ]
}