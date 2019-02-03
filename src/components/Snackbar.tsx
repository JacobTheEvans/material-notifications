import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

export enum Type {
  alert = 'alert',
  info = 'info',
  warning = 'warning',
  plain = 'plain'
}

interface IProps {
  message: string,
  type: Type,
  onExit: Function,
  timeout: number
}

interface IState {
  isActive: boolean
}

const Container = styled.div`
  z-index: 1400;
  margin: 10px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
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
  &.fade-enter {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0%);
    transition: all 300ms ease-out;
  }

  &.fade-exit {
    opacity: 1;
    transform: scale(1) translateY(0%);
  }

  &.fade-exit-active {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
    transition: all 300ms ease-out;
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

class Snackbar extends React.Component<IProps, IState> {
  state: IState = {
    isActive: true
  }

  componentDidMount () {
    const { timeout } = this.props
    setTimeout(this.exit, timeout)
  }

  exit = (): void => {
    const { onExit } = this.props
    this.setState({
      isActive: false
    }, (): void => { setTimeout(onExit, 800) })
  }

  render() {
    const { isActive } = this.state
    const { message, type } = this.props
    return (
      <CSSTransition
        in={isActive}
        classNames='fade'
        timeout={300}
        unmountOnExit
      >
        {() => (
          <Container
            type={type}
          >
            <Message>
              {message}
            </Message>
            <Exit
              onClick={this.exit}
            >
              X
            </Exit>
          </Container>
        )}
      </CSSTransition>
    )
  }
}

export default Snackbar
