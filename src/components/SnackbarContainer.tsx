import React, { ReactNode } from 'react'
import styled from 'styled-components'

export enum Position {
  bottomRight = 'bottomRight',
  bottomLeft = 'bottomLeft',
  topRight = 'topRight',
  topLeft = 'topLeft'
}

interface IProps {
  position: Position,
  children: ReactNode
}

const Container = styled.div`
  z-index: 1400;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  ${({ position }: { position: Position }): string => {
    switch (position) {
      case Position.bottomRight:
        return `
          justify-content: flex-end;
          right: 10px;
          bottom: 10px;
        `
      case Position.bottomLeft:
        return `
          justify-content: flex-end;
          left: 10px;
          bottom: 10px;
        `
      case Position.topRight:
        return `
          justify-content: flex-start;
          top: 10px;
          right: 10px;
        `
      case Position.topLeft:
        return `
          justify-content: flex-start;
          top: 10px;
          left: 10px;
        `
      default:
        return `
          justify-content: flex-end;
          left: 10px;
          bottom: 10px;
        `
    }
  }}
`

const SnackbarContainer: React.FunctionComponent<IProps> = ({
  position,
  children
}) => {
  return (
    <Container
      position={position}
    >
      {children}
    </Container>
  )
}

export default SnackbarContainer
