import { createContext, useEffect, useState } from "react";
import { getuserLocalStorage, setUserLocalStorage } from "./util";
import axios from "axios";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [user, setUser ] = useState()

  useEffect(() => {
    const user = getuserLocalStorage()

    if (user) {
      setUser(user.email)
    }
  }, [])

  async function LoginRequest(email, password) {
    try {
      
      const request = await axios.post('https://desafio.pontue.com.br/auth/login', {email, password})

      const payLoad = request.data
        setUser({
          token: payLoad.access_token,
          id: payLoad.aluno_id
        })
        setUserLocalStorage(payLoad)
      return request.data
    } catch (error) {
      return null
      
    }
  }

  function logout () {
     setUser(null)
     setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{...user, LoginRequest, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

