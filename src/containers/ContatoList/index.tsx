import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ContatoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <div>
      {itens.map((c) => (
        <Contato
          key={c.id}
          email={c.email}
          nome={c.nome}
          telefone={c.telefone}
          id={c.id}
        />
      ))}
    </div>
  )
}

export default ContatoList
