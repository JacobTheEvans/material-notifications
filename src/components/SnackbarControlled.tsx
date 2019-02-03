import React from 'react'
import Snackbar, { Type } from '../components/Snackbar'
import SnackbarContainer, { Position } from '../components/SnackbarContainer'

export interface Notification {
  message: string,
  position: Position,
  type: Type,
  timeout: number
}

interface IState {
  bottomRight: Notification[],
  bottomLeft: Notification[],
  topRight: Notification[],
  topLeft: Notification[]
}

class SnackbarControlled extends React.Component<{}, IState> {
  state: IState = {
    bottomRight: [] as Notification[],
    bottomLeft: [] as Notification[],
    topRight: [] as Notification[],
    topLeft: [] as Notification[]
  }

  add = (notification: Notification): void => {
    switch (notification.position) {
      case Position.bottomLeft:
        this.setState(({ bottomLeft }) => ({
          bottomLeft: [...bottomLeft, notification]
        }))
        break
      case Position.bottomRight:
        this.setState(({ bottomRight }) => ({
          bottomRight: [...bottomRight, notification]
        }))
        break
      case Position.topRight:
        this.setState(({ topRight }) => ({
          topRight: [...topRight, notification]
        }))
        break
      case Position.topLeft:
        this.setState(({ topLeft }) => ({
          topLeft: [...topLeft, notification]
        }))
        break
      default:
        throw new Error(`${notification.position} is not supported`)
    }
  }

  remove = (position: Position, index: number): void => {
    switch (position) {
      case Position.bottomLeft:
        this.setState(({ bottomLeft }) => ({
          bottomLeft: bottomLeft.filter((_ , i): boolean => index !== i)
        }))
        break
      case Position.bottomRight:
        this.setState(({ bottomRight }) => ({
          bottomRight: bottomRight.filter((_ , i): boolean => index !== i)
        }))
        break
      case Position.topRight:
        this.setState(({ topRight }) => ({
          topRight: topRight.filter((_ , i): boolean => index !== i)
        }))
        break
      case Position.topLeft:
        this.setState(({ topLeft }) => ({
          topLeft: topLeft.filter((_ , i): boolean => index !== i)
        }))
        break
      default:
        throw new Error(`${position} is not supported`)
    }
  }

  render () {
    const {
      bottomRight,
      bottomLeft,
      topRight,
      topLeft
    } = this.state
    return (
      <div>
        {Boolean(bottomLeft.length) && (
          <SnackbarContainer
            position={Position.bottomLeft}
          >
            {bottomLeft.map(({ message, type, timeout }, i) => (
              <Snackbar
                timeout={timeout}
                message={message}
                type={type}
                onExit={() => {
                  this.remove(Position.bottomLeft, i)
                }}
              />
            ))}
          </SnackbarContainer>
        )}
        {Boolean(bottomRight.length) && (
          <SnackbarContainer
            position={Position.bottomRight}
          >
            {bottomRight.map(({ message, type, timeout }, i) => (
              <Snackbar
                timeout={timeout}
                message={message}
                type={type}
                onExit={() => {
                  this.remove(Position.bottomRight, i)
                }}
              />
            ))}
          </SnackbarContainer>
        )}
        {Boolean(topRight.length) && (
          <SnackbarContainer
            position={Position.topRight}
          >
            {topRight.map(({ message, type, timeout }, i) => (
              <Snackbar
                timeout={timeout}
                message={message}
                type={type}
                onExit={() => {
                  this.remove(Position.topRight, i)
                }}
              />
            ))}
          </SnackbarContainer>
        )}
        {Boolean(topLeft.length) && (
          <SnackbarContainer
            position={Position.topLeft}
          >
            {topLeft.map(({ message, type, timeout }, i) => (
              <Snackbar
                timeout={timeout}
                message={message}
                type={type}
                onExit={() => {
                  this.remove(Position.topLeft, i)
                }}
              />
            ))}
          </SnackbarContainer>
        )}
      </div>
    )
  }
}

export default SnackbarControlled
