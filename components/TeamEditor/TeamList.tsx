import React, { useCallback, useMemo, useRef } from 'react';
import { SmallRedButton } from '../Button/Buttons';
import { StyledTable, StyledTd, StyledTr } from '../Table/style';
import { useTable } from 'react-table'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { HTML5Backend } from "react-dnd-html5-backend";
import { StyledBackArrow } from '../NavIcons/style';
import { MediaContextProvider, Media } from '../MediaQueries/MediaSSR';

const DND_ITEM_TYPE = 'row'

const Row = ({ row, index, moveRow, deleteTeamMember }) => {
  const dropRef = useRef(null)
  const dragRef = useRef(null)

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item: any, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
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
    <StyledTr ref={dropRef} style={{ opacity }}>
      <StyledTd
        colspan="2"
        ref={dragRef}
        style={{
          width: "83.32%",
          userSelect: "none",
          cursor: "pointer",
          paddingLeft: "0",
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

      <StyledTd>
        <SmallRedButton onClick={(elmt) => deleteTeamMember(elmt, index)}>Supprimer</SmallRedButton>
      </StyledTd>
    </StyledTr>
  )
}

const Row2 = ({ row, index, moveRow, deleteTeamMember, lastIndex }) => {
  var newIndexDown = 0
  var newIndexUp = 0

  if (index == 0) {
    newIndexUp = lastIndex
  }
  else {
    newIndexUp = index - 1
  }

  if (index == lastIndex) {
    newIndexDown = 0
  }
  else {
    newIndexDown = index + 1
  }

  return (
    <StyledTr>
      <StyledTd style={{ paddingLeft: "0" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <StyledBackArrow onClick={(e) => moveRow(index, newIndexUp)} translate="-10%">
              <svg

                fill="rgba(0, 0, 0, 0.2)"
                style={{
                  width: "25px",
                  transform: "rotate(180deg) translateY(15%)",
                  display: "block"
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9.02 5.62"
              >
                <path d="M.91,0l3.6,3.62L8.11,0,9,1.18,4.51,5.62,0,1.13Z" />
              </svg>
            </StyledBackArrow>
            <StyledBackArrow onClick={(e) => moveRow(index, newIndexDown)} translate="10%">
              <svg
                fill="rgba(0, 0, 0, 0.2)"
                style={{
                  width: "25px",
                  display: "block",
                  transform: "translateY(15%)"
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9.02 5.62"
              >
                <path d="M.91,0l3.6,3.62L8.11,0,9,1.18,4.51,5.62,0,1.13Z" />
              </svg>
            </StyledBackArrow>
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: "1", alignItems: "center" }}>
            <div  {...row.cells[0].getCellProps()}>{row.cells[0].render('Cell')}</div>
            <div  {...row.cells[1].getCellProps()} style={{ marginBottom: "15px" }}>{row.cells[1].render('Cell')}</div>
            <SmallRedButton onClick={(elmt) => deleteTeamMember(elmt, index)}>Supprimer</SmallRedButton>
          </div>
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

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRecord = props.list[dragIndex]
    props.setter(
      update(props.list, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      })
    )
  }

  return (
    <MediaContextProvider>
      <Media at="sm" style={{ overflowX: "auto" }}>
        <StyledTable {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) =>
              prepareRow(row) || (
                <Row2
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
              {rows.map((row, index) =>
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