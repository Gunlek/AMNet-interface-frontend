import React, { useMemo } from 'react'
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useFlexLayout
} from 'react-table'
import { CheckboxRow } from '../../../Container/style';
import Checkbox from '../../../Input/Checkbox';
import { StyledLabel } from '../../../Input/style';
import { BlackText } from '../../../Text/style';
import { MediaContextProvider, Media } from '../../../MediaQueries/MediaSSR';
import IndeterminateCheckbox from './RowCheckbox';
import GlobalFilter from './GlobalFilter';
import { UserDeskopTable, UserMobileTable } from './Table';

export function UsersTable(users: any[], count: number) {
  const columns = useMemo(
    () => [
      { Header: '#', accessor: (_row, i) => i + 1, width: 90 },
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
      { Header: 'Notification', accessor: 'user_notification', width: 150 },
      { Header: 'Id', accessor: 'user_id' }
    ]
    ,
    []
  );
  const data = useMemo(() => users, [users]);
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
    autoResetPage: false,
    autoResetExpanded: false,
    autoResetGroupBy: false,
    autoResetSortBy: false,
    autoResetFilters: false,
    autoResetGlobalFilter: false,
    autoResetRowState: false,
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
  );

  const idSelected = selectedFlatRows.map(d => d.original["user_id"]);
  idSelected.displayName = "idSelected";

  const style = { width: "100%", height: "100%", overflow: "clip" };

  const table = <MediaContextProvider>
    <Media at="sm" style={style}>
      <UserMobileTable
        count={count}
        headerGroups={headerGroups}
        selectedRowIds={selectedRowIds}
        rows={rows}
        prepareRow={prepareRow}
      />
    </Media>

    <Media greaterThan="sm" style={style}>
      <UserDeskopTable
        count={count}
        headerGroups={headerGroups}
        selectedRowIds={selectedRowIds}
        rows={rows}
        prepareRow={prepareRow}
      />
    </Media>
  </MediaContextProvider>;

  const checkboxRow = <CheckboxRow
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
  </CheckboxRow>;

  const globalFilter = <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />;

  return {
    checkboxRow,
    globalFilter,
    idSelected,
    table
  }
}