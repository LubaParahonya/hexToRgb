import React, { useEffect, useState } from 'react'

export default function Color() {
  
    const [valueName, setValue] = useState('')
    const [color, setColor] = useState('')

    const inputValue = (e) => {
        setValue(e.target.value) 
        setColor(e.target.value)    
    }

    const styleBackground = (color) =>{
        setColor(color)
      }

    useEffect(()=> {document.body.style.backgroundColor = color}, [color])

    function hexToFgb (){
      const input = valueName;
      const hexRgb = '#[a-fA-F0-9]{6}'
      if(input.match(hexRgb)){
        const hexColor = input.replace('#', '')
        const r = parseInt(hexColor.substring(0,2), 16)
        const g = parseInt(hexColor.substring(0,2), 16)
        const b = parseInt(hexColor.substring(0,2), 16)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      }else{
        return 'ошибка!'
      }

    }

  
    
  return (
    <div >
      <input name='colorHEX'onChange={inputValue} />
      <input name='colorHEX' value={hexToFgb()} onChange={()=>styleBackground(inputValue)}/>
    </div>
  )
   
}
