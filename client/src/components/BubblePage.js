import React, { useState, useEffect } from "react";
import axios from "axios";
import {GetTheToken} from "./GetTheToken"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  useEffect( () => {
    GetTheToken()
    axios
    .get("/colors")
    .then(response => {
      console.log(response)// setColorList(...colorList, response.data)
    })
    .catch( err => {
      console.log("error", err)
    })

  },);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
