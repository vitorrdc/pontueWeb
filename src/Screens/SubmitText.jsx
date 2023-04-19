import { useState } from 'react'
import { Header } from '../Components/Header'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { api } from '../services/api'

export function SubmitText() {
  const [text, setText] = useState('')
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({ id: '', content: '' })

  const auth = useAuth()

  console.log(auth)

  async function handlePostData() {
    setData({
      id: '1',
      content: text,
    })
    try {
      await api.post(`/alunos/redacao/create`, data, {
        headers: { Authorization: `Bearer ${auth.user.token}` },
      })
      setSuccess(true)
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <div className="w-screen h-screen flex-1 justify-center items-center">
      <Header />
      <p className="font-bold text-3xl text-center">Enviar redação</p>
      <div className="flex items-center justify-center p-16">
        <input
          type="text"
          placeholder="Digite aqui seu texto"
          className="w-full h-48 text-center rounded-lg bg-blue-200 border border-blue-400"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          className="bg-green-500 w-32 text-white p-2 rounded-lg"
          onClick={handlePostData}
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
