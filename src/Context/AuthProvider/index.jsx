import { createContext, useEffect, useState } from 'react'
import {
  getuserLocalStorage,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './util'
import { api } from '../../services/api'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = getuserLocalStorage()

    if (user) {
      setUser(user.token)
    }
  }, [])

  async function LoginRequest(email, password) {
    try {
      const request = await api.post('/auth/login', { email, password })

      const payLoad = request.data
      setUser({
        token: payLoad.access_token,
        id: payLoad.aluno_id,
      })
      setUserLocalStorage(payLoad)
      return request.data
    } catch (error) {
      return alert('E-mail e/ou senha inválidos')
    }
  }

  function logout() {
    setUser({})
    setUserLocalStorage(null)
    removeUserLocalStorage()
  }

  return (
    <AuthContext.Provider
      value={{ user, LoginRequest, logout, getuserLocalStorage }}
    >
      {children}
    </AuthContext.Provider>
  )
}
