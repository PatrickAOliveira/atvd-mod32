import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }
`

export const Botao = styled.button<{ variante?: 'danger' }>`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ theme, variante }) =>
    variante === 'danger' ? theme.colors.danger : theme.colors.primary};
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 24px;
`
