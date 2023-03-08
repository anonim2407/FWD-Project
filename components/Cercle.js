import React from 'react'

const Cercle = ({position , width, height, color}) => {
  return (
    <div className={position}>
      <div className={`liquid_shape ${color}`} style={{width:width, height:height}}>

      </div>
    </div>
  )
}

export default Cercle
