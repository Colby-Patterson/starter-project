import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const login = async (user) => {
    try {
      let res = await axios.post('/api/auth/sign_in', user)
      setUser(res.data.data)
      navigate('/')
    } catch (err) {
      alert('Error occurred with login')
      console.log(err)
    }
  }

  const logout = () => {
    try {
      await axios.delete('/api/auth/sign_out')
      setUser(null)
      navigate('/login')
    } catch (err) {
      setUser(null)
      console.log(err)
    }
  }

  const register = (user) => {
    try {
      let res = await axios.delete('/api/auth/', user)
      setUser(res.data.data)
      navigate('/login')
    } catch (err) {
      alert('Error occurred with register')
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider