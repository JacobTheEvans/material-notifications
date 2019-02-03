import React from 'react'
import ReactDOM from 'react-dom'
import SnackbarControlled, { Notification } from '../components/SnackbarControlled'

declare global {
  interface Window {
    SNACKBAR_REACT: any
    snackbar: any
  }
}

export function snackbar (notification: Notification) {
  window.SNACKBAR_REACT.add(notification)
}

const node = document.createElement('div')
node.setAttribute('id', 'material-notifications')
document.body.appendChild(node)
ReactDOM.render(
  <SnackbarControlled
    ref={(component) => {
      window.SNACKBAR_REACT = component
      window.snackbar = snackbar
    }}
  />,
  document.getElementById('material-notifications')
)
