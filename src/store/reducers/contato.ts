import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import contatosData from '../../data'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: contatosData
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const jaExiste = state['itens'].find(
        (c) =>
          c['nome'].toLowerCase() === action['payload']['nome'].toLowerCase()
      )

      if (jaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state['itens'][state['itens'].length - 1]
        const contatoNovo = {
          ...action['payload'],
          id: ultimoContato ? ultimoContato['id'] + 1 : 1
        }
        state['itens'].push(contatoNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state['itens'] = state['itens'].filter(
        (c) => c['id'] !== action['payload']
      )
    },
    alterar: (state, action: PayloadAction<Contato>) => {
      const index = state['itens'].findIndex(
        (c) => c['id'] === action['payload']['id']
      )
      if (index !== -1) {
        state['itens'][index] = action['payload']
      }
    }
  }
})

export const { adicionar, remover, alterar } = contatosSlice.actions
export default contatosSlice.reducer
