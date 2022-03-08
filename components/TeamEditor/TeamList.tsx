import React, { useCallback, useMemo, useRef } from 'react';
import { SmallRedButton } from '../Button/Buttons';
import { StyledTable, StyledTd, StyledTr } from '../Table/style';
import { useTable } from 'react-table'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { HTML5Backend } from "react-dnd-html5-backend";
import useMediaQuery from '../MediaQueries/MediaQuery';


export const TeamList = (props: { list: any[], setter?: Function }) => {
    function deleteTeamMember(e, index){
        e.preventDefault();
        let Newteam = props.list.slice(0);
        Newteam.splice(index, 1);
        props.setter(Newteam);
    }

    const columns = useMemo(() => [ { accessor: 'pseudo' }, { accessor: 'id' } ], [] )
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
      <div style={{overflowX: "auto"}}> 
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
      </div>
    )
  }
  
  const DND_ITEM_TYPE = 'row'
  
  const Row = ({ row, index, moveRow, deleteTeamMember }) => {
    const dropRef = useRef(null)
    const dragRef = useRef(null)
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
  
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
                userSelect:"none", 
                cursor: "pointer",
                paddingLeft: "0", 
                paddingRight: minWidth1000? "0" : "10px" 
              }}
            >
              <div 
                {...row.cells[0].getCellProps()} 
                style={{
                  width:"50%",  
                  display: minWidth1000? "inline-block" : "block", 
                  paddingLeft: minWidth1000? "20px" : "0"
                }}
              >
                {row.cells[0].render('Cell')}
              </div>

              <div
                {...row.cells[1].getCellProps()}  
                style={{
                  width:"50%", 
                  display: minWidth1000? "inline-block" : "block", 
                  paddingLeft: minWidth1000? "20px" : "0"
                }}
              >
                {row.cells[1].render('Cell')}
              </div>   
            </StyledTd>
            
            <StyledTd style={{ paddingLeft: minWidth1000? "0" : "10px" }}>
                <SmallRedButton onClick={(elmt) => deleteTeamMember(elmt, index)}>Supprimer</SmallRedButton>
            </StyledTd>
        </StyledTr>
    )
  }

export default TeamList