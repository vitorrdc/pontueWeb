import Monitor from '../assets/monitor.svg'
import TempoReal from '../assets/tempo-real-02.svg'
import Enviar from '../assets/enviar-02.svg'
import { Header } from '../Components/Header'

export function Home() {
  return (
    <div className="w-screen bg-red-300 justify-center items-center">
      <Header />
      <div className="w-full h-screen flex justify-around items-center p-16">
        <div>
          <img src={Monitor} alt="monitor_img" className="w-80" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-bold text-4xl mb-6">
            Bem vindo(a) ao Pontue!
          </p>
          <p className="text-white font-semibold text-lg mb-10">
            Aqui você pode:
          </p>
          <div className="flex justify-around items-center">
            <div className="flex flex-col justify-around items-center">
              <img src={TempoReal} alt="tempo_real_img" className="w-36" />
              <p className="text-white">Gestão das entregas</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Enviar} alt="enviar_img" className="w-28" />
              <p className="text-white mt-2">Envio de textos fotografados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
