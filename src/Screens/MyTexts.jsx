import { Header } from '../Components/Header'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { api } from '../services/api'
import { useState } from 'react'

export function MyTexts() {
  const [data, setData] = useState([])
  const [textId, setTextId] = useState('')
  const [itensPerPage, setItensPerPage] = useState(6)
  const [currentePage, setCurrentPage] = useState(0)

  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentePage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = data.slice(startIndex, endIndex)

  const auth = useAuth()

  const userID = auth.user?.id

  async function handleTextsStudents() {
    if (auth.user.id === null) {
      try {
        const request = await api.get(`/index/admin`, {
          headers: { Authorization: `Bearer ${auth.user.token}` },
        })
        const response = request.data.data
        setData(response)
      } catch (error) {
        return alert(error)
      }
    } else {
      try {
        const request = await api.get(`/index/aluno/${userID}`, {
          headers: { Authorization: `Bearer ${auth.user.token}` },
        })
        const response = request.data.data
        setData(response)
      } catch (error) {
        return alert(error)
      }
    }
  }

  async function handleTextById(elementoID) {
    try {
      const request = await api.get(`/redacao/${elementoID}`, {
        headers: { Authorization: `Bearer ${auth.user.token}` },
      })
      const responseId = request.data.data
      setTextId(responseId)
      window.open(responseId.urls[0].url)
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-200">
      <Header />
      <div className="w-full flex flex-col justify-center items-center px-80">
        <div className="flex justify-center items-center mt-4">
          <p className="font-bold text-3xl">Minhas Redações:</p>

          <button
            onClick={handleTextsStudents}
            className="mt-2 bg-green-500 rounded-lg text-white px-2 py-1 ml-2"
          >
            Atualizar
          </button>
        </div>

        <div className="mt-4"></div>
        <div className="w-full mt-2 bg-blue-300 rounded-lg p-4">
          <div className="flex flex-col justify-center">
            <div className="font-bold">Número da Redação</div>
            {Array.from(currentItens).map((elemento, index) => {
              return (
                <div key={index} className="text-black w-full">
                  <div className="flex justify-between mb-2 items-center px-10">
                    <li>{elemento.numero}</li>
                    <button
                      className="w-24 h-10 bg-blue-500 rounded-lg text-white"
                      onClick={() => handleTextById(elemento.id)}
                    >
                      Visualizar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex justify-center mt-2">
            <div className="font-bold text-center mr-4">
              Página {currentePage + 1}
            </div>
            <div>
              {Array.from(Array(pages), (item, index) => {
                return (
                  <button
                    key={index}
                    className="mr-2 bg-pink-400 w-6 rounded-lg text-white"
                    value={index}
                    onClick={(e) => setCurrentPage(Number(e.target.value))}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
