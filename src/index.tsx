import React from 'react'
import ReactDOM from 'react-dom'
import Snackbar, { Type } from './components/Snackbar'
import SnackbarContainer, { Position } from './components/SnackbarContainer'

const App: React.FunctionComponent = () => {
  return (
    <SnackbarContainer position={Position.bottomLeft}>
      <Snackbar
        message='Test Message a very very long text message with stuff and things and other things'
        type={Type.plain}
      />
      <Snackbar
        message='Normal test message'
        type={Type.plain}
      />
      <Snackbar
        message='Normal warning message'
        type={Type.warning}
      />
      <Snackbar
        message='Normal alert message'
        type={Type.alert}
      />
      <Snackbar
        message='Normal info message'
        type={Type.info}
      />
    </SnackbarContainer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
