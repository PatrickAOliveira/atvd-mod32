import { useDispatch } from 'react-redux'
import { Campo } from '../../components/Contato/styles'
import { Botao } from '../../styles'
import { useState } from 'react'
import { adicionar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'
import { useMask } from '@react-input/mask'
import { FormContainer } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const inputMask = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ }
  })

  const novoContato = () => {
    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <FormContainer>
      <h1>Novo Contato</h1>
      <Campo
        placeholder="Nome"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <Campo
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Campo
        ref={inputMask}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
        placeholder="Telefone"
        required
      />
      <Botao onClick={novoContato}>Salvar</Botao>
    </FormContainer>
  )
}

export default Formulario
