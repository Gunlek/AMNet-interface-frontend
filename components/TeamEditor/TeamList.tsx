import React, { useCallback, useMemo, useRef } from 'react';
import { ArrowButton, SmallRedButton } from '../Button/Buttons';
import { StyledTable, StyledTd, StyledTeamTr, StyledTr, StyledUsersTr } from '../Table/style';
import { useTable } from 'react-table'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { HTML5Backend } from "react-dnd-html5-backend";
import { MediaContextProvider, Media } from '../MediaQueries/MediaSSR';

const Row = ({ row, index, moveRow, deleteTeamMember }) => {
  const dropRef = useRef(null)
  const dragRef = useRef(null)
  const DND_ITEM_TYPE = 'row'

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item: any, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveRow(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_ITEM_TYPE,
    item: () => {
      return { index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  preview(drop(dropRef))
  drag(dragRef)


  return (
    <StyledTeamTr ref={dropRef} style={{ opacity }}>
      <StyledTd
        colspan="2"
        ref={dragRef}
        style={{
          width: "83.32%",
          userSelect: "none",
          cursor: "pointer",
          paddingLeft: "0"
        }}
      >
        <div
          {...row.cells[0].getCellProps()}
          style={{
            width: "50%",
            display: "inline-block",
            paddingLeft: "20px",
            marginRight: "15px"
          }}
        >
          {row.cells[0].render('Cell')}
        </div>

        <div
          {...row.cells[1].getCellProps()}
          style={{
            width: "50%",
            display: "inline-block",
            paddingLeft: "20px"
          }}
        >
          {row.cells[1].render('Cell')}
        </div>
      </StyledTd>

      <StyledTd style={{ paddingRight: "10px" }}>
        <SmallRedButton onClick={(elmt) => deleteTeamMember(elmt, index)}>Supprimer</SmallRedButton>
      </StyledTd>
    </StyledTeamTr>
  )
}

const MobileRow = ({ row, index, moveRow, deleteTeamMember, lastIndex }) => {
  const newIndexDown = index == lastIndex ? 0 : index + 1;
  const newIndexUp = index == 0 ? lastIndex : index - 1;

  return (
    <StyledTr>
      <StyledTd style={{ paddingLeft: "0", display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <ArrowButton onClick={() => moveRow(index, newIndexUp)} position="top" />
          <ArrowButton onClick={() => moveRow(index, newIndexDown)} position="bottom" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: "1", alignItems: "center" }}>
          <div  {...row.cells[0].getCellProps()}>{row.cells[0].render('Cell')}</div>
          <div  {...row.cells[1].getCellProps()} style={{ marginBottom: "15px" }}>{row.cells[1].render('Cell')}</div>
          <SmallRedButton onClick={(elmt) => deleteTeamMember(elmt, index)}>Supprimer</SmallRedButton>
        </div>
      </StyledTd>
    </StyledTr>
  )
}

export const TeamList = (props: { list: any[], setter?: Function }) => {
  function deleteTeamMember(e, index) {
    e.preventDefault();
    let Newteam = props.list.slice(0);
    Newteam.splice(index, 1);
    props.setter(Newteam);
  }

  const columns = useMemo(() => [{ accessor: 'pseudo' }, { accessor: 'id' }], [])
  const getRowId = useCallback(row => {
    return row.id
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({
    data: props.list,
    columns,
    getRowId,
  })

  const moveRow = (index: number, newIndex: number) => {
    const dragRecord = props.list[index]
    props.setter(
      update(props.list, {
        $splice: [
          [index, 1],
          [newIndex, 0, dragRecord],
        ],
      })
    )
  }

  return (
    <MediaContextProvider>
      <Media at="sm" style={{ overflowX: "auto" }}>
        <StyledTable {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index: number) =>
              prepareRow(row) || (
                <MobileRow
                  deleteTeamMember={deleteTeamMember}
                  index={index}
                  row={row}
                  moveRow={moveRow}
                  {...row.getRowProps()}
                  lastIndex={rows.length - 1}
                />
              )
            )}
          </tbody>
        </StyledTable>
      </Media>

      <Media greaterThan="sm" style={{ overflowX: "auto" }}>
        <DndProvider backend={HTML5Backend}>
          <StyledTable {...getTableProps()}>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index: number) =>
                prepareRow(row) || (
                  <Row
                    deleteTeamMember={deleteTeamMember}
                    index={index}
                    row={row}
                    moveRow={moveRow}
                    {...row.getRowProps()}
                  />
                )
              )}
            </tbody>
          </StyledTable>
        </DndProvider>
      </Media>
    </MediaContextProvider>
  )
}

export default TeamList