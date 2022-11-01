import { useState, useEffect } from 'react'

const useMousePosition = () => {
 const [ position, setPosition ] = useState({x: null, y: null});

 useEffect(() => {
  const handleMousePosition = (e) => {
    const { clientX, clientY} = e;
    setPosition({
      x: clientX,
      y: clientY,
    })
  }
  window.addEventListener('mousemove', handleMousePosition)
  return () => {
    window.removeEventListener('mousemove', handleMousePosition)
  }
}, [])

  return (
   position
  )
}

export { useMousePosition };
