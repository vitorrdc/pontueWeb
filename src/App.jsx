import { AuthProvider } from './Context/AuthProvider'

import { IndexRoutes } from './routes/index.routes'

function App() {
  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>
  )
}

export default App
