import React, { useState, useEffect } from "react";
import axios from "axios";
import {GetTheToken} from "../utils/GetTheToken"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const[edited, setEdited] = useState(false);

  //This function was made pretty much to make app re-render everytime it switches  from true to false in hook edited
  //notice how i use it to track changes on my useEffect so my useEffect notice the change.
  const handleEdits =(data)=> {
    
    setEdited(true)
    
  }

  useEffect(() => {
    //Through this GetTheToken() im pretty much passing the already authenticated API http://localhost:5000/api with
    //its token as key
    GetTheToken()
      .get('/colors')
      .then(res => {
              setColorList(res.data);
      })
      .catch(err => console.log(err));
      //here im making my edited hook returning back to its default value
      setEdited(false)
      //with [edited] useEffect will track when there is a change before edited going from false to true or viceversa
  }, [edited])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} handleEdits={handleEdits}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
