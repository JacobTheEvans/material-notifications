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
  notifications: Notification[]
}

class SnackbarControlled extends React.Component<{}, IState> {
  state: IState = {
    notifications: [] as Notification[]
  }

  add = (notification: Notification): void => {
    this.setState(({ notifications }) => ({
      notifications: [...notifications, notification]
    }))
  }

  remove = (index: number): void => {
    this.setState(({ notifications }) => ({
      notifications: notifications.filter((_ , i): boolean => index !== i)
    }))
  }

  render () {
    const { notifications } = this.state
    return (
      <SnackbarContainer
        position={Position.bottomLeft}
      >
        {notifications.map(({ message, type, timeout }, i) => (
          <Snackbar
            timeout={timeout}
            message={message}
            type={type}
            onExit={() => {
              this.remove(i)
            }}
          />
        ))}
      </SnackbarContainer>
    )
  }
}

export default SnackbarControlled
