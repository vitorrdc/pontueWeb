import { Header } from '../Components/Header'
import axios from 'axios'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { api } from '../services/api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export function TextsView() {

  const [data, setData] = useState({})

  const auth = useAuth()

  const userID = auth.user?.id


  useEffect(() => {
    api.get('/redacao/' + match.params.id)
    .then( res => {
      setData(res.data)
    })
  }, [match.params.id])



  return (
      <div className="w-screen h-screen bg-gray-200">
        <Header />
        <div className='w-full flex flex-col justify-center items-center px-80'>
          <p className='font-bold text-3xl mt-6'>Minhas Redações:</p>          

        </div>
      </div>
      
  )
}