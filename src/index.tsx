import React from 'react'
import ReactDOM from 'react-dom'
import Snackbar from './components/Snackbar'

const App: React.FunctionComponent = () => {
  return (
    <Snackbar
      message='Test Message'
      type={0}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
