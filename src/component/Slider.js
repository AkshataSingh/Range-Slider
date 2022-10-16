import React, { useState } from 'react';

const Slider = () => {

  const[width, setWidth] = useState(100)
  const[height, setHeight]= useState(100)


  const changeWidth = (event) => {
   setWidth(event.target.value);
  }

  const changeHeight = (event) => {
   setHeight(event.target.value)

  }
  return (
<>
<div className="container">
    <div className="card" style={{ "top": "100px" , "left" : "330px" , "width" : "35rem"}} >
  <div className="card-body">

<h5>Box Width: {width}px</h5>
<input type="range" className="range-min" min={1} max={500} onChange={changeWidth} value={width} style= {{"width":"500px"}} />

<h5>Box Height: {height}px</h5>
<input type="range" className="range-max" min={1} max={300} onChange={changeHeight} value={height} style= {{"width":"500px"}} />

{/* for box */}
<div style={{width: `${width}px`, height: `${height}px`}} className='box' ></div>

</div>
</div>
</div>
        </>
  
  )
}

export default Slider



