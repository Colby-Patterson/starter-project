import {useState} from "react"

export const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = useState(initialState)

  const toggle = () => {
    setIsToggled(!isToggled)
  }

  return {toggle, isToggled, setIsToggled}
}