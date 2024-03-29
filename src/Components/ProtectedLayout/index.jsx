import { useAuth } from '../../Context/AuthProvider/useAuth'

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth()

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>
  }

  return children
}
