import { useState } from 'react'
import Logo from '../assets/logo-full-white.png'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom'

export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const navigate = useNavigate()

  async function login() {
    if (!email) {
      alert('É necessário inserir um e-mail válido')
      return null
    }
    if (!password) {
      alert('É necessário inserir uma senha válida')
      return null
    }

    try {
      await auth.LoginRequest(email, password)
      navigate('/home')
    } catch (error) {
      return null
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col pt-16 items-center bg-purple-600">
      <img src={Logo} alt="Logo_image" className="w-60 mb-8" />
      <div className="w-96 py-4 bg-white rounded-lg px-4">
        <form className=" flex flex-col justify-center">
          <p className="font-semibold text-gray-800 mb-2">Login</p>
          <input
            type="email"
            className="w-full h-10 border shadow-inner shadow-slate-100 rounded-md p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-semibold text-gray-800 mb-2">Senha</p>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full h-10 border rounded-md p-2 mb-4 shadow-inner shadow-slate-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="bg-purple-800 w-full h-10 rounded-lg mb-6 text-white"
          onClick={login}
        >
          Entrar
        </button>
        <div className="w-full flex flex-col items-center">
          <p className="text-purple-800">Esqueceu a senha?</p>
          <p className="text-purple-800">Precisa de ajuda?</p>
        </div>
      </div>
    </div>
  )
}
