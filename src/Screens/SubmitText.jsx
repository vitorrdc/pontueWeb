import { Header } from '../Components/Header'

export function SubmitText() {
  return (
    <div className="w-screen h-screen flex-1 justify-center items-center">
      <Header />
      <p className="font-bold text-3xl text-center">Enviar redação</p>
      <div className="flex items-center justify-center p-16">
        <input
          type="text"
          placeholder="Digite aqui seu texto"
          className="w-full h-48 text-center rounded-lg bg-blue-200 border border-blue-400"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-green-500 w-32 text-white p-2 rounded-lg">
          Enviar
        </button>
      </div>
    </div>
  )
}
