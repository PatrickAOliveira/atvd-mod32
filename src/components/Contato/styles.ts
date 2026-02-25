import { styled } from 'styled-components'

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ddd;
  width: 100%;
`

export const ActionBar = styled.div`
  display: flex;
  gap: 8px;
`
