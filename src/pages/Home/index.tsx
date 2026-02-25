import { HomeContainer } from './styles'
import ContatoList from '../../containers/ContatoList'
import { Link } from 'react-router-dom'
import { Botao } from '../../styles'

const Home = () => {
  return (
    <HomeContainer>
      <h1>Lista de Contatos</h1>
      <Link to="/novo">
        <Botao>Novo Contato</Botao>
      </Link>
      <ContatoList />
    </HomeContainer>
  )
}

export default Home
