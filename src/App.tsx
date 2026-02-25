import { ThemeProvider } from 'styled-components'
import { EstiloGlobal } from './styles'
import { Provider } from 'react-redux'
import store from './store'
import temaPadrao from './themes/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NovoContato from './pages/NovoContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={temaPadrao}>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
