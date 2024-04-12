import { useEffect, useState } from "react"
import NoteCard from "./NoteCard/NoteCard"
import style from './CardList.module.css'

// props 
// 1. noteData,需要展示的游记数据
// 2. colNum,列的个数，默认值为2
export default function CardList(props) {
  const [noteData, setNoteData] = useState([])
  const [colNum, setColNum] = useState(2)
  const [noteList, setNoteList] = useState([])

  useEffect(()=>{
    setNoteData(props.noteData)
    if(props.colNum) setColNum(props.colNum)
  },[props.noteData, props.colNum])

  // 将所有数据拆分为多列
  useEffect(()=>{
    let chunkedLists = []
    for (let i = 0; i < colNum; i++) {
      const chunk = noteData.filter((_, index) => (index - i) % colNum === 0)
      chunkedLists.push(chunk)
    }
    setNoteList(chunkedLists)
  }, [noteData, colNum])
  
  return (
    <div className={style.listBox}>
      {noteList.map((itemList, index) => 
        <CardListItem key={index} noteList={itemList} />
      )}
    </div>
  )
}

// props 
// 1. noteList,当前列需要展示的游记数据
function CardListItem(props) {
  const [noteList, setNoteList] = useState([])
  useEffect(()=>{
    setNoteList(props.noteList)
  },[props.noteList])

  return (
    <div className={style.colList}>
      {noteList.map(item => 
          <NoteCard key={item.noteID} {...item} />
      )}
    </div>
  )
}