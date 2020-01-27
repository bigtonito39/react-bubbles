import React, { useState, useEffect } from "react";
import axios from "axios";
import {GetTheToken} from "./GetTheToken"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const[edited, setEdited] = useState(false);
  const handleEdits =(data)=> {
    
    //To add new color
    // setColorList([...colorList, data.data])

    setEdited(true)
    
    
  }

  useEffect(() => {
    GetTheToken()
      .get('/colors')
      .then(res => {
      
        setColorList(res.data);
      })
      .catch(err => console.log(err));
      setEdited(false)
  }, [edited])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} handleEdits={handleEdits}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
