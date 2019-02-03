import React from 'react'
import ReactDOM from 'react-dom'
import Snackbar, { Type } from './components/Snackbar'

const App: React.FunctionComponent = () => {
  return (
    <div>
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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
