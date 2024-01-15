import React from "react";



const App = () => {

  const [num,setNum]= React.useState(0);
  const changeNum = (_value)=> setNum(Math.round(Math.random()*100));
  const resetNum = (_value)=> setNum(0);
  const nextNum = (_value)=> setNum((_value)=> _value+1);
  const prevNum = (_value)=> setNum((_value)=>_value-1);
  return (
    <>
      <h1 >Dem so:{num} </h1>
      <button onClick={changeNum} >ramdom</button>
      <button onClick={resetNum} >reset</button>
      <button onClick={nextNum} >Next</button>
      <button onClick={prevNum} >Prev</button>

    </>
  )
}

export default App;
