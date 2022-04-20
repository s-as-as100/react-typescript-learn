import React from 'react'
interface IProps {
    a:number,
    b:number
  }

  // props is not change
  
  function SumComponent(props:IProps) {
  
    return <>{props.a + props.b}</>
  
  }

  
const Type = () => {
  return (
    <div>
         <SumComponent a ={100} b ={100}/>
    </div>
  )
}

export default Type