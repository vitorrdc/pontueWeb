import Logo from '../assets/logo-full-white.png'
import Monitor from '../assets/monitor.svg'
import TempoReal from '../assets/tempo-real-02.svg'
import Enviar from '../assets/enviar-02.svg'
import { Header } from '../Components/Header'
import axios from 'axios'
import { useAuth } from '../Context/AuthProvider/useAuth'


export function MyTexts() {

  const auth = useAuth()

  async function handleTextsAdm() {

    try {
      
      const request = await axios.get('https://desafio.pontue.com.br/index/admin', {headers: `Bearer Token${auth.token}`})
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