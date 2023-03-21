import Logo from '../assets/logo-full-white.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider/useAuth'

export function Header() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="absolut top-0">
      <header className="flex items-center justify-between bg-purple-800 p-6">
        <img src={Logo} alt="Logo_img" className="w-40" />
        <nav className=" flex justify-around items-center">
          <Link to="/mytexts">
            <button className="mr-4 bg-pink-700 shadow-md shadow-pink-900 text-white p-3  rounded-lg">
              Minhas redações
            </button>
          </Link>

          <button
            className="mr-4 w-16 shadow-md shadow-orange-900 text-white bg-orange-500 rounded-lg h-8"
            onClick={handleLogout}
          >
            Sair
          </button>
        </nav>
      </header>
    </div>
  )
}
