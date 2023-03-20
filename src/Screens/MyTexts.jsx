import { Header } from '../Components/Header'
import axios from 'axios'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { api } from '../services/api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export function MyTexts() {

  const route = useParams()
  const textId = route.params.id


  const auth = useAuth()

  const userID = auth.user?.id
  console.log(auth)

  async function handleTextsAdm() {

    try {
      
      const request = await api.get(`/index/aluno/${userID}`, {headers: { Authorization: `Bearer ${auth.user.token}`}})
      const response = request.data
      console.log(response)

    } catch (error) {
      return alert(error)
    }

  }

  return (
      <div className="w-screen h-screen bg-gray-200">
        <Header />
        <div className='w-full bg-blue-300 flex flex-col justify-center items-center'>
          <p className='font-bold text-3xl mt-6'>Minhas Redações:</p>

          <button 
            onClick={handleTextsAdm}
          >
            Verificar
          </button>

        </div>
      </div>
      
  )
}