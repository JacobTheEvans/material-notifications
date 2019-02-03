import React from 'react'
import ReactDOM from 'react-dom'
import Snackbar, { Type } from './components/Snackbar'
import SnackbarContainer, { Position } from './components/SnackbarContainer'

const App: React.FunctionComponent = () => {
  return (
    <SnackbarContainer position={Position.bottomLeft}>
      <Snackbar
        onExit={(): void => console.log('Removing 1')}
        timeout={1500}
        message='Test Message a very very long text message with stuff and things and other things'
        type={Type.plain}
      />
      <Snackbar
        onExit={(): void => console.log('Removing 2')}
        timeout={1500}
        message='Normal test message'
        type={Type.plain}
      />
      <Snackbar
        onExit={(): void => console.log('Removing 3')}
        timeout={1500}
        message='Normal warning message'
        type={Type.warning}
      />
      <Snackbar
        onExit={(): void => console.log('Removing 4')}
        timeout={1500}
        message='Normal alert message'
        type={Type.alert}
      />
      <Snackbar
        onExit={(): void => console.log('Removing 5')}
        timeout={1500}
        message='Normal info message'
        type={Type.info}
      />
    </SnackbarContainer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
