import React from 'react'
import ReactDOM from 'react-dom'
import SnackbarControlled, { Notification } from '../components/SnackbarControlled'

declare global {
  interface Window { SNACKBAR_REACT: any }
}

const node = document.createElement('div')
node.setAttribute('id', 'material-notifications')
document.body.appendChild(node)
ReactDOM.render(
  <SnackbarControlled
    ref={(ourComponent) => { window.SNACKBAR_REACT = ourComponent }}
  />,
  document.getElementById('material-notifications')
)

export function snackbar (notification: Notification) {
  window.SNACKBAR_REACT.add(notification)
}
