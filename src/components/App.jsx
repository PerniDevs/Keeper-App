import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [items, setItems] = useState([])

  function addNote(newNote){
    setItems((prevItems) => {return [...prevItems, newNote]})
  }

  function deleteItem(id) {
    console.log("deleted");
    setItems(prevItems =>{
      return prevItems.filter((item, index)=> {
        return index != id;
      })
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      {items.map((item, index)=>{
        return  <Note
        key={index}
        id={index} 
        title = {item.title} 
        content={item.content} 
        onDelete={deleteItem}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
