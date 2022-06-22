import { useEffect, useState } from "react"

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const onResize = () => {
    setScreenWidth(window.innerWidth)
    setScreenHeight(window.innerHeight)
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(()=>{
    window.addEventListener('resize', onResize)

    return ()=> {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return {isMobile, screenWidth, screenHeight}
}