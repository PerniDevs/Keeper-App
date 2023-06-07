import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)

 const [note, setNote] = useState({
  title: "",
  content: ""
 })

 function expand(){
  return setExpanded(true)
 }

 function handleChange(event) {
  const {value, name} = event.target;
  console.log(value, name);
  setNote((prevValue)=> {
      return {
        ...prevValue,
        [name]: value
      }
  })
 }

 function submitNote(event){
  props.onAdd(note)
  event.preventDefault();
  setNote({
    title: "",
    content: ""
  })
 }

  return (
    <div>
      <form className="create-note"> 
        {isExpanded ? <input onChange={handleChange} value={note.title} name="title" placeholder="Title" /> : null}
        <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;