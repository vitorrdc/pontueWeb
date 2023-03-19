import Logo from '../assets/logo-full-white.png'
import Monitor from '../assets/monitor.svg'
import TempoReal from '../assets/tempo-real-02.svg'
import Enviar from '../assets/enviar-02.svg'
import {Link} from 'react-router-dom'
import { Header } from '../Components/Header'


export function Home() {
  return (
      <div className="w-screen h-screen bg-gray-200">
      <Header />
      <div className='w-full flex justify-around bg-red-300 p-16'>
        <div>
          <img 
          src={Monitor} 
          className='w-80'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
         <p className='text-white font-bold text-4xl mb-6'>Bem vindo(a) ao Pontue!</p>
         <p className='text-white font-semibold text-lg mb-10'>Aqui você pode:</p>
         <div className='flex justify-around items-center '>
          <div className='flex flex-col justify-around items-center mr-24'>
            <img 
            src={TempoReal} 
            className='w-36'
            />
            <p className='text-white'>Gestão das entregas</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img 
            src={Enviar} 
            className='w-28'
            />
            <p className='text-white mt-2'>Envio de textos fotografados</p>
          </div>  
         </div>
        </div>      
      </div>  
      <p className='text-xs text-center w-full mt-4'>Todos os direiros reservados à Pontue - Desenvolvido por Vitor Campos :)</p>      
      </div>
  )
}