import React from 'react'
import styled from 'styled-components'

// enum Position {
  // topLeft,
  // topRight,
  // bottomLeft,
  // bottomRight
// }

enum Type {
  alert,
  info,
  warning
}

interface IProps {
  message: string,
  type: Type,
}

const Container = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  padding: 0px 0.3rem;
  background-color: ${({ type = 0 }: { type: Type }): string => {
    switch (type) {
      case Type.alert:
        return '#f44336'
      case Type.info:
        return '#03a9f4'
      case Type.warning:
        return '#ffb300'
      default:
        return '#546e7a'
    }
  }}
`

const Message = styled.p`
  font-size: 0.875rem;
  line-height: 1.46429em;
  color: white;
`

const Snackbar: React.FunctionComponent<IProps> = ({
  message = '',
  type = 0
}) => {
  return (
    <Container
      type={type}
    >
      <Message>
        {message}
      </Message>
    </Container>
  )
}

export default Snackbar
