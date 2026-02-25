import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { Card, Campo, ActionBar } from './styles'
import { Botao } from '../../styles'
import { alterar, remover } from '../../store/reducers/contato'
import { useState } from 'react'

type Props = ContatoClass

const Contato = (contato: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [edit_cont, setEditCont] = useState(contato)

  const salvarContato = () => {
    dispatch(alterar(edit_cont))
    setEditando(false)
  }

  const cancelarEdicao = () => {
    setEditando(false)
  }

  return (
    <Card>
      {editando ? (
        <>
          <Campo
            value={edit_cont.nome}
            onChange={(e) =>
              setEditCont({ ...edit_cont, nome: e.target.value })
            }
          />
          <Campo
            value={edit_cont.email}
            onChange={(e) =>
              setEditCont({ ...edit_cont, email: e.target.value })
            }
          />
          <Campo
            value={edit_cont.telefone}
            onChange={(e) =>
              setEditCont({ ...edit_cont, telefone: e.target.value })
            }
          />
          <Botao onClick={salvarContato}>Salvar</Botao>
          <Botao variante="danger" onClick={cancelarEdicao}>
            Cancelar
          </Botao>
        </>
      ) : (
        <>
          <div>
            <strong>{contato.nome}</strong>
            <p>{contato.email}</p>
            <p>{contato.telefone}</p>
          </div>
          <ActionBar>
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <Botao
              variante="danger"
              onClick={() => dispatch(remover(contato.id))}
            >
              Remover
            </Botao>
          </ActionBar>
        </>
      )}
    </Card>
  )
}

export default Contato
