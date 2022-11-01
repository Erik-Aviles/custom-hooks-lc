import { useMemo} from 'react'
import { useMousePosition } from './useMousePosition';

const useBackgraoundPosition = () => {
  const position = useMousePosition()

  const background = useMemo(() =>
  position.x < window.innerWidth/2 ? 'orange' : 'blue' 
, [position]);

  return { background, position };
}

export { useBackgraoundPosition };
