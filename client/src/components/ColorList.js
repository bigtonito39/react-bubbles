import React, { useState } from "react";
import {GetTheToken} from "../utils/GetTheToken"

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors,handleEdits }) => {
  
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [addColor,setAddColor] = useState(initialColor)
 
  
  const editColor = color => {

    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
  
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    GetTheToken()
    .put(`/colors/${colorToEdit.id}`,colorToEdit)
    .then(res => {
      handleEdits()
    })
    .catch(err => {console.log("error from ColorList", err)})
    
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    
    GetTheToken()
    .delete(`/colors/${color.id}`)
    .then(res => {
      console.log("coming from delete", res)
    })
    .catch(err => {console.log("error from delete", err)})
    handleEdits()
  };

  const addColorHandler = e => {
   e.preventDefault();
   
   GetTheToken()
    .post(`/colors`,addColor )
    .then(res => {
     console.log("coming from addColorHandler",res)
    })
    .catch(err => console.log("error coming from addColor", err))
    
    setAddColor(initialColor)
    handleEdits()
    
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {/* stretch - build another form here to add a color */
      <form >
        <legend>Add color</legend>
        <label>
          color name:
          <input 
          onChange={ e => setAddColor({...addColor,color:e.target.value})}
          value={addColor.color}
          />
        </label>
        <label>
          hex code:
          <input 
          onChange={ e => setAddColor({...addColor,code: {hex: e.target.value}})}
          value={addColor.code.hex}
          />
        </label>
        <div className="button-row">
            <button onClick={addColorHandler} type="submit">save</button>
            
          </div>
        </form>}
      <div className="spacer" />
      
    </div>
  );
};

export default ColorList;
