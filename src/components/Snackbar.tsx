import React from 'react'
import styled from 'styled-components'

export enum Type {
  alert = 'alert',
  info = 'info',
  warning = 'warning',
  plain = 'plain'
}

interface IProps {
  message: string,
  type: Type,
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ type }: { type: Type }): string => {
    switch (type) {
      case Type.alert:
        return '#d32f2f'
      case Type.info:
        return '#2979ff'
      case Type.warning:
        return '#ffa000'
      default:
        return '#313131'
    }
  }}
  @media (min-width: 960px) {
    width: 300px;
    border-radius: 4px;
  }
`

const Message = styled.span`
  font-size: 0.875rem;
  line-height: 1.46429em;
  color: #fff;
  flex-grow: 1;
  overflow-wrap: break-word;
`
const Exit = styled.div`
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.46429em;
  color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 50ms ease 50ms;
  &:hover {
    color: #fff;
  }
`

const Snackbar: React.FunctionComponent<IProps> = ({
  message = '',
  type
}) => {
  return (
    <Container
      type={type}
    >
      <Message>
        {message}
      </Message>
      <Exit>
        X
      </Exit>
    </Container>
  )
}

export default Snackbar
